"use client"
import { useState } from "react"

export default function SoftskillCoachPage() {
  const [selectedSkill, setSelectedSkill] = useState("communication")

  const skills = [
    {
      id: "communication",
      name: "Communication",
      icon: "💬",
      progress: 85,
      level: "Advanced",
      description: "Kemampuan berkomunikasi efektif dalam berbagai situasi",
    },
    {
      id: "leadership",
      name: "Leadership",
      icon: "👑",
      progress: 70,
      level: "Intermediate",
      description: "Kemampuan memimpin dan menginspirasi tim",
    },
    {
      id: "problem-solving",
      name: "Problem Solving",
      icon: "🧩",
      progress: 90,
      level: "Advanced",
      description: "Kemampuan menganalisis dan menyelesaikan masalah",
    },
    {
      id: "time-management",
      name: "Time Management",
      icon: "⏰",
      progress: 65,
      level: "Intermediate",
      description: "Kemampuan mengelola waktu dan prioritas",
    },
  ]

  const exercises = [
    {
      title: "Public Speaking Practice",
      description: "Latihan presentasi 5 menit dengan AI feedback",
      duration: "15 menit",
      difficulty: "Intermediate",
      completed: false,
    },
    {
      title: "Active Listening Exercise",
      description: "Simulasi percakapan dengan fokus mendengarkan",
      duration: "10 menit",
      difficulty: "Beginner",
      completed: true,
    },
    {
      title: "Conflict Resolution Scenario",
      description: "Role-play menyelesaikan konflik tim",
      duration: "20 menit",
      difficulty: "Advanced",
      completed: false,
    },
  ]

  const selectedSkillData = skills.find((skill) => skill.id === selectedSkill)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Softskill Coach 🧠</h1>
        <p className="text-purple-100 text-lg">
          Tingkatkan soft skills dengan coaching AI personal dan latihan interaktif
        </p>
      </div>

      {/* Skills Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            onClick={() => setSelectedSkill(skill.id)}
            className={`bg-white rounded-2xl p-6 shadow-sm border-2 cursor-pointer transition-all duration-200 ${
              selectedSkill === skill.id ? "border-purple-500 bg-purple-50" : "border-gray-100 hover:border-purple-300"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl mb-3">{skill.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{skill.progress}%</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    skill.level === "Advanced" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {skill.level}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Skill Detail */}
      {selectedSkillData && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-4xl">{selectedSkillData.icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{selectedSkillData.name}</h2>
              <p className="text-gray-600">{selectedSkillData.description}</p>
            </div>
          </div>

          {/* Progress Detail */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Progress Detail</h3>
              <span className="text-2xl font-bold text-purple-600">{selectedSkillData.progress}%</span>
            </div>
            <div className="w-full bg-white rounded-full h-4 mb-4">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-300"
                style={{ width: `${selectedSkillData.progress}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Exercises Completed</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">8.5</div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">24h</div>
                <div className="text-sm text-gray-600">Time Invested</div>
              </div>
            </div>
          </div>

          {/* Exercises */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Latihan Tersedia</h3>
            <div className="space-y-4">
              {exercises.map((exercise, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{exercise.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{exercise.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>⏱️ {exercise.duration}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            exercise.difficulty === "Advanced"
                              ? "bg-red-100 text-red-700"
                              : exercise.difficulty === "Intermediate"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                          }`}
                        >
                          {exercise.difficulty}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      {exercise.completed ? (
                        <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                          ✓ Selesai
                        </span>
                      ) : (
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                          Mulai Latihan
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* AI Coach Recommendations */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Rekomendasi AI Coach</h2>
        <div className="bg-blue-50 rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🤖</span>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Rekomendasi untuk Minggu Ini</h3>
              <p className="text-blue-800 mb-4">
                Berdasarkan analisis progress kamu, fokus pada latihan Public Speaking untuk meningkatkan Communication
                skills ke level Expert. Kamu sudah menunjukkan improvement yang bagus!
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full">Public Speaking</span>
                <span className="bg-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full">Presentation Skills</span>
                <span className="bg-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full">Confidence Building</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
