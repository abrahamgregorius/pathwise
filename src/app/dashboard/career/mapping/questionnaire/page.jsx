"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function QuestionnairePage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const questions = [
    // Realistic Questions (R)
    { id: 1, text: "Saya suka bekerja dengan tangan dan menggunakan alat-alat", type: "R" },
    { id: 2, text: "Saya lebih suka pekerjaan yang melibatkan aktivitas fisik", type: "R" },
    { id: 3, text: "Saya tertarik untuk memperbaiki mesin atau peralatan elektronik", type: "R" },
    { id: 4, text: "Saya suka bekerja di luar ruangan", type: "R" },
    { id: 5, text: "Saya lebih suka hasil kerja yang bisa dilihat secara konkret", type: "R" },
    { id: 6, text: "Saya tertarik dengan pekerjaan teknis dan engineering", type: "R" },
    { id: 7, text: "Saya suka membangun atau merakit sesuatu", type: "R" },
    { id: 8, text: "Saya lebih suka bekerja dengan objek daripada dengan orang", type: "R" },
    { id: 9, text: "Saya tertarik dengan pekerjaan yang membutuhkan keterampilan manual", type: "R" },
    { id: 10, text: "Saya suka pekerjaan yang praktis dan aplikatif", type: "R" },

    // Investigative Questions (I)
    { id: 11, text: "Saya suka memecahkan masalah yang kompleks", type: "I" },
    { id: 12, text: "Saya tertarik untuk melakukan penelitian dan eksperimen", type: "I" },
    { id: 13, text: "Saya suka menganalisis data dan informasi", type: "I" },
    { id: 14, text: "Saya tertarik dengan sains dan teknologi", type: "I" },
    { id: 15, text: "Saya suka berpikir secara logis dan sistematis", type: "I" },
    { id: 16, text: "Saya tertarik untuk memahami bagaimana sesuatu bekerja", type: "I" },
    { id: 17, text: "Saya suka membaca jurnal ilmiah atau artikel penelitian", type: "I" },
    { id: 18, text: "Saya tertarik dengan matematika dan statistik", type: "I" },
    { id: 19, text: "Saya suka bekerja secara independen dalam proyek penelitian", type: "I" },
    { id: 20, text: "Saya tertarik untuk menemukan solusi inovatif", type: "I" },

    // Artistic Questions (A)
    { id: 21, text: "Saya suka mengekspresikan kreativitas dalam pekerjaan", type: "A" },
    { id: 22, text: "Saya tertarik dengan seni, musik, atau desain", type: "A" },
    { id: 23, text: "Saya suka menciptakan sesuatu yang baru dan original", type: "A" },
    { id: 24, text: "Saya lebih suka pekerjaan yang fleksibel dan tidak terlalu terstruktur", type: "A" },
    { id: 25, text: "Saya tertarik untuk menulis atau bercerita", type: "A" },
    { id: 26, text: "Saya suka bekerja dalam lingkungan yang inspiratif", type: "A" },
    { id: 27, text: "Saya tertarik dengan fotografi atau videografi", type: "A" },
    { id: 28, text: "Saya suka menggunakan imajinasi dalam pekerjaan", type: "A" },
    { id: 29, text: "Saya tertarik dengan fashion atau interior design", type: "A" },
    { id: 30, text: "Saya suka pekerjaan yang memungkinkan ekspresi diri", type: "A" },

    // Social Questions (S)
    { id: 31, text: "Saya suka membantu orang lain menyelesaikan masalah", type: "S" },
    { id: 32, text: "Saya tertarik untuk mengajar atau melatih orang lain", type: "S" },
    { id: 33, text: "Saya suka bekerja dalam tim dan berkolaborasi", type: "S" },
    { id: 34, text: "Saya tertarik dengan pekerjaan di bidang kesehatan atau sosial", type: "S" },
    { id: 35, text: "Saya suka mendengarkan dan memberikan saran kepada orang lain", type: "S" },
    { id: 36, text: "Saya tertarik untuk membuat perbedaan positif di masyarakat", type: "S" },
    { id: 37, text: "Saya suka pekerjaan yang melibatkan interaksi dengan banyak orang", type: "S" },
    { id: 38, text: "Saya tertarik dengan psikologi atau konseling", type: "S" },
    { id: 39, text: "Saya suka mengorganisir kegiatan sosial atau komunitas", type: "S" },
    { id: 40, text: "Saya tertarik untuk bekerja dengan anak-anak atau remaja", type: "S" },

    // Enterprising Questions (E)
    { id: 41, text: "Saya suka memimpin tim atau proyek", type: "E" },
    { id: 42, text: "Saya tertarik untuk memulai bisnis sendiri", type: "E" },
    { id: 43, text: "Saya suka meyakinkan orang lain tentang ide saya", type: "E" },
    { id: 44, text: "Saya tertarik dengan penjualan dan marketing", type: "E" },
    { id: 45, text: "Saya suka mengambil risiko dalam pekerjaan", type: "E" },
    { id: 46, text: "Saya tertarik dengan dunia bisnis dan keuangan", type: "E" },
    { id: 47, text: "Saya suka bernegosiasi dan membuat kesepakatan", type: "E" },
    { id: 48, text: "Saya tertarik untuk mengelola orang dan sumber daya", type: "E" },
    { id: 49, text: "Saya suka pekerjaan yang kompetitif", type: "E" },
    { id: 50, text: "Saya tertarik dengan politik atau kebijakan publik", type: "E" },

    // Conventional Questions (C)
    { id: 51, text: "Saya suka pekerjaan yang terorganisir dan terstruktur", type: "C" },
    { id: 52, text: "Saya tertarik dengan akuntansi atau administrasi", type: "C" },
    { id: 53, text: "Saya suka bekerja dengan data dan angka", type: "C" },
    { id: 54, text: "Saya tertarik untuk mengikuti prosedur dan aturan yang jelas", type: "C" },
    { id: 55, text: "Saya suka pekerjaan yang detail dan teliti", type: "C" },
    { id: 56, text: "Saya tertarik dengan sistem informasi atau database", type: "C" },
    { id: 57, text: "Saya suka pekerjaan yang memiliki rutinitas yang jelas", type: "C" },
    { id: 58, text: "Saya tertarik dengan analisis keuangan atau audit", type: "C" },
    { id: 59, text: "Saya suka mengorganisir dokumen dan informasi", type: "C" },
    { id: 60, text: "Saya tertarik dengan pekerjaan yang membutuhkan keakuratan tinggi", type: "C" }
  ]

  const handleAnswer = (value) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: {
        value: value,
        type: questions[currentQuestion].type
      }
    })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const submitAnswers = async () => {
    setIsSubmitting(true)
    
    // Calculate RIASEC scores
    const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 }
    Object.values(answers).forEach(answer => {
      scores[answer.type] += answer.value
    })

    // Normalize scores to percentage
    const maxScore = 50 // 10 questions per type * 5 max score
    const normalizedScores = {}
    Object.keys(scores).forEach(type => {
      normalizedScores[type] = Math.round((scores[type] / maxScore) * 100)
    })

    // Store results in localStorage (in real app, send to backend)
    localStorage.setItem('riasecResults', JSON.stringify(normalizedScores))
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    router.push('/dashboard/career/mapping/results')
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const currentAnswer = answers[questions[currentQuestion].id]?.value

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Kuesioner RIASEC</h1>
        <p className="text-blue-100">
          Pertanyaan {currentQuestion + 1} dari {questions.length}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-blue-600">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {questions[currentQuestion].text}
          </h2>
          <p className="text-gray-600">
            Seberapa setuju Anda dengan pernyataan di atas?
          </p>
        </div>

        {/* Answer Options */}
        <div className="space-y-3 mb-8">
          {[
            { value: 5, label: "Sangat Setuju", color: "green" },
            { value: 4, label: "Setuju", color: "blue" },
            { value: 3, label: "Netral", color: "gray" },
            { value: 2, label: "Tidak Setuju", color: "orange" },
            { value: 1, label: "Sangat Tidak Setuju", color: "red" }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`w-full text-gray-500 p-4 rounded-xl border-2 text-left transition-all ${
                currentAnswer === option.value
                  ? `border-${option.color}-500 bg-${option.color}-50`
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option.label}</span>
                <div className={`w-4 h-4 rounded-full border-2 ${
                  currentAnswer === option.value
                    ? `bg-${option.color}-500 border-${option.color}-500`
                    : 'border-gray-300'
                }`}></div>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Sebelumnya
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={submitAnswers}
              disabled={!currentAnswer || isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Menganalisis..." : "Selesai & Lihat Hasil"}
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              disabled={!currentAnswer}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Selanjutnya →
            </button>
          )}
        </div>
      </div>

      {/* Question Type Indicator */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-center space-x-4 text-sm">
          <span className="text-gray-600">Kategori saat ini:</span>
          <span className={`px-3 py-1 rounded-full font-medium ${
            questions[currentQuestion].type === 'R' ? 'bg-red-100 text-red-700' :
            questions[currentQuestion].type === 'I' ? 'bg-blue-100 text-blue-700' :
            questions[currentQuestion].type === 'A' ? 'bg-purple-100 text-purple-700' :
            questions[currentQuestion].type === 'S' ? 'bg-green-100 text-green-700' :
            questions[currentQuestion].type === 'E' ? 'bg-orange-100 text-orange-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {questions[currentQuestion].type === 'R' ? 'Realistic' :
             questions[currentQuestion].type === 'I' ? 'Investigative' :
             questions[currentQuestion].type === 'A' ? 'Artistic' :
             questions[currentQuestion].type === 'S' ? 'Social' :
             questions[currentQuestion].type === 'E' ? 'Enterprising' :
             'Conventional'}
          </span>
        </div>
      </div>
    </div>
  )
}
