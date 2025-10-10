"use client"
import { useState } from "react"

export default function FavoriteJobsPage() {
  const [activeTab, setActiveTab] = useState("saved")

  const savedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tokopedia",
      location: "Jakarta",
      salary: "8-12 juta",
      savedDate: "2024-01-15",
      status: "active",
      deadline: "2024-02-15",
      logo: "https://avatars.githubusercontent.com/u/10230001?s=280&v=4",
      
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Gojek",
      location: "Jakarta",
      salary: "9-15 juta",
      savedDate: "2024-01-12",
      status: "active",
      deadline: "2024-02-10",
      logo: "https://yt3.googleusercontent.com/VODMS6vAfBMjEmr--IsnIMH7flki7ewherbq_NJg37oj46c3IQchOHU8GqMITGN2zOS10EwctA=s900-c-k-c0x00ffffff-no-rj",

    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Shopee",
      location: "Jakarta",
      salary: "7-11 juta",
      savedDate: "2024-01-08",
      status: "expired",
      deadline: "2024-01-20",
      logo: "https://yt3.googleusercontent.com/m6n-XR5esmAezvZ-FNmwN4HYt4z2g07iTZ-zqEmkEIPuOF_xFYCazXBTQJAFJL1Zgpne1IZ65A=s900-c-k-c0x00ffffff-no-rj",
    },
  ]

  const appliedJobs = [
    {
      id: 1,
      title: "Product Manager",
      company: "Bukalapak",
      location: "Jakarta",
      salary: "15-25 juta",
      appliedDate: "2024-01-10",
      status: "interview",
      nextStep: "Technical Interview - 20 Jan 2024",
      logo: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Traveloka",
      location: "Jakarta",
      salary: "10-16 juta",
      appliedDate: "2024-01-08",
      status: "review",
      nextStep: "Menunggu review HR",
      logo: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      title: "Marketing Specialist",
      company: "OVO",
      location: "Jakarta",
      salary: "6-10 juta",
      appliedDate: "2024-01-05",
      status: "rejected",
      nextStep: "Aplikasi ditolak",
      logo: "/placeholder.svg?height=50&width=50",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700"
      case "expired":
        return "bg-red-100 text-red-700"
      case "interview":
        return "bg-blue-100 text-blue-700"
      case "review":
        return "bg-yellow-100 text-yellow-700"
      case "rejected":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Aktif"
      case "expired":
        return "Expired"
      case "interview":
        return "Interview"
      case "review":
        return "Review"
      case "rejected":
        return "Ditolak"
      default:
        return status
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Lowongan Favorit ❤️</h1>
        <p className="text-red-100 text-lg">Kelola dan pantau status aplikasi dari pekerjaan yang kamu simpan</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Tersimpan</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">💾</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Sudah Dilamar</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">📝</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Interview</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">🎤</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Expired</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">⏰</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("saved")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "saved"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Tersimpan ({savedJobs.length})
            </button>
            <button
              onClick={() => setActiveTab("applied")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "applied"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Sudah Dilamar ({appliedJobs.length})
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "saved" && (
            <div className="space-y-4">
              {savedJobs.map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <img src={job.logo || "/placeholder.svg"} alt={job.company} className="w-12 h-12 rounded-lg" />
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>📍 {job.location}</span>
                          <span>💰 {job.salary}</span>
                          <span>📅 Disimpan: {job.savedDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getStatusColor(job.status)}`}>
                        {getStatusText(job.status)}
                      </span>
                      <p className="text-gray-500 text-sm mt-2">Deadline: {job.deadline}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Lamar Sekarang
                    </button>
                    <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Lihat Detail
                    </button>
                    <button className="border border-red-300 text-red-700 py-2 px-4 rounded-lg font-medium hover:bg-red-50 transition-colors">
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "applied" && (
            <div className="space-y-4">
              {appliedJobs.map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <img src={job.logo || "/placeholder.svg"} alt={job.company} className="w-12 h-12 rounded-lg" />
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>📍 {job.location}</span>
                          <span>💰 {job.salary}</span>
                          <span>📅 Dilamar: {job.appliedDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getStatusColor(job.status)}`}>
                        {getStatusText(job.status)}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Next Step:</span> {job.nextStep}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Lihat Detail
                    </button>
                    <button className="border border-blue-300 text-blue-700 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                      Update Status
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
