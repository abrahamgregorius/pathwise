"use client"
import { useState } from "react"

export default function CertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "Semua", count: 12 },
    { id: "technical", name: "Technical", count: 6 },
    { id: "soft-skills", name: "Soft Skills", count: 3 },
    { id: "language", name: "Language", count: 2 },
    { id: "industry", name: "Industry", count: 1 },
  ]

  const certificates = [
    {
      id: 1,
      title: "Google Analytics Individual Qualification",
      issuer: "Google",
      issueDate: "2024-01-15",
      expiryDate: "2025-01-15",
      category: "technical",
      credentialId: "GA-IQ-2024-001",
      verificationUrl: "https://skillshop.exceedlms.com/student/path/2938",
      image: "https://glints.com/id/lowongan/wp-content/uploads/2019/12/logo_lockup_analytics_icon_vertical_black_2x.png",
      skills: ["Google Analytics", "Web Analytics", "Data Analysis"],
      isVerified: true,
      isPublic: true,
    },
    {
      id: 2,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      issueDate: "2024-01-10",
      expiryDate: "2027-01-10",
      category: "technical",
      credentialId: "AWS-CP-2024-002",
      verificationUrl: "https://aws.amazon.com/verification",
      image: "https://miro.medium.com/1*pibyH4tbhIMZbKkL7z-swA.png",
      skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"],
      isVerified: true,
      isPublic: true,
    },
    {
      id: 3,
      title: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      issueDate: "2024-01-05",
      expiryDate: "2026-01-05",
      category: "soft-skills",
      credentialId: "CSM-2024-003",
      verificationUrl: "https://scrumalliance.org/community/profile",
      image: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/11/11124758/scrum-cover-810x456.webp",
      skills: ["Scrum", "Agile Methodology", "Team Leadership"],
      isVerified: true,
      isPublic: true,
    },
    {
      id: 4,
      title: "TOEFL iBT",
      issuer: "ETS",
      issueDate: "2023-12-20",
      expiryDate: "2025-12-20",
      category: "language",
      credentialId: "TOEFL-2023-004",
      verificationUrl: "https://toeflgoanywhere.ets.org",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85AoZs9UWP2fLW0QjTADx1-Wv8nhDdwBjeQ&s",
      skills: ["English Proficiency", "Academic English", "Business English"],
      score: "105/120",
      isVerified: true,
      isPublic: false,
    },
    {
      id: 5,
      title: "Digital Marketing Fundamentals",
      issuer: "Google Digital Garage",
      issueDate: "2023-12-15",
      expiryDate: null,
      category: "technical",
      credentialId: "GDG-2023-005",
      verificationUrl: "https://learndigital.withgoogle.com/digitalgarage",
      image: "https://indi.tech/wp-content/uploads/2022/03/internet-digital-marketing.jpg",
      skills: ["Digital Marketing", "SEO", "Social Media Marketing"],
      isVerified: true,
      isPublic: true,
    },
    {
      id: 6,
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute",
      issueDate: "2023-11-30",
      expiryDate: "2026-11-30",
      category: "soft-skills",
      credentialId: "PMP-2023-006",
      verificationUrl: "https://ccrs.pmi.org",
      image: "https://www.dcolearning.com/wp-content/uploads/2020/08/pmi_logo.png",
      skills: ["Project Management", "Risk Management", "Stakeholder Management"],
      isVerified: true,
      isPublic: true,
    },
  ]

  const filteredCertificates =
    selectedCategory === "all" ? certificates : certificates.filter((cert) => cert.category === selectedCategory)

  const getCategoryColor = (category) => {
    const colors = {
      technical: "bg-blue-100 text-blue-700",
      "soft-skills": "bg-green-100 text-green-700",
      language: "bg-purple-100 text-purple-700",
      industry: "bg-orange-100 text-orange-700",
    }
    return colors[category] || "bg-gray-100 text-gray-700"
  }

  const isExpiringSoon = (expiryDate) => {
    if (!expiryDate) return false
    const expiry = new Date(expiryDate)
    const now = new Date()
    const diffTime = expiry - now
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 90 && diffDays > 0
  }

  const isExpired = (expiryDate) => {
    if (!expiryDate) return false
    const expiry = new Date(expiryDate)
    const now = new Date()
    return expiry < now
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Sertifikat 🏆</h1>
        <p className="text-green-100 text-lg">
          Kumpulkan dan showcase sertifikat & achievement untuk memperkuat kredibilitas profesional
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Sertifikat</p>
              <p className="text-2xl font-bold text-gray-900">{certificates.length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">🏆</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Verified</p>
              <p className="text-2xl font-bold text-gray-900">
                {certificates.filter((cert) => cert.isVerified).length}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">✅</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Expiring Soon</p>
              <p className="text-2xl font-bold text-gray-900">
                {certificates.filter((cert) => isExpiringSoon(cert.expiryDate)).length}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">⚠️</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Public</p>
              <p className="text-2xl font-bold text-gray-900">{certificates.filter((cert) => cert.isPublic).length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">🌐</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6">
            {/* Add Certificate Button */}
            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all mb-6">
              + Tambah Sertifikat
            </button>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Kategori</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? "bg-green-100 text-green-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-900">
                {selectedCategory === "all"
                  ? "Semua Sertifikat"
                  : categories.find((c) => c.id === selectedCategory)?.name}
              </h3>
              <p className="text-gray-600 text-sm">{filteredCertificates.length} sertifikat ditemukan</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCertificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <img
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(certificate.category)}`}>
                        {categories.find((c) => c.id === certificate.category)?.name}
                      </span>
                      <div className="flex items-center space-x-1">
                        {certificate.isVerified && (
                          <span className="text-green-600" title="Verified">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                        {certificate.isPublic ? (
                          <span className="text-blue-600" title="Public">
                            🌐
                          </span>
                        ) : (
                          <span className="text-gray-600" title="Private">
                            🔒
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="font-bold text-gray-900 mb-2">{certificate.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{certificate.issuer}</p>

                    {certificate.score && (
                      <div className="mb-3">
                        <span className="bg-yellow-100 text-yellow-700 text-sm px-2 py-1 rounded-full">
                          Score: {certificate.score}
                        </span>
                      </div>
                    )}

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Issued:</span>
                        <span>{certificate.issueDate}</span>
                      </div>
                      {certificate.expiryDate && (
                        <div className="flex justify-between">
                          <span>Expires:</span>
                          <span
                            className={
                              isExpired(certificate.expiryDate)
                                ? "text-red-600"
                                : isExpiringSoon(certificate.expiryDate)
                                  ? "text-yellow-600"
                                  : ""
                            }
                          >
                            {certificate.expiryDate}
                            {isExpired(certificate.expiryDate) && " (Expired)"}
                            {isExpiringSoon(certificate.expiryDate) && " (Soon)"}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>ID:</span>
                        <span className="font-mono text-xs">{certificate.credentialId}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {certificate.skills.map((skill, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                        View
                      </button>
                      <button className="border border-gray-300 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        Share
                      </button>
                      <button className="border border-gray-300 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
