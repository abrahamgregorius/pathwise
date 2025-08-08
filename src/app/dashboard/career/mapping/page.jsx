"use client"
import { useState } from "react"
import Link from "next/link"

export default function CareerMappingPage() {
  const [hasStartedAnalysis, setHasStartedAnalysis] = useState(false)

  const features = [
    {
      icon: "🧠",
      title: "Analisis Kepribadian RIASEC",
      description: "Tes komprehensif berdasarkan teori Holland untuk mengidentifikasi tipe kepribadian karir Anda"
    },
    {
      icon: "🎯",
      title: "Rekomendasi Karir Personal",
      description: "Dapatkan saran karir yang disesuaikan dengan profil kepribadian dan minat Anda"
    },
    {
      icon: "📊",
      title: "Skor Detail & Insights",
      description: "Lihat breakdown lengkap skor RIASEC Anda dengan penjelasan mendalam"
    },
    {
      icon: "🗺️",
      title: "Roadmap Pembelajaran",
      description: "Panduan step-by-step untuk mencapai karir impian Anda"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Putri",
      role: "Fresh Graduate",
      text: "Analisis RIASEC membantu saya menemukan passion di bidang UX Design. Sekarang saya bekerja di startup unicorn!",
      score: "Artistic: 85%"
    },
    {
      name: "Ahmad Rizki",
      role: "Career Switcher",
      text: "Dari background akuntansi ke data science. PathWise memberikan roadmap yang jelas untuk transisi karir saya.",
      score: "Investigative: 92%"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Career Mapping AI 🗺️</h1>
        <p className="text-blue-100 text-lg">
          Temukan jalur karir yang tepat berdasarkan analisis kepribadian RIASEC dan AI mendalam
        </p>
      </div>

      {/* Main CTA Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Mulai Analisis Kepribadian Karir Anda
          </h2>
          <p className="text-gray-600 mb-8">
            Ikuti tes RIASEC yang telah terbukti secara ilmiah untuk mengidentifikasi tipe kepribadian karir Anda. 
            Tes ini akan memakan waktu sekitar 10-15 menit dan memberikan insight mendalam tentang karir yang cocok untuk Anda.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-blue-900 mb-3">Yang Akan Anda Dapatkan:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-blue-800">Skor RIASEC lengkap</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-blue-800">5+ rekomendasi karir</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-blue-800">Roadmap pembelajaran</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-blue-800">Analisis kepribadian</span>
              </div>
            </div>
          </div>

          <Link href="/dashboard/career/mapping/questionnaire">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105">
              🚀 Mulai Analisis Sekarang
            </button>
          </Link>
          
          <p className="text-sm text-gray-500 mt-4">
            ⏱️ Estimasi waktu: 10-15 menit • 📊 60 pertanyaan • 🎯 100% gratis
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* RIASEC Explanation */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Apa itu RIASEC?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-red-50 rounded-xl">
            <div className="text-2xl mb-2">🔧</div>
            <h3 className="font-semibold text-red-700 mb-2">Realistic</h3>
            <p className="text-sm text-red-600">Praktis, hands-on, suka bekerja dengan alat dan mesin</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <div className="text-2xl mb-2">🔬</div>
            <h3 className="font-semibold text-blue-700 mb-2">Investigative</h3>
            <p className="text-sm text-blue-600">Analitis, suka memecahkan masalah dan penelitian</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-2xl mb-2">🎨</div>
            <h3 className="font-semibold text-purple-700 mb-2">Artistic</h3>
            <p className="text-sm text-purple-600">Kreatif, ekspresif, suka seni dan inovasi</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <div className="text-2xl mb-2">🤝</div>
            <h3 className="font-semibold text-green-700 mb-2">Social</h3>
            <p className="text-sm text-green-600">Suka membantu, mengajar, dan berinteraksi dengan orang</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-xl">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold text-orange-700 mb-2">Enterprising</h3>
            <p className="text-sm text-orange-600">Suka memimpin, menjual, dan mengambil risiko</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-gray-700 mb-2">Conventional</h3>
            <p className="text-sm text-gray-600">Terorganisir, detail-oriented, suka struktur</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Testimoni Pengguna</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {testimonial.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
