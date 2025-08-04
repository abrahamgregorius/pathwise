"use client"
import { useState } from "react"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const helpCategories = [
    { id: "all", name: "Semua", icon: "📚", count: 24 },
    { id: "getting-started", name: "Getting Started", icon: "🚀", count: 6 },
    { id: "career-tools", name: "Career Tools", icon: "🛠️", count: 8 },
    { id: "account", name: "Account & Billing", icon: "👤", count: 4 },
    { id: "technical", name: "Technical Issues", icon: "⚙️", count: 6 },
  ]

  const faqItems = [
    {
      id: 1,
      category: "getting-started",
      question: "Bagaimana cara memulai menggunakan PathWise?",
      answer:
        "Setelah mendaftar, lengkapi profil Anda terlebih dahulu. Kemudian gunakan Career Mapping AI untuk mendapatkan rekomendasi jalur karir yang sesuai dengan minat dan bakat Anda.",
      helpful: 45,
      notHelpful: 3,
    },
    {
      id: 2,
      category: "career-tools",
      question: "Bagaimana cara menggunakan CV Analyzer?",
      answer:
        "Upload file CV Anda dalam format PDF, DOC, atau DOCX. AI akan menganalisis dan memberikan score serta saran perbaikan untuk meningkatkan kualitas CV Anda.",
      helpful: 38,
      notHelpful: 2,
    },
    {
      id: 3,
      category: "career-tools",
      question: "Apakah Interview Simulation gratis?",
      answer:
        "Ya, fitur Interview Simulation tersedia gratis untuk semua pengguna PathWise. Anda bisa berlatih interview untuk berbagai posisi dengan feedback AI.",
      helpful: 52,
      notHelpful: 1,
    },
    {
      id: 4,
      category: "account",
      question: "Bagaimana cara mengubah informasi profil?",
      answer:
        "Masuk ke menu 'Akun Saya' di sidebar, kemudian klik 'Edit Profil'. Anda bisa mengubah informasi personal, pendidikan, dan preferensi karir.",
      helpful: 29,
      notHelpful: 4,
    },
    {
      id: 5,
      category: "technical",
      question: "File CV tidak bisa diupload, kenapa?",
      answer:
        "Pastikan file CV Anda berformat PDF, DOC, atau DOCX dengan ukuran maksimal 5MB. Jika masih bermasalah, coba refresh halaman atau gunakan browser lain.",
      helpful: 33,
      notHelpful: 7,
    },
    {
      id: 6,
      category: "career-tools",
      question: "Bagaimana cara booking mentoring session?",
      answer:
        "Buka menu 'Pengembangan Diri' > 'Live Mentoring', pilih mentor yang sesuai, lalu klik 'Book Session'. Pilih tanggal dan waktu yang tersedia.",
      helpful: 41,
      notHelpful: 2,
    },
  ]

  const quickActions = [
    {
      title: "Hubungi Support",
      description: "Chat langsung dengan tim support kami",
      icon: "💬",
      action: "chat",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Video Tutorial",
      description: "Tonton panduan lengkap menggunakan PathWise",
      icon: "🎥",
      action: "video",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Community Forum",
      description: "Bertanya ke komunitas PathWise",
      icon: "👥",
      action: "forum",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Report Bug",
      description: "Laporkan masalah teknis yang Anda alami",
      icon: "🐛",
      action: "bug",
      color: "from-orange-500 to-red-500",
    },
  ]

  const filteredFAQ = faqItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Bantuan ❓</h1>
        <p className="text-blue-100 text-lg">Temukan jawaban untuk pertanyaan Anda atau hubungi tim support kami</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Cari bantuan, FAQ, atau panduan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action, index) => (
          <button
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-left"
          >
            <div
              className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              {action.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{action.title}</h3>
            <p className="text-gray-600 text-sm">{action.description}</p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6">
            <h3 className="font-semibold text-gray-900 mb-4">Kategori</h3>
            <div className="space-y-2">
              {helpCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-3 py-3 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{category.icon}</span>
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{category.count}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h3>
              <p className="text-gray-600 text-sm">{filteredFAQ.length} pertanyaan ditemukan</p>
            </div>

            <div className="space-y-6">
              {filteredFAQ.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 text-lg mb-3">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">Apakah ini membantu?</span>
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center space-x-1 text-green-600 hover:text-green-700 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                          <span>Ya ({faq.helpful})</span>
                        </button>
                        <button className="flex items-center space-x-1 text-red-600 hover:text-red-700 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                            />
                          </svg>
                          <span>Tidak ({faq.notHelpful})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFAQ.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada hasil ditemukan</h3>
                <p className="text-gray-600 mb-4">Coba ubah kata kunci pencarian atau kategori</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Hubungi Support
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Masih butuh bantuan?</h3>
          <p className="text-gray-600 mb-6">Tim support kami siap membantu Anda 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              💬 Live Chat
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              📧 Email Support
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              📞 Call Center
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
