"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebaseClient";
import Image from "next/image";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
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

  const handleLogout = () => {
    document.cookie = "token=; path=/; max-age=0";
    window.location.href = "/login";
  };

  const menuItems = [
    {
      title: "Beranda",
      href: "/dashboard",
      icon: "🏠",
      description: "Dashboard utama",
    },
    {
      title: "Karierku",
      href: "/dashboard/career",
      icon: "🎯",
      description: "Fitur karir utama",
      submenu: [
        { title: "Career Mapping AI", href: "/dashboard/career/mapping" },
        { title: "Smart CV Analyzer", href: "/dashboard/career/cv-analyzer" },
        { title: "Interview Simulation", href: "/dashboard/career/interview" },
      ],
    },
    {
      title: "Peluang Kerja",
      href: "/dashboard/jobs",
      icon: "💼",
      description: "Rekomendasi kerja",
      submenu: [
        { title: "Job Recommender", href: "/dashboard/jobs/recommender" },
        { title: "Lowongan Favorit", href: "/dashboard/jobs/favorites" },
      ],
    },
    {
      title: "Pengembangan Diri",
      href: "/dashboard/development",
      icon: "📚",
      description: "Upskilling & mentoring",
      submenu: [
        { title: "Softskill Coach", href: "/dashboard/development/softskill" },
        { title: "Live Mentoring", href: "/dashboard/development/mentoring" },
      ],
    },
    {
      title: "Komunitas",
      href: "/dashboard/community",
      icon: "👥",
      description: "Networking & peer learning",
      submenu: [
        { title: "Forum Alumni", href: "/dashboard/community/forum" },
        { title: "Diskusi Terbaru", href: "/dashboard/community/discussions" },
        { title: "Koneksi Saya", href: "/dashboard/community/connections" },
      ],
    },
    {
      title: "Portofolioku",
      href: "/dashboard/portfolio",
      icon: "📄",
      description: "Kelola CV & portofolio",
      submenu: [
        { title: "CV & Portofolio", href: "/dashboard/portfolio/cv" },
        { title: "Sertifikat", href: "/dashboard/portfolio/certificates" },
      ],
    },
    {
      title: "Bantuan",
      href: "/dashboard/help",
      icon: "❓",
      description: "Pusat dukungan",
    },
    {
      title: "Akun Saya",
      href: "/dashboard/account",
      icon: "⚙️",
      description: "Pengaturan akun",
    },
  ];

  const isActive = (href) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:inset-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PathWise
              </h1>
              {/* <Image
                src={"/pathw.png"}
                alt={"PathWise Logo"}
                width={150}
                height={0}
                className="h-10 object-center object-cover rounded-full mr-4"
              /> */}
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#1A1A1A"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* User Profile */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {userData?.fullName
                    .toString()
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {userData?.fullName}
                </h3>
                <p className="text-sm text-gray-600">Fresh Graduate</p>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-900">
                  Progress Karir
                </span>
                <span className="text-sm font-bold text-blue-600">75%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div className="flex-1">
                      <div className="font-medium">{item.title}</div>
                      <div
                        className={`text-xs ${
                          isActive(item.href)
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {item.description}
                      </div>
                    </div>
                    {item.submenu && (
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isActive(item.href) ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="#1A1A1A"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && isActive(item.href) && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                            pathname === subitem.href
                              ? "bg-blue-100 text-blue-700 font-medium"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          {subitem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
            >
              <span className="text-xl">🚪</span>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-80 ">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#1A1A1A"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">
                  Selamat datang kembali,{" "}
                  {userData?.fullName.toString().split(" ")[0]}!
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#1A1A1A"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 1 6 6v2.25l2.25 2.25v2.25H2.25V14.25L4.5 12V9.75a6 6 0 0 1 6-6z"
                  />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {userData?.fullName
                        .toString()
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="#1A1A1A"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
