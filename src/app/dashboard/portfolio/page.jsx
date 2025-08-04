"use client"
import Link from "next/link"

export default function PortfolioPage() {
  const portfolioFeatures = [
    {
      title: "CV & Portofolio",
      description: "Kelola CV, portofolio, dan dokumen karir lainnya",
      icon: "📄",
      href: "/dashboard/portfolio/cv",
      color: "from-blue-500 to-cyan-500",
      stats: "CV Score: 85/100",
    },
    {
      title: "Sertifikat",
      description: "Kumpulkan dan showcase sertifikat & achievement",
      icon: "🏆",
      href: "/dashboard/portfolio/certificates",
      color: "from-green-500 to-emerald-500",
      stats: "12 sertifikat",
    },
  ]

  const recentActivity = [
    {
      title: "CV diperbarui",
      description: "Menambahkan pengalaman magang terbaru",
      time: "2 jam lalu",
      icon: "📄",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Sertifikat baru ditambahkan",
      description: "Google Analytics Individual Qualification",
      time: "1 hari lalu",
      icon: "🏆",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Portfolio project uploaded",
      description: "E-commerce website redesign case study",
      time: "3 hari lalu",
      icon: "💼",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  const portfolioStats = [
    { label: "Profile Views", value: "156", icon: "👁️", change: "+12%" },
    { label: "CV Downloads", value: "23", icon: "📥", change: "+5%" },
    { label: "Portfolio Views", value: "89", icon: "💼", change: "+18%" },
    { label: "Certificates", value: "12", icon: "🏆", change: "+2" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Portofolioku 📄</h1>
        <p className="text-blue-100 text-lg">
          Kelola CV, portofolio, dan sertifikat untuk membangun personal branding yang kuat
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl">
                {stat.icon}
              </div>
              <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Portfolio Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioFeatures.map((feature, index) => (
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
                <span className="text-sm text-blue-600 font-medium">{feature.stats}</span>
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
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Aktivitas Terbaru</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
              <div className={`w-10 h-10 ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                {activity.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
                <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Tips */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Tips Portfolio yang Menarik</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Keep It Updated</h3>
            <p className="text-gray-600 text-sm">
              Selalu perbarui CV dan portofolio dengan pengalaman dan project terbaru
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Targeted Content</h3>
            <p className="text-gray-600 text-sm">
              Sesuaikan konten portofolio dengan posisi dan industri yang ditargetkan
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Show Impact</h3>
            <p className="text-gray-600 text-sm">
              Highlight hasil dan dampak dari setiap project atau pengalaman kerja
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
