import { create } from "zustand"
import { persist } from "zustand/middleware"
import { v4 as uuidv4 } from "uuid"

export type Requirement = string

export type JobOpening = {
  id: string
  title: string
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote"
  location: string
  description: string
  requirements: Requirement[]
  isActive: boolean
  createdAt: string
  updatedAt: string
}

type JobStore = {
  jobs: JobOpening[]
  addJob: (job: Omit<JobOpening, "id" | "createdAt" | "updatedAt">) => string
  updateJob: (id: string, job: Partial<Omit<JobOpening, "id" | "createdAt" | "updatedAt">>) => void
  deleteJob: (id: string) => void
  getJob: (id: string) => JobOpening | undefined
  toggleJobStatus: (id: string) => void
}

// Sample job openings data
const initialJobs: JobOpening[] = [
  {
    id: "1",
    title: "Senior SEO Specialist",
    type: "Full-time",
    location: "Coimbatore, Tamil Nadu",
    description:
      "We're looking for an experienced SEO specialist to develop and implement SEO strategies for our clients.",
    requirements: [
      "3+ years of experience in SEO",
      "Proficiency in SEO tools like SEMrush, Ahrefs, Google Analytics",
      "Strong analytical and problem-solving skills",
      "Excellent communication skills",
    ],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Social Media Manager",
    type: "Full-time",
    location: "Coimbatore, Tamil Nadu",
    description:
      "Join our team as a Social Media Manager to create and manage social media strategies for our clients.",
    requirements: [
      "2+ years of experience in social media marketing",
      "Experience with social media management tools",
      "Creative mindset and excellent content creation skills",
      "Knowledge of social media analytics",
    ],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Content Writer",
    type: "Part-time",
    location: "Remote / Coimbatore",
    description:
      "We're seeking talented content writers to create engaging and SEO-friendly content for various industries.",
    requirements: [
      "Strong writing and editing skills",
      "Understanding of SEO principles",
      "Ability to research and write about diverse topics",
      "Attention to detail and ability to meet deadlines",
    ],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Web Developer",
    type: "Full-time",
    location: "Coimbatore, Tamil Nadu",
    description: "Looking for a skilled web developer to create responsive and user-friendly websites for our clients.",
    requirements: [
      "Proficiency in HTML, CSS, JavaScript, and React",
      "Experience with WordPress and other CMS platforms",
      "Understanding of UI/UX principles",
      "Knowledge of SEO best practices for web development",
    ],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export const useJobStore = create<JobStore>()(
  persist(
    (set, get) => ({
      jobs: initialJobs,

      addJob: (job) => {
        const id = uuidv4()
        const now = new Date().toISOString()

        set((state) => ({
          jobs: [
            ...state.jobs,
            {
              ...job,
              id,
              createdAt: now,
              updatedAt: now,
            },
          ],
        }))

        return id
      },

      updateJob: (id, updatedJob) => {
        set((state) => ({
          jobs: state.jobs.map((job) =>
            job.id === id
              ? {
                  ...job,
                  ...updatedJob,
                  updatedAt: new Date().toISOString(),
                }
              : job,
          ),
        }))
      },

      deleteJob: (id) => {
        set((state) => ({
          jobs: state.jobs.filter((job) => job.id !== id),
        }))
      },

      getJob: (id) => {
        return get().jobs.find((job) => job.id === id)
      },

      toggleJobStatus: (id) => {
        set((state) => ({
          jobs: state.jobs.map((job) =>
            job.id === id
              ? {
                  ...job,
                  isActive: !job.isActive,
                  updatedAt: new Date().toISOString(),
                }
              : job,
          ),
        }))
      },
    }),
    {
      name: "job-store",
    },
  ),
)

