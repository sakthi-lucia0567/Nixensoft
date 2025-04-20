import { create } from "zustand";
import {
  CreateCareerInput,
  CareerOpening,
  UpdateCareerInput,
} from "@/types/career.schema";

type CareerStore = {
  career: CareerOpening[] | [];
  singleCareer: CareerOpening | null;
  fetchCareers: () => Promise<void>;
  addCareer: (career: CreateCareerInput) => Promise<void>;
  updateCareer: (id: string, career: UpdateCareerInput) => Promise<void>;
  getCareerById: (id: string) => Promise<CareerOpening>;
  deleteCareer: (id: string) => Promise<void>;
  toggleCareerStatus: (id: string) => Promise<void>;
};

export const useCareerStore = create<CareerStore>((set, get) => ({
  career: [],
  singleCareer: null,

  fetchCareers: async () => {
    const res = await fetch("/api/careers", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log("carrererere", data.careers);
    set({ career: data.careers }); // Properly set the state
  },

  getCareerById: async (id: string) => {
    const res = await fetch(`/api/careers/${id}`);
    if (!res.ok) {
      console.error("Failed to fetch career by ID");
      return;
    }
    const { career } = await res.json();
    set({ singleCareer: career });
    return career;
  },

  addCareer: async (career) => {
    const res = await fetch("/api/careers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(career),
    });
    const { career: newCareer } = await res.json();
    set((state) => ({ career: [...state.career, newCareer] }));
  },

  updateCareer: async (id, updatedJob) => {
    const res = await fetch(`/api/careers/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJob),
    });
    const { career: updated } = await res.json();
    set((state) => ({
      career: state.career.map((career) =>
        career._id === id ? updated : career
      ),
    }));
  },

  deleteCareer: async (id) => {
    await fetch(`/api/careers/${id}`, { method: "DELETE" });
    set((state) => ({
      career: state.career.filter((career) => career._id !== id),
    }));
  },

  toggleCareerStatus: async (id) => {
    const res = await fetch(`/api/careers/${id}`, {
      method: "PATCH",
    });
    const { job: toggledJob } = await res.json();
    set((state) => ({
      career: state.career.map((career) =>
        career._id === id ? toggledJob : career
      ),
    }));
  },
}));
