"use client"
import { useState } from "react"

export default function CareerMappingPage() {
  const [selectedPath, setSelectedPath] = useState("software-engineer")

  const careerPaths = [
    {
      id: "software-engineer",
      title: "Software Engineer",
      match: "95%",
      description: "Pengembangan aplikasi dan sistem software",
      skills: ["JavaScript", "React", "Node.js", "Python"],
      salary: "8-15 juta",
      growth: "Sangat Tinggi",
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      match: "88%",
      description: "Analisis data dan machine learning",
      skills: ["Python", "SQL", "Machine Learning", "Statistics"],
      salary: "10-18 juta",
      growth: "Tinggi",
    },
    {
      id: "product-manager",
      title: "Product Manager",
      match: "82%",
      description: "Mengelola pengembangan produk digital",
      skills: ["Product Strategy", "Analytics", "Leadership", "Communication"],
      salary: "12-20 juta",
      growth: "Tinggi",
    },
  ]

  const roadmapSteps = [
    {
      phase: "Foundation",
      duration: "1-2 bulan",
      tasks: ["Pelajari dasar programming", "Pahami konsep algoritma", "Buat project sederhana"],
      status: "completed",
    },
    {
      phase: "Intermediate",
      duration: "3-4 bulan",
      tasks: ["Kuasai framework modern", "Belajar database management", "Buat portfolio project"],
      status: "in-progress",
    },
    {
      phase: "Advanced",
      duration: "2-3 bulan",
      tasks: ["Pelajari system design", "Kontribusi open source", "Persiapan technical interview"],
      status: "upcoming",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Career Mapping AI 🗺️</h1>
        <p className="text-blue-100 text-lg">
          Temukan jalur karir yang tepat berdasarkan analisis AI mendalam tentang minat dan bakatmu
        </p>
      </div>

      {/* Career Recommendations */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Rekomendasi Jalur Karir</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerPaths.map((path) => (
            <div
              key={path.id}
              onClick={() => setSelectedPath(path.id)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                selectedPath === path.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">{path.title}</h3>
                <span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-1 rounded-full">
                  {path.match} match
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{path.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Gaji:</span>
                  <span className="font-medium">{path.salary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Pertumbuhan:</span>
                  <span className="font-medium">{path.growth}</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap gap-1">
                  {path.skills.slice(0, 2).map((skill) => (
                    <span key={skill} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                  {path.skills.length > 2 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      +{path.skills.length - 2} lainnya
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Roadmap */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Roadmap Pembelajaran</h2>
        <div className="space-y-6">
          {roadmapSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step.status === "completed"
                    ? "bg-green-500 text-white"
                    : step.status === "in-progress"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{step.phase}</h3>
                  <span className="text-sm text-gray-500">{step.duration}</span>
                </div>
                <ul className="space-y-1">
                  {step.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-gray-600 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all">
          Mulai Learning Path
        </button>
        <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-all">
          Konsultasi dengan Mentor
        </button>
      </div>
    </div>
  )
}
