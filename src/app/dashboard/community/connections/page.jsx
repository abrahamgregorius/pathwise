"use client"
import { useState } from "react"

export default function ConnectionsPage() {
  const [activeTab, setActiveTab] = useState("connections")

  const connections = [
    {
      id: 1,
      name: "Budi Santoso",
      title: "Senior Product Manager",
      company: "Tokopedia",
      avatar: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
      mutualConnections: 12,
      connectionDate: "2024-01-15",
      status: "connected",
      lastActive: "2 jam lalu",
    },
    {
      id: 2,
      name: "Sarah Wijaya",
      title: "Engineering Manager",
      company: "Gojek",
      avatar: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      mutualConnections: 8,
      connectionDate: "2024-01-10",
      status: "connected",
      lastActive: "1 hari lalu",
    },
    {
      id: 3,
      name: "Ahmad Rahman",
      title: "Data Science Director",
      company: "Shopee",
      avatar: "https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80",
      mutualConnections: 15,
      connectionDate: "2024-01-08",
      status: "connected",
      lastActive: "3 hari lalu",
    },
  ]

  const pendingRequests = [
    {
      id: 4,
      name: "Dinda Maharani",
      title: "Product Designer",
      company: "Bukalapak",
      avatar: "/placeholder.svg?height=60&width=60",
      mutualConnections: 5,
      requestDate: "2024-01-18",
      status: "pending",
    },
    {
      id: 5,
      name: "Rizki Pratama",
      title: "Software Engineer",
      company: "Traveloka",
      avatar: "/placeholder.svg?height=60&width=60",
      mutualConnections: 3,
      requestDate: "2024-01-17",
      status: "pending",
    },
  ]

  const suggestions = [
    {
      id: 6,
      name: "Maya Sari",
      title: "UX Researcher",
      company: "OVO",
      avatar: "/placeholder.svg?height=60&width=60",
      mutualConnections: 7,
      reason: "Bekerja di industri yang sama",
      status: "suggested",
    },
    {
      id: 7,
      name: "Andi Wijaya",
      title: "Marketing Manager",
      company: "Grab",
      avatar: "/placeholder.svg?height=60&width=60",
      mutualConnections: 4,
      reason: "Alumni PathWise",
      status: "suggested",
    },
    {
      id: 8,
      name: "Lisa Chen",
      title: "Business Analyst",
      company: "Sea Limited",
      avatar: "/placeholder.svg?height=60&width=60",
      mutualConnections: 9,
      reason: "Skill yang serupa",
      status: "suggested",
    },
  ]

  const connectionStats = [
    { label: "Total Koneksi", value: "48", icon: "🤝" },
    { label: "Pending Requests", value: "5", icon: "⏳" },
    { label: "Mutual Connections", value: "127", icon: "👥" },
    { label: "Profile Views", value: "23", icon: "👁️" },
  ]

  const getTabData = () => {
    switch (activeTab) {
      case "connections":
        return connections
      case "pending":
        return pendingRequests
      case "suggestions":
        return suggestions
      default:
        return connections
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Koneksi Saya 🤝</h1>
        <p className="text-purple-100 text-lg">
          Kelola network profesional dan perluas koneksi untuk mengembangkan karir
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {connectionStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("connections")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "connections"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Koneksi Saya ({connections.length})
            </button>
            <button
              onClick={() => setActiveTab("pending")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "pending"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Permintaan ({pendingRequests.length})
            </button>
            <button
              onClick={() => setActiveTab("suggestions")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "suggestions"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Saran Koneksi ({suggestions.length})
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getTabData().map((person) => (
              <div key={person.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-center mb-4">
                  <img
                    src={person.avatar || "/placeholder.svg"}
                    alt={person.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-bold text-gray-900">{person.name}</h3>
                  <p className="text-gray-600 text-sm">{person.title}</p>
                  <p className="text-gray-500 text-sm">{person.company}</p>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-center">
                    <span className="text-purple-600 font-medium">{person.mutualConnections} mutual connections</span>
                  </div>
                  {person.reason && (
                    <div className="text-center">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                        {person.reason}
                      </span>
                    </div>
                  )}
                  {person.lastActive && (
                    <div className="text-center text-xs text-gray-500">Aktif {person.lastActive}</div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  {activeTab === "connections" && (
                    <>
                      <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                        Kirim Pesan
                      </button>
                      <div className="flex space-x-2">
                        <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                          Lihat Profil
                        </button>
                        <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                          Hapus
                        </button>
                      </div>
                    </>
                  )}
                  {activeTab === "pending" && (
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                        Terima
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Tolak
                      </button>
                    </div>
                  )}
                  {activeTab === "suggestions" && (
                    <>
                      <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                        Kirim Undangan
                      </button>
                      <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        Lihat Profil
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Networking Tips */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Tips Networking Efektif</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">💡 Membangun Koneksi</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Personalisasi pesan saat mengirim undangan
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Aktif berpartisipasi dalam diskusi komunitas
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Berbagi konten yang valuable dan relevan
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">🤝 Memelihara Hubungan</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Rutin berinteraksi dengan koneksi existing
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Tawarkan bantuan sebelum meminta bantuan
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Follow up setelah bertemu di event networking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
