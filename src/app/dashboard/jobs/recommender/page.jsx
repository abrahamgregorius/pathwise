"use client"
import { useState } from "react"

export default function JobRecommenderPage() {
  const [filters, setFilters] = useState({
    location: "",
    salary: "",
    type: "",
    experience: "",
    industry: "",
  })

  const [sortBy, setSortBy] = useState("match")

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tokopedia",
      location: "Jakarta",
      salary: "8-12 juta",
      type: "Full-time",
      experience: "1-2 tahun",
      match: 95,
      posted: "2 hari lalu",
      logo: "/placeholder.svg?height=50&width=50",
      description: "Mengembangkan user interface yang responsive dan user-friendly menggunakan React.js",
      requirements: ["React.js", "JavaScript", "HTML/CSS", "Git"],
      benefits: ["Asuransi kesehatan", "Flexible working", "Learning budget"],
      isNew: true,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Gojek",
      location: "Jakarta",
      salary: "9-15 juta",
      type: "Full-time",
      experience: "2-3 tahun",
      match: 88,
      posted: "3 hari lalu",
      logo: "/placeholder.svg?height=50&width=50",
      description: "Merancang pengalaman pengguna yang intuitif untuk aplikasi mobile dan web",
      requirements: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      benefits: ["Stock options", "Health insurance", "Gym membership"],
      isNew: false,
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Shopee",
      location: "Jakarta",
      salary: "7-11 juta",
      type: "Full-time",
      experience: "1-2 tahun",
      match: 82,
      posted: "5 hari lalu",
      logo: "/placeholder.svg?height=50&width=50",
      description: "Menganalisis data bisnis untuk memberikan insights dan rekomendasi strategis",
      requirements: ["SQL", "Python", "Excel", "Tableau"],
      benefits: ["Performance bonus", "Training budget", "Work from home"],
      isNew: false,
    },
    {
      id: 4,
      title: "Product Manager",
      company: "Bukalapak",
      location: "Jakarta",
      salary: "15-25 juta",
      type: "Full-time",
      experience: "3-5 tahun",
      match: 78,
      posted: "1 minggu lalu",
      logo: "/placeholder.svg?height=50&width=50",
      description: "Mengelola roadmap produk dan berkolaborasi dengan tim engineering dan design",
      requirements: ["Product Strategy", "Analytics", "Leadership", "Agile"],
      benefits: ["Equity", "Health insurance", "Unlimited PTO"],
      isNew: false,
    },
  ]

  const locations = ["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Bali"]
  const salaryRanges = ["< 5 juta", "5-10 juta", "10-15 juta", "15-20 juta", "> 20 juta"]
  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"]
  const experienceLevels = ["Fresh Graduate", "1-2 tahun", "2-3 tahun", "3-5 tahun", "> 5 tahun"]

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      location: "",
      salary: "",
      type: "",
      experience: "",
      industry: "",
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Job Recommender 🎯</h1>
        <p className="text-blue-100 text-lg">Temukan pekerjaan yang sesuai dengan profil dan preferensi karirmu</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Filter</h2>
              <button onClick={clearFilters} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Clear All
              </button>
            </div>

            <div className="space-y-6">
              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi</label>
                <select
                  value={filters.location}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Semua Lokasi</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Salary Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gaji</label>
                <select
                  value={filters.salary}
                  onChange={(e) => handleFilterChange("salary", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Semua Range</option>
                  {salaryRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Job Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipe Pekerjaan</label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Semua Tipe</option>
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pengalaman</label>
                <select
                  value={filters.experience}
                  onChange={(e) => handleFilterChange("experience", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Semua Level</option>
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="lg:col-span-3">
          {/* Sort and Results Count */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Menampilkan {jobs.length} pekerjaan</h3>
                <p className="text-gray-600 text-sm">Berdasarkan profil dan preferensi kamu</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Urutkan:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="match">Match Tertinggi</option>
                  <option value="date">Terbaru</option>
                  <option value="salary">Gaji Tertinggi</option>
                </select>
              </div>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <img src={job.logo || "/placeholder.svg"} alt={job.company} className="w-14 h-14 rounded-xl" />
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-bold text-gray-900 text-xl">{job.title}</h3>
                        {job.isNew && (
                          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 font-medium">{job.company}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                            />
                          </svg>
                          {job.salary}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                            />
                          </svg>
                          {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full">
                        {job.match}% match
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">{job.posted}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                {/* Requirements */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, index) => (
                      <span key={index} className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    Lamar Sekarang
                  </button>
                  <button className="border border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                    Simpan
                  </button>
                  <button className="border border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="bg-gray-100 text-gray-700 py-3 px-8 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
