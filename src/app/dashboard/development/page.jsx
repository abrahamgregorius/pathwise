"use client"
import Link from "next/link"

export default function DevelopmentPage() {
  const developmentFeatures = [
    {
      title: "Softskill Coach",
      description: "Tingkatkan soft skills dengan coaching AI personal",
      icon: "🧠",
      href: "/dashboard/development/softskill",
      color: "from-purple-500 to-pink-500",
      stats: "8 skills dikuasai",
    },
    {
      title: "Live Mentoring",
      description: "Sesi mentoring 1-on-1 dengan expert industri",
      icon: "👨‍🏫",
      href: "/dashboard/development/mentoring",
      color: "from-blue-500 to-cyan-500",
      stats: "3 sesi tersedia",
    },
  ]

  const skillProgress = [
    { skill: "Communication", progress: 85, level: "Advanced" },
    { skill: "Leadership", progress: 70, level: "Intermediate" },
    { skill: "Problem Solving", progress: 90, level: "Advanced" },
    { skill: "Time Management", progress: 65, level: "Intermediate" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Pengembangan Diri 📚</h1>
        <p className="text-purple-100 text-lg">
          Tingkatkan soft skills dan dapatkan mentoring dari expert untuk percepat karir
        </p>
      </div>

      {/* Development Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {developmentFeatures.map((feature, index) => (
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

      {/* Skill Progress */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Progress Soft Skills</h2>
        <div className="space-y-6">
          {skillProgress.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{item.skill}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{item.progress}%</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      item.level === "Advanced" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.level}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Sesi Mendatang</h2>
        <div className="space-y-4">
          {[
            {
              title: "Leadership Skills Workshop",
              mentor: "Budi Santoso - Senior Manager at Tokopedia",
              date: "Besok, 14:00 WIB",
              type: "Group Session",
            },
            {
              title: "1-on-1 Career Coaching",
              mentor: "Sarah Wijaya - Product Manager at Gojek",
              date: "Jumat, 10:00 WIB",
              type: "Private Session",
            },
          ].map((session, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{session.title}</h3>
                  <p className="text-gray-600 text-sm">{session.mentor}</p>
                  <p className="text-blue-600 text-sm font-medium mt-1">{session.date}</p>
                </div>
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">{session.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
