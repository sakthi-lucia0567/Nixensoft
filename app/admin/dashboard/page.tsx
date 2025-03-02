"use client"

import { useEffect, useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import useFormEntries, { type FormEntry } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const services = [
  "Web Design",
  "Graphic Design",
  "Logo Design",
  "Web Development",
  "Mobile App Development",
  "ECommerce Development",
  "Wordpress Development",
  "CRM Development",
  "SEO Services",
  "Social Media Marketing",
  "Google Ads and Meta Ads",
  "Whatsapp Marketing",
  "Content Marketing",
]

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const {  filterEntries, searchEntries } = useFormEntries()
  const [selectedService, setSelectedService] = useState("all")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("adminLoggedIn")
    if (adminLoggedIn !== "true") {
      router.push("/admin/login")
    } else {
      setIsLoading(false)
    }
  }, [router])

  const filteredEntries = useMemo(() => {
    const filtered = filterEntries(selectedService, startDate, endDate)
    const searched = searchEntries(searchQuery)
    return searched.filter((entry) => filtered.includes(entry))
  }, [selectedService, startDate, endDate, searchQuery, filterEntries, searchEntries])

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    router.push("/admin/login")
  }

  const handleDownloadCSV = () => {
    const csvContent = [
      ["Date & Time", "Name", "Phone Number", "Company Name", "Service", "Message", "Page"],
      ...filteredEntries.map((entry) => [
        new Date(entry.dateTime).toLocaleString(),
        entry.name,
        entry.phoneNumber,
        entry.companyName,
        entry.service,
        entry.message,
        entry.page,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute("href", url)
      link.setAttribute("download", "form_entries.csv")
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const chartData = {
    labels: services,
    datasets: [
      {
        label: "Number of Enquiries",
        data: services.map(
          (service) => filteredEntries.filter((entry) => entry.service.toLowerCase() === service.toLowerCase()).length,
        ),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>

      <div className="mb-6 flex flex-wrap gap-4">
        <Select onValueChange={setSelectedService} value={selectedService}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            {services.map((service) => (
              <SelectItem key={service} value={service.toLowerCase()}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-[200px]"
        />
        <Input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-[200px]"
        />
        <Input
          type="text"
          placeholder="Search entries"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[200px]"
        />
        <Button onClick={handleDownloadCSV}>Download CSV</Button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Service Enquiries Analytics</h2>
        <div className="w-full h-[400px]">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    precision: 0,
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Date & Time</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Phone Number</th>
              <th className="py-2 px-4 border-b">Company Name</th>
              <th className="py-2 px-4 border-b">Service</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Page</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.map((entry: FormEntry) => (
              <tr key={entry.id}>
                <td className="py-2 px-4 border-b">{new Date(entry.dateTime).toLocaleString()}</td>
                <td className="py-2 px-4 border-b">{entry.name}</td>
                <td className="py-2 px-4 border-b">{entry.phoneNumber}</td>
                <td className="py-2 px-4 border-b">{entry.companyName}</td>
                <td className="py-2 px-4 border-b">{entry.service}</td>
                <td className="py-2 px-4 border-b">{entry.message}</td>
                <td className="py-2 px-4 border-b">{entry.page}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

