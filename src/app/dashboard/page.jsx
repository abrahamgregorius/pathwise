"use client";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "../../../lib/firebaseClient";

export default function DashboardHome() {
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

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data()); // ✅ trigger re-render
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Selamat Datang, {userData?.fullName.toString().split(" ")[0]}! 👋
            </h1>
            <p className="text-blue-100 text-lg">
              Kamu sudah 75% lebih siap untuk memasuki dunia kerja. Ayo
              lanjutkan perjalanan karirmu!
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-6xl">🚀</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/dashboard/career/mapping"
            className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
          >
            Lanjutkan Career Mapping
          </Link>
          <Link
            href="/dashboard/jobs/recommender"
            className="border-2 border-white/30 hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            Lihat Job Baru
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
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
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

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

      {/* Job Recommendations */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Rekomendasi Pekerjaan
          </h2>
          <Link
            href="/dashboard/jobs/recommender"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Lihat Semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobRecommendations.map((job, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={job.logo || "/placeholder.svg"}
                    alt={job.company}
                    className="w-10 h-10 rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                  {job.match} match
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>{job.location}</span>
                <span>{job.type}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
