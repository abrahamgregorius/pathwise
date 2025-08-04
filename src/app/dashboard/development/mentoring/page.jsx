"use client"
import { useState } from "react"

export default function MentoringPage() {
  const [selectedMentor, setSelectedMentor] = useState(null)

  const mentors = [
    {
      id: 1,
      name: "Budi Santoso",
      title: "Senior Product Manager",
      company: "Tokopedia",
      experience: "8+ years",
      rating: 4.9,
      sessions: 156,
      price: "150k/session",
      avatar: "/placeholder.svg?height=80&width=80",
      expertise: ["Product Strategy", "Leadership", "Career Growth"],
      bio: "Experienced product manager with track record of launching successful products at scale.",
    },
    {
      id: 2,
      name: "Sarah Wijaya",
      title: "Engineering Manager",
      company: "Gojek",
      experience: "6+ years",
      rating: 4.8,
      sessions: 89,
      price: "125k/session",
      avatar: "/placeholder.svg?height=80&width=80",
      expertise: ["Technical Leadership", "Team Management", "Software Architecture"],
      bio: "Tech leader passionate about building high-performing engineering teams.",
    },
    {
      id: 3,
      name: "Ahmad Rahman",
      title: "Data Science Director",
      company: "Shopee",
      experience: "10+ years",
      rating: 4.9,
      sessions: 203,
      price: "200k/session",
      avatar: "/placeholder.svg?height=80&width=80",
      expertise: ["Data Science", "Machine Learning", "Analytics"],
      bio: "Data science expert with extensive experience in e-commerce and fintech.",
    },
  ]

  const upcomingSessions = [
    {
      mentor: "Budi Santoso",
      topic: "Career Planning Strategy",
      date: "Besok, 14:00 WIB",
      duration: "60 menit",
      type: "Video Call",
    },
    {
      mentor: "Sarah Wijaya",
      topic: "Technical Interview Preparation",
      date: "Jumat, 10:00 WIB",
      duration: "45 menit",
      type: "Video Call",
    },
  ]

  const pastSessions = [
    {
      mentor: "Ahmad Rahman",
      topic: "Data Science Career Path",
      date: "15 Jan 2024",
      rating: 5,
      feedback: "Sangat membantu dalam memahami roadmap data science",
    },
    {
      mentor: "Budi Santoso",
      topic: "Product Management Basics",
      date: "10 Jan 2024",
      rating: 5,
      feedback: "Insight yang valuable tentang PM role",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Live Mentoring 👨‍🏫</h1>
        <p className="text-blue-100 text-lg">
          Dapatkan guidance personal dari expert industri untuk percepat pertumbuhan karir
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Sessions</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">📚</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Upcoming</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">📅</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.9</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">⭐</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Hours Mentored</p>
              <p className="text-2xl font-bold text-gray-900">18</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">⏰</span>
            </div>
          </div>
        </div>
      </div>

      {/* Available Mentors */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Mentor Tersedia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <img
                  src={mentor.avatar || "/placeholder.svg"}
                  alt={mentor.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold text-gray-900">{mentor.name}</h3>
                <p className="text-gray-600 text-sm">{mentor.title}</p>
                <p className="text-gray-500 text-sm">{mentor.company}</p>
              </div>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience:</span>
                  <span className="font-medium">{mentor.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating:</span>
                  <span className="font-medium">
                    ⭐ {mentor.rating} ({mentor.sessions} sessions)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium text-blue-600">{mentor.price}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 text-sm mb-2">{mentor.bio}</p>
                <div className="flex flex-wrap gap-1">
                  {mentor.expertise.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedMentor(mentor)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Sesi Mendatang</h2>
        <div className="space-y-4">
          {upcomingSessions.map((session, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{session.topic}</h3>
                  <p className="text-gray-600 text-sm">dengan {session.mentor}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>📅 {session.date}</span>
                    <span>⏱️ {session.duration}</span>
                    <span>💻 {session.type}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Join Session
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Sessions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Riwayat Sesi</h2>
        <div className="space-y-4">
          {pastSessions.map((session, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{session.topic}</h3>
                  <p className="text-gray-600 text-sm">dengan {session.mentor}</p>
                  <p className="text-gray-500 text-sm">{session.date}</p>
                  <p className="text-gray-700 text-sm mt-2 italic">"{session.feedback}"</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    {[...Array(session.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <img
                src={selectedMentor.avatar || "/placeholder.svg"}
                alt={selectedMentor.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">{selectedMentor.name}</h3>
              <p className="text-gray-600">
                {selectedMentor.title} at {selectedMentor.company}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Tanggal</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Waktu</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>09:00 - 10:00</option>
                  <option>10:00 - 11:00</option>
                  <option>14:00 - 15:00</option>
                  <option>15:00 - 16:00</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Topic/Goals</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="3"
                  placeholder="Jelaskan apa yang ingin kamu diskusikan..."
                ></textarea>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedMentor(null)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Book Session - {selectedMentor.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
