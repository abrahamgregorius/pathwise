"use client";
import Link from "next/link";

export default function CareerPage() {
  const careerFeatures = [
    {
      title: "Career Mapping AI",
      description: "Temukan jalur karir ideal dengan analisis AI mendalam",
      icon: "🗺️",
      href: "/dashboard/career/mapping",
      color: "from-blue-500 to-cyan-500",
      stats: "85% akurasi prediksi",
    },
    {
      title: "Smart CV Analyzer",
      description: "Analisis CV dengan AI dan dapatkan saran peningkatan",
      icon: "📄",
      href: "/dashboard/career/cv-analyzer",
      color: "from-green-500 to-emerald-500",
      stats: "Score CV: 85/100",
    },
    {
      title: "Interview Simulation",
      description: "Latihan wawancara dengan AI untuk meningkatkan performa",
      icon: "🎤",
      href: "/dashboard/career/interview",
      color: "from-purple-500 to-pink-500",
      stats: "12 simulasi selesai",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Karierku 🎯</h1>
        <p className="text-blue-100 text-lg">
          Kelola dan kembangkan karir impianmu dengan bantuan AI dan tools
          canggih
        </p>
      </div>

      {/* Career Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {careerFeatures.map((feature, index) => (
          <Link key={index} href={feature.href}>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 font-medium">
                  {feature.stats}
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Aktivitas Karir Terbaru
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "Career Mapping selesai",
              description: "Jalur karir Software Engineer telah dipetakan",
              time: "2 jam lalu",
              icon: "🗺️",
            },
            {
              title: "CV Score meningkat",
              description: "Score CV naik dari 78 menjadi 85",
              time: "1 hari lalu",
              icon: "📈",
            },
            {
              title: "Interview simulation",
              description: "Simulasi untuk posisi Frontend Developer",
              time: "3 hari lalu",
              icon: "🎤",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-lg">{activity.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
                <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
