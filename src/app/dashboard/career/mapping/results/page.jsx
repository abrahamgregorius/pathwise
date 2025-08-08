"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ResultsPage() {
  const [scores, setScores] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get results from localStorage (in real app, fetch from backend)
    const results = localStorage.getItem('riasecResults')
    if (results) {
      setScores(JSON.parse(results))
    }
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat hasil analisis...</p>
        </div>
      </div>
    )
  }

  if (!scores) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">Hasil tidak ditemukan. Silakan lakukan tes terlebih dahulu.</p>
        <Link href="/dashboard/career/mapping/questionnaire">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Mulai Tes
          </button>
        </Link>
      </div>
    )
  }

  // Get top 3 scores
  const sortedScores = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)

  const riasecInfo = {
    R: { name: "Realistic", color: "red", icon: "🔧", description: "Praktis, hands-on, suka bekerja dengan alat dan mesin" },
    I: { name: "Investigative", color: "blue", icon: "🔬", description: "Analitis, suka memecahkan masalah dan penelitian" },
    A: { name: "Artistic", color: "purple", icon: "🎨", description: "Kreatif, ekspresif, suka seni dan inovasi" },
    S: { name: "Social", color: "green", icon: "🤝", description: "Suka membantu, mengajar, dan berinteraksi dengan orang" },
    E: { name: "Enterprising", color: "orange", icon: "📈", description: "Suka memimpin, menjual, dan mengambil risiko" },
    C: { name: "Conventional", color: "gray", icon: "📋", description: "Terorganisir, detail-oriented, suka struktur" }
  }

  // Career recommendations based on top scores
  const getCareerRecommendations = (topType) => {
    const careers = {
      R: [
        { title: "Software Engineer", match: "95%", salary: "8-15 juta", growth: "Sangat Tinggi", description: "Mengembangkan aplikasi dan sistem software" },
        { title: "Mechanical Engineer", match: "92%", salary: "7-12 juta", growth: "Tinggi", description: "Merancang dan mengembangkan mesin dan sistem mekanik" },
        { title: "Network Administrator", match: "88%", salary: "6-10 juta", growth: "Tinggi", description: "Mengelola infrastruktur jaringan komputer" },
        { title: "Quality Assurance", match: "85%", salary: "5-9 juta", growth: "Tinggi", description: "Memastikan kualitas produk dan sistem" },
        { title: "DevOps Engineer", match: "90%", salary: "10-18 juta", growth: "Sangat Tinggi", description: "Mengelola deployment dan infrastruktur aplikasi" }
      ],
      I: [
        { title: "Data Scientist", match: "96%", salary: "10-18 juta", growth: "Sangat Tinggi", description: "Menganalisis data untuk menghasilkan insights bisnis" },
        { title: "Research Analyst", match: "93%", salary: "7-12 juta", growth: "Tinggi", description: "Melakukan penelitian dan analisis mendalam" },
        { title: "Business Analyst", match: "90%", salary: "8-14 juta", growth: "Tinggi", description: "Menganalisis proses bisnis dan memberikan rekomendasi" },
        { title: "Cybersecurity Specialist", match: "88%", salary: "9-16 juta", growth: "Sangat Tinggi", description: "Melindungi sistem dari ancaman keamanan" },
        { title: "Machine Learning Engineer", match: "94%", salary: "12-20 juta", growth: "Sangat Tinggi", description: "Mengembangkan model AI dan machine learning" }
      ],
      A: [
        { title: "UI/UX Designer", match: "94%", salary: "7-13 juta", growth: "Sangat Tinggi", description: "Merancang antarmuka dan pengalaman pengguna" },
        { title: "Graphic Designer", match: "91%", salary: "5-10 juta", growth: "Sedang", description: "Membuat desain visual untuk berbagai media" },
        { title: "Content Creator", match: "89%", salary: "4-12 juta", growth: "Tinggi", description: "Membuat konten kreatif untuk digital marketing" },
        { title: "Product Designer", match: "92%", salary: "8-15 juta", growth: "Tinggi", description: "Merancang produk digital dari konsep hingga implementasi" },
        { title: "Creative Director", match: "87%", salary: "12-25 juta", growth: "Tinggi", description: "Memimpin tim kreatif dan strategi brand" }
      ],
      S: [
        { title: "HR Specialist", match: "93%", salary: "6-12 juta", growth: "Tinggi", description: "Mengelola sumber daya manusia dan pengembangan karyawan" },
        { title: "Customer Success Manager", match: "90%", salary: "8-15 juta", growth: "Tinggi", description: "Memastikan kepuasan dan kesuksesan pelanggan" },
        { title: "Training & Development", match: "88%", salary: "7-13 juta", growth: "Tinggi", description: "Mengembangkan program pelatihan dan pengembangan" },
        { title: "Community Manager", match: "85%", salary: "5-10 juta", growth: "Sedang", description: "Mengelola komunitas online dan engagement" },
        { title: "Consultant", match: "91%", salary: "10-20 juta", growth: "Tinggi", description: "Memberikan konsultasi dan solusi bisnis" }
      ],
      E: [
        { title: "Product Manager", match: "95%", salary: "12-20 juta", growth: "Sangat Tinggi", description: "Mengelola pengembangan dan strategi produk" },
        { title: "Business Development", match: "92%", salary: "8-16 juta", growth: "Tinggi", description: "Mengembangkan peluang bisnis dan kemitraan" },
        { title: "Sales Manager", match: "89%", salary: "7-15 juta", growth: "Tinggi", description: "Memimpin tim penjualan dan mencapai target" },
        { title: "Marketing Manager", match: "87%", salary: "8-14 juta", growth: "Tinggi", description: "Mengembangkan strategi pemasaran dan brand" },
        { title: "Startup Founder", match: "94%", salary: "Varies", growth: "Sangat Tinggi", description: "Membangun dan mengembangkan bisnis sendiri" }
      ],
      C: [
        { title: "Financial Analyst", match: "93%", salary: "7-13 juta", growth: "Tinggi", description: "Menganalisis data keuangan dan investasi" },
        { title: "Operations Manager", match: "90%", salary: "9-16 juta", growth: "Tinggi", description: "Mengelola operasional dan efisiensi bisnis" },
        { title: "Project Manager", match: "88%", salary: "8-15 juta", growth: "Tinggi", description: "Mengelola proyek dari perencanaan hingga eksekusi" },
        { title: "Database Administrator", match: "85%", salary: "7-12 juta", growth: "Sedang", description: "Mengelola dan memelihara sistem database" },
        { title: "Compliance Officer", match: "87%", salary: "8-14 juta", growth: "Tinggi", description: "Memastikan kepatuhan terhadap regulasi dan standar" }
      ]
    }
    return careers[topType] || []
  }

  const topType = sortedScores[0][0]
  const careerRecommendations = getCareerRecommendations(topType)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h1 className="text-3xl font-bold mb-2">🎉 Hasil Analisis RIASEC Anda</h1>
        <p className="text-blue-100 text-lg">
          Berikut adalah profil kepribadian karir Anda berdasarkan tes yang telah dilakukan
        </p>
      </div>

      {/* RIASEC Scores */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Skor RIASEC Anda</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(scores).map(([type, score]) => {
            const info = riasecInfo[type]
            const isTop3 = sortedScores.some(([t]) => t === type)
            return (
              <div key={type} className={`p-6 rounded-xl border-2 ${
                isTop3 ? `border-${info.color}-300 bg-${info.color}-50` : 'border-gray-200'
              }`}>
                <div className="text-center">
                  <div className="text-3xl mb-2">{info.icon}</div>
                  <h3 className={`font-bold mb-2 ${isTop3 ? `text-${info.color}-700` : 'text-gray-700'}`}>
                    {info.name}
                  </h3>
                  <div className={`text-3xl font-bold mb-2 ${isTop3 ? `text-${info.color}-600` : 'text-gray-600'}`}>
                    {score}%
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className={`h-2 rounded-full ${isTop3 ? `bg-${info.color}-500` : 'bg-gray-400'}`}
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Top 3 Personality Types */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Tipe Kepribadian Dominan Anda</h2>
        <div className="space-y-4">
          {sortedScores.map(([type, score], index) => {
            const info = riasecInfo[type]
            return (
              <div key={type} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl">{info.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">{info.name}</h3>
                    <span className="font-bold text-blue-600">{score}%</span>
                  </div>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
                <div className="text-2xl font-bold text-gray-400">#{index + 1}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Career Recommendations */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Rekomendasi Karir untuk Anda</h2>
        <p className="text-gray-600 mb-6">
          Berdasarkan tipe kepribadian dominan Anda ({riasecInfo[topType].name}), berikut adalah karir yang sangat cocok:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerRecommendations.slice(0, 4).map((career, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900">{career.title}</h3>
                <span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-1 rounded-full">
                  {career.match}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{career.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Gaji:</span>
                  <span className="font-medium">{career.salary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Pertumbuhan:</span>
                  <span className="font-medium">{career.growth}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/dashboard/career/mapping/questionnaire">
          <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-all">
            🔄 Ulangi Tes
          </button>
        </Link>
        <Link href="/dashboard/development">
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all">
            📚 Mulai Learning Path
          </button>
        </Link>
        <Link href="/dashboard/development/mentoring">
          <button className="w-full border-2 border-purple-600 text-purple-600 py-3 px-6 rounded-xl font-semibold hover:bg-purple-50 transition-all">
            👨‍🏫 Konsultasi Mentor
          </button>
        </Link>
      </div>

      {/* Download Results */}
      <div className="bg-blue-50 rounded-2xl p-6 text-center">
        <h3 className="font-bold text-blue-900 mb-2">Simpan Hasil Anda</h3>
        <p className="text-blue-700 mb-4">
          Download laporan lengkap hasil analisis RIASEC Anda dalam format PDF
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all">
          📄 Download Laporan PDF
        </button>
      </div>
    </div>
  )
}
