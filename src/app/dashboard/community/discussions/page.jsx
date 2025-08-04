"use client"
import { useState } from "react"

export default function DiscussionsPage() {
  const [activeTab, setActiveTab] = useState("trending")

  const trendingDiscussions = [
    {
      id: 1,
      title: "Apakah worth it pindah dari BUMN ke startup?",
      author: "Anonymous",
      replies: 47,
      likes: 123,
      views: 892,
      timeAgo: "1 jam lalu",
      category: "Career Advice",
      isHot: true,
    },
    {
      id: 2,
      title: "Gaji UX Designer di Jakarta vs Bandung",
      author: "DesignLover",
      replies: 23,
      likes: 67,
      views: 445,
      timeAgo: "3 jam lalu",
      category: "Salary",
      isHot: true,
    },
    {
      id: 3,
      title: "Tips interview technical untuk posisi Backend Developer",
      author: "CodeMaster",
      replies: 31,
      likes: 89,
      views: 567,
      timeAgo: "5 jam lalu",
      category: "Interview",
      isHot: false,
    },
  ]

  const recentDiscussions = [
    {
      id: 4,
      title: "Pengalaman magang di perusahaan multinasional",
      author: "FreshGrad2024",
      replies: 12,
      likes: 34,
      views: 156,
      timeAgo: "30 menit lalu",
      category: "Experience",
      isHot: false,
    },
    {
      id: 5,
      title: "Bootcamp vs kuliah untuk karir di tech?",
      author: "TechAspirant",
      replies: 18,
      likes: 45,
      views: 234,
      timeAgo: "1 jam lalu",
      category: "Education",
      isHot: false,
    },
  ]

  const myDiscussions = [
    {
      id: 6,
      title: "Tips networking untuk introvert",
      author: "Sarah Putri",
      replies: 28,
      likes: 76,
      views: 389,
      timeAgo: "2 hari lalu",
      category: "Networking",
      isHot: false,
      isOwn: true,
    },
  ]

  const quickTopics = [
    { emoji: "💼", text: "Job Search Tips", count: 45 },
    { emoji: "💰", text: "Salary Negotiation", count: 32 },
    { emoji: "🎤", text: "Interview Prep", count: 28 },
    { emoji: "🚀", text: "Career Switch", count: 24 },
    { emoji: "📚", text: "Skill Development", count: 19 },
    { emoji: "🏢", text: "Company Culture", count: 16 },
  ]

  const getDiscussions = () => {
    switch (activeTab) {
      case "trending":
        return trendingDiscussions
      case "recent":
        return recentDiscussions
      case "my":
        return myDiscussions
      default:
        return trendingDiscussions
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Diskusi Terbaru 💬</h1>
        <p className="text-green-100 text-lg">Ikuti diskusi hangat dan trending di komunitas PathWise</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            {/* New Discussion Button */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all mb-4">
                + Mulai Diskusi Baru
              </button>
              <p className="text-gray-600 text-sm text-center">
                Punya pertanyaan atau topik menarik? Bagikan dengan komunitas!
              </p>
            </div>

            {/* Quick Topics */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Topik Populer</h3>
              <div className="space-y-3">
                {quickTopics.map((topic, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{topic.emoji}</span>
                        <span className="text-sm font-medium text-gray-900 group-hover:text-green-600">
                          {topic.text}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{topic.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Discussion Rules */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Aturan Diskusi</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Gunakan bahasa yang sopan dan profesional
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Berikan konteks yang jelas dalam pertanyaan
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Hargai pendapat dan pengalaman orang lain
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Jangan spam atau promosi berlebihan
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab("trending")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === "trending"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  🔥 Trending
                </button>
                <button
                  onClick={() => setActiveTab("recent")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === "recent"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  🕒 Terbaru
                </button>
                <button
                  onClick={() => setActiveTab("my")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === "my"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  👤 Diskusi Saya
                </button>
              </nav>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {getDiscussions().map((discussion) => (
                  <div
                    key={discussion.id}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg hover:text-green-600 cursor-pointer">
                            {discussion.title}
                          </h3>
                          {discussion.isHot && (
                            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">🔥 Hot</span>
                          )}
                          {discussion.isOwn && (
                            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Milik Saya</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span>👤 {discussion.author}</span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {discussion.category}
                          </span>
                          <span>⏰ {discussion.timeAgo}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          {discussion.replies} replies
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          {discussion.likes} likes
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          {discussion.views} views
                        </span>
                      </div>
                      <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                        Baca Selengkapnya →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
