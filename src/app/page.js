"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    PathWise
                  </h1>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-8">
                <a
                  href="#fitur"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                >
                  Fitur
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
                <a
                  href="#tentang"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                >
                  Tentang
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
                <a
                  href="#komunitas"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                >
                  Komunitas
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                  Mulai Gratis
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
                  ></span>
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                      isMobileMenuOpen
                        ? "-rotate-45 -translate-y-1"
                        : "translate-y-0.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100">
            <a
              href="#fitur"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={toggleMobileMenu}
            >
              Fitur
            </a>
            <a
              href="#tentang"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={toggleMobileMenu}
            >
              Tentang
            </a>
            <a
              href="#komunitas"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={toggleMobileMenu}
            >
              Komunitas
            </a>
            <div className="px-4 pt-2">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                Mulai Gratis
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 text-sm font-medium mb-8 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Bergabung dengan 10,000+ Fresh Graduate
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Wujudkan Karir
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Impianmu
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-600 font-normal mt-2">
                dengan AI
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Platform navigasi karir terdepan untuk fresh graduate Indonesia.
              <span className="font-semibold text-gray-800">
                Dapatkan panduan personal, mentoring eksklusif,
              </span>
              dan peluang kerja yang tepat untukmu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Mulai Perjalanan Gratis</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </button>
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Tonton Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">
                  10K+
                </div>
                <div className="text-sm text-gray-600">Pengguna Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">Mentor Expert</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-pink-600 mb-1">
                  85%
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-indigo-600 mb-1">
                  1000+
                </div>
                <div className="text-sm text-gray-600">Job Openings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-red-50 to-orange-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
              <span className="text-2xl mr-2">⚠️</span>
              Krisis Karir Fresh Graduate
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Masalah yang Harus
              <span className="block text-red-600">Segera Diatasi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Realita pahit yang dihadapi jutaan fresh graduate Indonesia setiap
              tahunnya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            {[
              {
                icon: "📊",
                title: "1+ Juta Lulusan Menganggur",
                desc: "Setiap tahun, lebih dari 1 juta fresh graduate menghadapi pengangguran dan kebingungan karir yang berkepanjangan",
                color: "from-red-500 to-pink-500",
              },
              {
                icon: "📈",
                title: "Pengangguran Tertinggi",
                desc: "Usia 19-24 tahun memiliki tingkat pengangguran tertinggi di Indonesia, mencapai angka yang mengkhawatirkan",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: "⚡",
                title: "Skill Gap Melebar",
                desc: "Ketidaksesuaian yang semakin besar antara skill lulusan dengan kebutuhan industri modern",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: "🎯",
                title: "Kurang Panduan",
                desc: "Minimnya akses terhadap informasi karir, mentoring, dan panduan yang tepat untuk memasuki dunia kerja",
                color: "from-pink-500 to-red-500",
              },
            ].map((item, index) => (
              <div key={index} className="group h-full">
                <div className="flex flex-col h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-red-100">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${item.color} rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-green-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              <span className="text-2xl mr-2">🚀</span>
              Solusi Revolusioner
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              PathWise: Platform
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Navigasi Karir AI
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Menggabungkan kekuatan Artificial Intelligence dengan mentoring
              personal untuk
              <span className="font-semibold text-green-700">
                {" "}
                mengubah cara fresh graduate Indonesia memulai karir
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: "🤖",
                title: "AI Career Mapping",
                desc: "Algoritma machine learning canggih yang menganalisis minat, bakat, dan tren industri untuk memberikan rekomendasi karir yang tepat",
                features: [
                  "Analisis Kepribadian",
                  "Prediksi Tren Karir",
                  "Matching Akurat",
                ],
              },
              {
                icon: "👥",
                title: "Expert Mentoring",
                desc: "Akses eksklusif ke mentor profesional berpengalaman dari berbagai industri untuk guidance personal yang mendalam",
                features: [
                  "1-on-1 Sessions",
                  "Industry Experts",
                  "Career Coaching",
                ],
              },
              {
                icon: "💼",
                title: "Smart Job Matching",
                desc: "Platform job matching berbasis AI yang menghubungkan kamu dengan peluang kerja yang sesuai dengan profil dan aspirasi karir",
                features: [
                  "AI Job Matching",
                  "Skill Assessment",
                  "Interview Prep",
                ],
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-green-100">
                  <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-green-700"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="fitur"
        className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <span className="text-2xl mr-2">🛠️</span>
              Fitur Lengkap & Canggih
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Semua yang Kamu Butuhkan
              <span className="block text-blue-600">dalam Satu Platform</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fitur-fitur revolusioner yang dirancang khusus untuk membantu
              fresh graduate Indonesia sukses berkarir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[
              {
                icon: "🔍",
                title: "AI Career Path Finder",
                desc: "Temukan jalur karir ideal berdasarkan analisis mendalam terhadap minat, bakat, dan potensi masa depan",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "📄",
                title: "Smart CV Builder",
                desc: "Buat CV profesional dengan template ATS-friendly dan tracking portfolio karir real-time",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: "🎯",
                title: "Intelligent Job Board",
                desc: "Akses ribuan lowongan kerja yang dipersonalisasi sesuai profil dan preferensi karirmu",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: "👨‍🏫",
                title: "Premium Mentoring",
                desc: "Sesi mentoring eksklusif dengan profesional senior dari berbagai industri terkemuka",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: "🎤",
                title: "AI Interview Simulator",
                desc: "Latihan wawancara interaktif dengan AI untuk meningkatkan confidence dan performance",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: "📚",
                title: "Skill Development Hub",
                desc: "Akses ke mini courses, bootcamps intensif, dan sertifikasi untuk upgrade skill",
                color: "from-teal-500 to-green-500",
              },
            ].map((item, index) => (
              <div key={index} className="group h-full">
                <div className="flex flex-col h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${item.color} rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        id="tentang"
        className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%239C92AC fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <span className="text-2xl mr-2">🎯</span>
              Visi & Misi Kami
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Membangun Masa Depan
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Indonesia Emas 2045
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-8">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">Visi</h3>
              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                Menjadi platform terdepan yang mempersiapkan fresh graduate
                Indonesia untuk memasuki dunia kerja secara efektif,
                <span className="font-semibold text-white">
                  {" "}
                  menciptakan generasi profesional yang kompeten dan siap
                  bersaing di era digital
                </span>
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-8">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">Misi</h3>
              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                Mendukung program pemerintah seperti Digital Talent Scholarship
                dan selaras dengan tujuan Indonesia Emas 2045,
                <span className="font-semibold text-white">
                  {" "}
                  melalui inovasi teknologi AI dan ekosistem mentoring yang
                  berkelanjutan
                </span>
              </p>
            </div>
          </div>

          <div className="mt-16 lg:mt-24 text-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                  2024
                </div>
                <div className="text-sm text-blue-200">Tahun Berdiri</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">
                  50+
                </div>
                <div className="text-sm text-blue-200">Kota di Indonesia</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-pink-400 mb-2">
                  100+
                </div>
                <div className="text-sm text-blue-200">Partner Perusahaan</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">
                  24/7
                </div>
                <div className="text-sm text-blue-200">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section
        id="komunitas"
        className="py-20 lg:py-32 bg-gradient-to-b from-purple-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <span className="text-2xl mr-2">👥</span>
              Komunitas Terbesar Indonesia
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bergabung dengan
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ribuan Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Forum komunitas eksklusif tempat alumni dan mentor berbagi
              pengalaman, tips, dan peluang karir
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-purple-100 mb-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  10K+
                </div>
                <p className="text-gray-600 font-medium">
                  Fresh Graduate Terdaftar
                </p>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <p className="text-gray-600 font-medium">Mentor Profesional</p>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  85%
                </div>
                <p className="text-gray-600 font-medium">
                  Success Rate Placement
                </p>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  4.9/5
                </div>
                <p className="text-gray-600 font-medium">Rating Kepuasan</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Putri",
                role: "Software Engineer at Tokopedia",
                image: "/placeholder.svg?height=60&width=60",
                quote:
                  "PathWise mengubah hidup saya! Dari fresh graduate bingung menjadi software engineer di unicorn startup dalam 6 bulan.",
              },
              {
                name: "Ahmad Rizki",
                role: "Data Analyst at Gojek",
                image: "/placeholder.svg?height=60&width=60",
                quote:
                  "Mentoring 1-on-1 dan AI career mapping benar-benar membantu saya menemukan passion di bidang data science.",
              },
              {
                name: "Dinda Maharani",
                role: "Product Manager at Shopee",
                image: "/placeholder.svg?height=60&width=60",
                quote:
                  "Interview simulator AI-nya luar biasa! Confidence saya meningkat drastis dan berhasil lolos interview impian.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={200}
                    height={0}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Siap Mengubah Hidupmu?
          </h2>
          <p className="text-xl lg:text-2xl mb-10 opacity-90 leading-relaxed">
            Bergabunglah dengan{" "}
            <span className="font-bold">10,000+ fresh graduate</span> yang telah
            menemukan jalur karir impian mereka.{" "}
            <span className="font-bold">Mulai gratis hari ini!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Daftar Gratis Sekarang</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Konsultasi Gratis</span>
            </button>
          </div>

          <div className="text-center opacity-75">
            <p className="text-sm mb-2">
              ✨ Tanpa biaya tersembunyi • ✨ Akses selamanya • ✨ Support 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  PathWise
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Platform navigasi karir terdepan untuk fresh graduate Indonesia.
                Wujudkan karir impianmu dengan AI dan mentoring expert.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                    >
                      <span className="text-sm">📱</span>
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">
                Fitur Utama
              </h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "AI Career Finder",
                  "Smart CV Builder",
                  "Job Matching",
                  "Expert Mentoring",
                  "Interview Simulator",
                  "Skill Development",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-400">
                Perusahaan
              </h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Tentang Kami",
                  "Tim Kami",
                  "Karir",
                  "Blog & News",
                  "Press Kit",
                  "Partner",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-pink-400">
                Support
              </h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Pusat Bantuan",
                  "FAQ",
                  "Kontak Kami",
                  "Kebijakan Privasi",
                  "Syarat & Ketentuan",
                  "Panduan Pengguna",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2024 PathWise Indonesia. Semua hak dilindungi
                undang-undang.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Server Status: Online
                </span>
                <span>UPPER Team</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
