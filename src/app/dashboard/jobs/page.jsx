"use client"
import Link from "next/link"

export default function JobsPage() {
  const jobStats = [
    {
      title: "Job Matches",
      value: "24",
      change: "+6 baru",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Applied Jobs",
      value: "8",
      change: "+2 minggu ini",
      icon: "📝",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Interview Calls",
      value: "3",
      change: "+1 baru",
      icon: "📞",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Saved Jobs",
      value: "12",
      change: "5 expired",
      icon: "❤️",
      color: "from-orange-500 to-red-500",
    },
  ]

  const recentJobs = [
    {
      title: "Frontend Developer",
      company: "Tokopedia",
      location: "Jakarta",
      salary: "8-12 juta",
      type: "Full-time",
      match: "95%",
      posted: "2 hari lalu",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      title: "UI/UX Designer",
      company: "Gojek",
      location: "Jakarta",
      salary: "9-15 juta",
      type: "Full-time",
      match: "88%",
      posted: "3 hari lalu",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      title: "Product Manager",
      company: "Shopee",
      location: "Jakarta",
      salary: "15-25 juta",
      type: "Full-time",
      match: "82%",
      posted: "1 minggu lalu",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Peluang Kerja 💼</h1>
        <p className="text-blue-100 text-lg">Temukan pekerjaan impianmu dengan rekomendasi AI yang dipersonalisasi</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-xl`}
              >
                {stat.icon}
              </div>
              <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/dashboard/jobs/recommender">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🎯
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Job Recommender</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dapatkan rekomendasi pekerjaan yang sesuai dengan profil dan preferensi karirmu
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-600 font-medium">24 job matches tersedia</span>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </Link>

        <Link href="/dashboard/jobs/favorites">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              ❤️
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lowongan Favorit</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Kelola dan pantau status aplikasi dari pekerjaan yang kamu simpan
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-red-600 font-medium">12 lowongan tersimpan</span>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent Job Recommendations */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Rekomendasi Terbaru</h2>
          <Link href="/dashboard/jobs/recommender" className="text-blue-600 hover:text-blue-500 font-medium">
            Lihat Semua
          </Link>
        </div>
        <div className="space-y-4">
          {recentJobs.map((job, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <img src={job.logo || "/placeholder.svg"} alt={job.company} className="w-12 h-12 rounded-lg" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>📍 {job.location}</span>
                      <span>💰 {job.salary}</span>
                      <span>⏰ {job.type}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {job.match} match
                  </span>
                  <p className="text-gray-500 text-sm mt-2">{job.posted}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Lamar Sekarang
                </button>
                <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Simpan
                </button>
                <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Search Tips */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Tips Pencarian Kerja</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Optimalkan Profil</h3>
            <p className="text-gray-600 text-sm">
              Lengkapi profil dan CV untuk mendapatkan rekomendasi yang lebih akurat
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Apply Konsisten</h3>
            <p className="text-gray-600 text-sm">Lamar minimal 3-5 pekerjaan per minggu untuk meningkatkan peluang</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Network Aktif</h3>
            <p className="text-gray-600 text-sm">Manfaatkan komunitas dan koneksi untuk mendapatkan referral</p>
          </div>
        </div>
      </div>
    </div>
  )
}
