"use client"
import { useState } from "react"

export default function CVPortfolioPage() {
  const [activeTab, setActiveTab] = useState("cv")
  const [uploadedFile, setUploadedFile] = useState(null)

  const cvVersions = [
    {
      id: 1,
      name: "CV_Sarah_Putri_v3.pdf",
      version: "v3.0",
      lastModified: "2024-01-15",
      size: "2.3 MB",
      downloads: 23,
      views: 156,
      isActive: true,
    },
    {
      id: 2,
      name: "CV_Sarah_Putri_v2.pdf",
      version: "v2.0",
      lastModified: "2024-01-08",
      size: "2.1 MB",
      downloads: 15,
      views: 89,
      isActive: false,
    },
  ]

  const portfolioProjects = [
    {
      id: 1,
      title: "E-commerce Website Redesign",
      description: "Complete UX/UI redesign for online fashion store",
      category: "UI/UX Design",
      thumbnail: "/placeholder.svg?height=200&width=300",
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      views: 234,
      likes: 45,
      isPublic: true,
    },
    {
      id: 2,
      title: "Mobile Banking App Concept",
      description: "Modern banking app with focus on user experience",
      category: "Mobile Design",
      thumbnail: "/placeholder.svg?height=200&width=300",
      technologies: ["Sketch", "Principle", "User Research"],
      views: 189,
      likes: 32,
      isPublic: true,
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for sales analytics",
      category: "Web Development",
      thumbnail: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "D3.js", "Chart.js"],
      views: 156,
      likes: 28,
      isPublic: false,
    },
  ]

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">CV & Portofolio 📄</h1>
        <p className="text-blue-100 text-lg">
          Kelola CV, portofolio, dan dokumen karir untuk membangun personal branding yang kuat
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("cv")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "cv"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              📄 CV Manager
            </button>
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "portfolio"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              💼 Portfolio Projects
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "cv" && (
            <div className="space-y-6">
              {/* Upload New CV */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload CV Baru</h3>
                <p className="text-gray-600 mb-4">Drag & drop file CV atau klik untuk browse</p>
                <p className="text-sm text-gray-500 mb-4">Mendukung format PDF, DOC, DOCX (Max 5MB)</p>
                <label className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
                  Pilih File
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>

              {/* CV Versions */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Versi CV</h3>
                <div className="space-y-4">
                  {cvVersions.map((cv) => (
                    <div key={cv.id} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{cv.name}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>📅 {cv.lastModified}</span>
                              <span>📦 {cv.size}</span>
                              <span>📥 {cv.downloads} downloads</span>
                              <span>👁️ {cv.views} views</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {cv.isActive && (
                            <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                              Active
                            </span>
                          )}
                          <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                            {cv.version}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                          Preview
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                          Download
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                          Share
                        </button>
                        {!cv.isActive && (
                          <button className="border border-green-300 text-green-700 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors">
                            Set as Active
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CV Analytics */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">CV Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">156</div>
                    <div className="text-sm text-gray-600">Total Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">23</div>
                    <div className="text-sm text-gray-600">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">85/100</div>
                    <div className="text-sm text-gray-600">CV Score</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "portfolio" && (
            <div className="space-y-6">
              {/* Add New Project */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Portfolio Projects</h3>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  + Tambah Project
                </button>
              </div>

              {/* Portfolio Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioProjects.map((project) => (
                  <div
                    key={project.id}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                        {project.isPublic ? (
                          <span className="text-green-600 text-sm">🌐 Public</span>
                        ) : (
                          <span className="text-gray-600 text-sm">🔒 Private</span>
                        )}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{project.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>👁️ {project.views} views</span>
                        <span>❤️ {project.likes} likes</span>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          View
                        </button>
                        <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
