"use client"

import { useState, useEffect, useCallback } from "react"

export interface FormEntry {
  id: string
  dateTime: string
  name: string
  phoneNumber: string
  companyName: string
  service: string
  message: string
  page: string
}

const useFormEntries = () => {
  const [entries, setEntries] = useState<FormEntry[]>([])

  useEffect(() => {
    const storedEntries = localStorage.getItem("formEntries")
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries))
    }
  }, [])

  const addEntry = useCallback((entry: Omit<FormEntry, "id" | "dateTime">) => {
    const newEntry: FormEntry = {
      ...entry,
      id: Date.now().toString(),
      dateTime: new Date().toISOString(),
    }
    setEntries((prevEntries) => {
      const updatedEntries = [...prevEntries, newEntry]
      localStorage.setItem("formEntries", JSON.stringify(updatedEntries))
      return updatedEntries
    })
  }, [])

  const filterEntries = useCallback(
    (service: string, startDate: string, endDate: string) => {
      return entries.filter((entry) => {
        const entryDate = new Date(entry.dateTime)
        const start = startDate ? new Date(startDate) : new Date(0)
        const end = endDate ? new Date(endDate) : new Date()
        return (
          (!service || service === "all" || entry.service.toLowerCase() === service.toLowerCase()) &&
          entryDate >= start &&
          entryDate <= end
        )
      })
    },
    [entries],
  )

  const searchEntries = useCallback(
    (query: string) => {
      const lowercaseQuery = query.toLowerCase()
      return entries.filter((entry) =>
        Object.values(entry).some((value) => value.toString().toLowerCase().includes(lowercaseQuery)),
      )
    },
    [entries],
  )

  return { entries, addEntry, filterEntries, searchEntries }
}

export default useFormEntries

