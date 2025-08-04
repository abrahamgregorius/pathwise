import Link from "next/link";

export default function Career() {
  const stats = [
    {
      title: "CV Score",
      value: "85%",
      change: "+5%",
      icon: "📄",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Job Matches",
      value: "12",
      change: "+3",
      icon: "💼",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Interview Ready",
      value: "78%",
      change: "+12%",
      icon: "🎤",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Skill Progress",
      value: "67%",
      change: "+8%",
      icon: "📚",
      color: "from-orange-500 to-red-500",
    },
  ];

  const recentActivities = [
    {
      title: "CV diupdate",
      description: "Menambahkan pengalaman magang baru",
      time: "2 jam lalu",
      icon: "📄",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Interview simulation selesai",
      description: "Score: 82/100 - Software Engineer",
      time: "1 hari lalu",
      icon: "🎤",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Job baru tersedia",
      description: "Frontend Developer di Tokopedia",
      time: "2 hari lalu",
      icon: "💼",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Mentoring session",
      description: "1-on-1 dengan Senior Product Manager",
      time: "3 hari lalu",
      icon: "👨‍🏫",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const upcomingEvents = [
    {
      title: "Mentoring Session",
      description: "Career Planning dengan Budi Santoso",
      time: "Besok, 14:00",
      type: "mentoring",
    },
    {
      title: "Interview Simulation",
      description: "Practice untuk posisi Data Analyst",
      time: "Jumat, 10:00",
      type: "interview",
    },
    {
      title: "Webinar",
      description: "Tips Lolos Interview di Startup",
      time: "Sabtu, 19:00",
      type: "webinar",
    },
  ];

  const jobRecommendations = [
    {
      title: "Frontend Developer",
      company: "Tokopedia",
      location: "Jakarta",
      type: "Full-time",
      match: "95%",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      title: "UI/UX Designer",
      company: "Gojek",
      location: "Jakarta",
      type: "Full-time",
      match: "88%",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      title: "Product Manager",
      company: "Shopee",
      location: "Jakarta",
      type: "Full-time",
      match: "82%",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <>
      <div className="space-y-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Aktivitas Terbaru
                </h2>
                <Link
                  href="/dashboard/activity"
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  Lihat Semua
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <div
                      className={`w-10 h-10 ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      {activity.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {activity.description}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Jadwal Mendatang
              </h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-4 py-2"
                  >
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-xs">{event.description}</p>
                    <p className="text-blue-600 text-xs font-medium mt-1">
                      {event.time}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/dashboard/calendar"
                className="block w-full text-center bg-blue-50 text-blue-600 py-3 rounded-xl font-medium mt-4 hover:bg-blue-100 transition-colors"
              >
                Lihat Kalender
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <Link
                  href="/dashboard/career/interview"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all"
                >
                  <span className="text-xl">🎤</span>
                  <span className="font-medium text-gray-900">
                    Mulai Interview Simulation
                  </span>
                </Link>
                <Link
                  href="/dashboard/career/cv-analyzer"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all"
                >
                  <span className="text-xl">📄</span>
                  <span className="font-medium text-gray-900">Analisis CV</span>
                </Link>
                <Link
                  href="/dashboard/development/mentoring"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all"
                >
                  <span className="text-xl">👨‍🏫</span>
                  <span className="font-medium text-gray-900">
                    Book Mentoring
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
