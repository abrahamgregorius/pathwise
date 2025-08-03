"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    // Step 2: Profile Info
    university: "",
    major: "",
    graduationYear: "",
    location: "",
    // Step 3: Career Interests
    careerInterests: [],
    skillLevel: "",
    preferredIndustry: "",
    agreeTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const careerOptions = [
    "Technology & IT",
    "Marketing & Digital",
    "Finance & Banking",
    "Healthcare",
    "Education",
    "Creative & Design",
    "Sales & Business Development",
    "Human Resources",
    "Operations & Management",
    "Engineering",
  ];

  const skillLevels = ["Beginner", "Intermediate", "Advanced"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
      // Redirect to dashboard
      window.location.href = "/dashboard";
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCareerInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      careerInterests: prev.careerInterests.includes(interest)
        ? prev.careerInterests.filter((item) => item !== interest)
        : [...prev.careerInterests, interest],
    }));
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Nama Lengkap
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
          placeholder="Masukkan nama lengkap"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
          placeholder="nama@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
            placeholder="Minimal 8 karakter"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <svg
              className="h-5 w-5 text-gray-400 hover:text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {showPassword ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Konfirmasi Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
          placeholder="Ulangi password"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="university"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Universitas
        </label>
        <input
          type="text"
          id="university"
          name="university"
          value={formData.university}
          onChange={handleChange}
          required
          className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
          placeholder="Nama universitas"
        />
      </div>

      <div>
        <label
          htmlFor="major"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Jurusan
        </label>
        <input
          type="text"
          id="major"
          name="major"
          value={formData.major}
          onChange={handleChange}
          required
          className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
          placeholder="Jurusan/Program studi"
        />
      </div>

      <div>
        <label
          htmlFor="graduationYear"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Tahun Lulus
        </label>
        <select
          id="graduationYear"
          name="graduationYear"
          value={formData.graduationYear}
          onChange={handleChange}
          required
          className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
        >
          <option value="">Pilih tahun lulus</option>
          {Array.from({ length: 10 }, (_, i) => 2024 - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Lokasi
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
          placeholder="Kota, Provinsi"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Minat Karir (Pilih maksimal 3)
        </label>
        <div className="grid grid-cols-2 gap-3">
          {careerOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleCareerInterestChange(option)}
              className={`p-3 text-sm rounded-xl border-2 transition-all duration-200 ${
                formData.careerInterests.includes(option)
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-300 bg-white hover:border-blue-300"
              }`}
              disabled={
                !formData.careerInterests.includes(option) &&
                formData.careerInterests.length >= 3
              }
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="skillLevel"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Level Skill Saat Ini
        </label>
        <select
          id="skillLevel"
          name="skillLevel"
          value={formData.skillLevel}
          onChange={handleChange}
          required
          className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
        >
          <option value="">Pilih level skill</option>
          {skillLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="preferredIndustry"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Industri yang Diminati
        </label>
        <input
          type="text"
          id="preferredIndustry"
          name="preferredIndustry"
          value={formData.preferredIndustry}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
          placeholder="Contoh: Startup, BUMN, Multinational"
        />
      </div>

      <div className="flex items-start">
        <input
          id="agreeTerms"
          name="agreeTerms"
          type="checkbox"
          checked={formData.agreeTerms}
          onChange={handleChange}
          required
          className="text-gray-700 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
        />
        <label
          htmlFor="agreeTerms"
          className="ml-3 block text-sm text-gray-700"
        >
          Saya setuju dengan{" "}
          <Link
            href="/terms"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Syarat & Ketentuan
          </Link>{" "}
          dan{" "}
          <Link
            href="/privacy"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Kebijakan Privasi
          </Link>
        </label>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PathWise
            </h1>
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    step <= currentStep
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step}
                </div>
                {/* {step < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      step < currentStep
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : "bg-gray-200"
                    }`}
                  ></div>
                )} */}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>Info Dasar</span>
            <span>Profil</span>
            <span>Minat Karir</span>
          </div>
        </div>

        {/* Register Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {currentStep === 1 && "Buat Akun Baru"}
              {currentStep === 2 && "Lengkapi Profil"}
              {currentStep === 3 && "Minat Karir"}
            </h2>
            <p className="text-gray-600">
              {currentStep === 1 && "Mulai perjalanan karirmu bersama PathWise"}
              {currentStep === 2 &&
                "Ceritakan sedikit tentang latar belakang pendidikanmu"}
              {currentStep === 3 &&
                "Bantu kami memahami minat dan tujuan karirmu"}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  Kembali
                </button>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  currentStep === 1 ? "w-full" : "ml-auto"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Mendaftar...
                  </div>
                ) : currentStep === 3 ? (
                  "Selesai"
                ) : (
                  "Lanjutkan"
                )}
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Sudah punya akun?{" "}
              <Link
                href="/login"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Masuk di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
