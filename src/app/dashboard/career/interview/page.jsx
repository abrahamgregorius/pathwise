"use client"
import { useState } from "react"

export default function InterviewSimulationPage() {
  const [selectedRole, setSelectedRole] = useState("")
  const [isSimulating, setIsSimulating] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [simulationStarted, setSimulationStarted] = useState(false)

  const jobRoles = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UI/UX Designer",
    "Marketing Specialist",
    "Business Analyst",
  ]

  const questions = [
    "Ceritakan tentang diri Anda dan mengapa Anda tertarik dengan posisi ini?",
    "Apa kekuatan dan kelemahan terbesar Anda?",
    "Bagaimana Anda menangani tekanan dan deadline yang ketat?",
    "Ceritakan pengalaman ketika Anda harus bekerja dalam tim?",
    "Mengapa Anda ingin bekerja di perusahaan ini?",
  ]

  const previousResults = [
    {
      role: "Software Engineer",
      score: 85,
      date: "2024-01-15",
      feedback: "Jawaban teknis sangat baik, perlu improve soft skills",
    },
    {
      role: "Data Scientist",
      score: 78,
      date: "2024-01-10",
      feedback: "Penjelasan konsep data science clear, confidence perlu ditingkatkan",
    },
    {
      role: "Product Manager",
      score: 82,
      date: "2024-01-05",
      feedback: "Strategic thinking bagus, perlu lebih detail dalam execution plan",
    },
  ]

  const startSimulation = () => {
    if (!selectedRole) return
    setSimulationStarted(true)
    setIsSimulating(true)
    setCurrentQuestion(0)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // End simulation
      setIsSimulating(false)
      setSimulationStarted(false)
      // Show results (you can add results state here)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Interview Simulation 🎤</h1>
        <p className="text-purple-100 text-lg">
          Latihan wawancara dengan AI untuk meningkatkan confidence dan performance interview kamu
        </p>
      </div>

      {!simulationStarted ? (
        <>
          {/* Setup Simulation */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Mulai Simulasi Interview</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Pilih Posisi yang Ingin Dilatih</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {jobRoles.map((role) => (
                    <button
                      key={role}
                      onClick={() => setSelectedRole(role)}
                      className={`p-4 text-gray-500 text-left border-2 rounded-xl transition-all ${
                        selectedRole === role
                          ? "border-purple-500 bg-purple-50 text-purple-700"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <div className="font-medium">{role}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Yang Akan Kamu Dapatkan:</h3>
                <ul className="space-y-1 text-blue-800 text-sm">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>5 pertanyaan interview umum dan
                    spesifik role
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Analisis jawaban dengan AI feedback
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Score dan rekomendasi improvement
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Recording untuk review mandiri
                  </li>
                </ul>
              </div>

              <button
                onClick={startSimulation}
                disabled={!selectedRole}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {selectedRole ? `Mulai Simulasi - ${selectedRole}` : "Pilih Posisi Terlebih Dahulu"}
              </button>
            </div>
          </div>

          {/* Previous Results */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Riwayat Simulasi</h2>
            <div className="space-y-4">
              {previousResults.map((result, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{result.role}</h3>
                      <p className="text-gray-600 text-sm">{result.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{result.score}</div>
                      <div className="text-sm text-gray-500">Score</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">{result.feedback}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">Lihat Detail →</button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Simulation Interface */
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Interview Simulation - {selectedRole}</h2>
              <div className="text-sm text-gray-600">
                Pertanyaan {currentQuestion + 1} dari {questions.length}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl text-white">🤖</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Interviewer</h3>
            <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg text-gray-800">{questions[currentQuestion]}</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-red-100 rounded-xl p-4 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-red-700">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Recording...</span>
              </div>
              <p className="text-red-600 text-sm mt-1">Jawab pertanyaan dengan suara yang jelas</p>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors">
                Stop Recording
              </button>
              <button
                onClick={nextQuestion}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                {currentQuestion < questions.length - 1 ? "Pertanyaan Selanjutnya" : "Selesai"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tips Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Tips Interview Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Persiapan Sebelum Interview</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Riset perusahaan dan posisi yang dilamar
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Siapkan contoh konkret dari pengalaman
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Latihan menjawab pertanyaan umum
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Saat Interview</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Maintain eye contact dan body language positif
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Gunakan metode STAR untuk menjawab
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                Siapkan pertanyaan untuk interviewer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
