"use client"
import Link from "next/link"

export default function CommunityPage() {
  const communityFeatures = [
    {
      title: "Forum Alumni",
      description: "Diskusi dan networking dengan sesama alumni PathWise",
      icon: "🎓",
      href: "/dashboard/community/forum",
      color: "from-blue-500 to-cyan-500",
      stats: "2.5k+ members",
    },
    {
      title: "Diskusi Terbaru",
      description: "Topik hangat dan trending di komunitas",
      icon: "💬",
      href: "/dashboard/community/discussions",
      color: "from-green-500 to-emerald-500",
      stats: "156 diskusi aktif",
    },
    {
      title: "Koneksi Saya",
      description: "Kelola network profesional dan mentor",
      icon: "🤝",
      href: "/dashboard/community/connections",
      color: "from-purple-500 to-pink-500",
      stats: "48 koneksi",
    },
  ]

  const trendingTopics = [
    {
      title: "Tips Interview di Startup Unicorn",
      author: "Sarah Putri",
      replies: 24,
      likes: 89,
      category: "Career Tips",
      time: "2 jam lalu",
    },
    {
      title: "Roadmap Menjadi Data Scientist 2024",
      author: "Ahmad Rahman",
      replies: 18,
      likes: 67,
      category: "Learning Path",
      time: "5 jam lalu",
    },
    {
      title: "Pengalaman Kerja Remote di Perusahaan Global",
      author: "Budi Santoso",
      replies: 31,
      likes: 102,
      category: "Work Experience",
      time: "1 hari lalu",
    },
  ]

  const communityStats = [
    { label: "Total Members", value: "2,547", icon: "👥" },
    { label: "Active Discussions", value: "156", icon: "💬" },
    { label: "Success Stories", value: "89", icon: "🎉" },
    { label: "Mentors Available", value: "24", icon: "👨‍🏫" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Komunitas 👥</h1>
        <p className="text-purple-100 text-lg">
          Bergabung dengan komunitas PathWise untuk networking, sharing, dan saling mendukung dalam perjalanan karir
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {communityStats.map((stat, index) => (
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

      {/* Community Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {communityFeatures.map((feature, index) => (
          <Link key={index} href={feature.href}>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-600 font-medium">{feature.stats}</span>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Trending Discussions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Diskusi Trending 🔥</h2>
          <Link href="/dashboard/community/discussions" className="text-purple-600 hover:text-purple-500 font-medium">
            Lihat Semua
          </Link>
        </div>
        <div className="space-y-4">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{topic.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>👤 {topic.author}</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                      {topic.category}
                    </span>
                    <span>⏰ {topic.time}</span>
                  </div>
                </div>
              </div>
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
                  {topic.replies} replies
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
                  {topic.likes} likes
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Panduan Komunitas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">✅ Yang Dianjurkan</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Berbagi pengalaman dan tips karir yang bermanfaat
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Memberikan feedback konstruktif dan supportif
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Bertanya dengan sopan dan jelas
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Menghormati privasi dan pendapat orang lain
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">❌ Yang Tidak Diperbolehkan</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Spam, promosi berlebihan, atau konten tidak relevan
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Bahasa kasar, diskriminasi, atau harassment
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Membagikan informasi pribadi atau rahasia perusahaan
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Konten yang melanggar hukum atau etika
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
