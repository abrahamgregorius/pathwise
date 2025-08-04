"use client"
import { useState } from "react"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [profileData, setProfileData] = useState({
    fullName: "Sarah Putri",
    email: "sarah.putri@email.com",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    university: "Universitas Indonesia",
    major: "Teknik Informatika",
    graduationYear: "2023",
    bio: "Fresh graduate yang passionate di bidang teknologi dan product management.",
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    weeklyDigest: true,
    mentoringSessions: true,
    jobRecommendations: true,
  })

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    showEmail: false,
    showPhone: false,
    showLocation: true,
    allowMessaging: true,
    showOnlineStatus: true,
  })

  const accountStats = [
    { label: "Member Since", value: "Jan 2024", icon: "📅" },
    { label: "Profile Views", value: "156", icon: "👁️" },
    { label: "Connections", value: "48", icon: "🤝" },
    { label: "Achievements", value: "12", icon: "🏆" },
  ]

  const recentActivity = [
    {
      action: "Profile updated",
      description: "Updated work experience",
      timestamp: "2 hours ago",
      icon: "👤",
    },
    {
      action: "Password changed",
      description: "Security settings updated",
      timestamp: "1 day ago",
      icon: "🔒",
    },
    {
      action: "New connection",
      description: "Connected with Ahmad Rahman",
      timestamp: "3 days ago",
      icon: "🤝",
    },
  ]

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    // Handle profile update logic
    alert("Profile updated successfully!")
  }

  const handlePreferenceChange = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handlePrivacyChange = (key, value) => {
    setPrivacySettings((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Akun Saya ⚙️</h1>
        <p className="text-purple-100 text-lg">
          Kelola informasi profil, preferensi, dan pengaturan keamanan akun Anda
        </p>
      </div>

      {/* Account Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {accountStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("profile")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "profile"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              👤 Profil
            </button>
            <button
              onClick={() => setActiveTab("preferences")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "preferences"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              🔔 Notifikasi
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "privacy"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              🔒 Privasi
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "security"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              🛡️ Keamanan
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">SP</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{profileData.fullName}</h3>
                  <p className="text-gray-600">{profileData.email}</p>
                  <button className="mt-2 text-purple-600 hover:text-purple-700 font-medium text-sm">
                    Ubah Foto Profil
                  </button>
                </div>
              </div>

              <form onSubmit={handleProfileUpdate} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi</label>
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Universitas</label>
                    <input
                      type="text"
                      value={profileData.university}
                      onChange={(e) => setProfileData({ ...profileData, university: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jurusan</label>
                    <input
                      type="text"
                      value={profileData.major}
                      onChange={(e) => setProfileData({ ...profileData, major: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Ceritakan sedikit tentang diri Anda..."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === "preferences" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Notifikasi Email</h3>
                <div className="space-y-4">
                  {[
                    {
                      key: "emailNotifications",
                      label: "Notifikasi Email Umum",
                      desc: "Terima update penting via email",
                    },
                    {
                      key: "weeklyDigest",
                      label: "Weekly Digest",
                      desc: "Ringkasan mingguan aktivitas dan rekomendasi",
                    },
                    {
                      key: "jobRecommendations",
                      label: "Rekomendasi Pekerjaan",
                      desc: "Notifikasi job baru yang sesuai profil",
                    },
                    { key: "mentoringSessions", label: "Mentoring Sessions", desc: "Reminder dan update mentoring" },
                    { key: "marketingEmails", label: "Marketing Emails", desc: "Promosi dan penawaran khusus" },
                  ].map((pref) => (
                    <div
                      key={pref.key}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-xl"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900">{pref.label}</h4>
                        <p className="text-gray-600 text-sm">{pref.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences[pref.key]}
                          onChange={() => handlePreferenceChange(pref.key)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Notifikasi Push</h3>
                <div className="p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Push Notifications</h4>
                      <p className="text-gray-600 text-sm">Terima notifikasi langsung di browser</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.pushNotifications}
                        onChange={() => handlePreferenceChange("pushNotifications")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === "privacy" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Visibilitas Profil</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-xl">
                    <h4 className="font-medium text-gray-900 mb-3">Siapa yang bisa melihat profil Anda?</h4>
                    <div className="space-y-2">
                      {[
                        { value: "public", label: "Publik", desc: "Semua orang bisa melihat profil" },
                        { value: "connections", label: "Koneksi Saja", desc: "Hanya koneksi yang bisa melihat" },
                        { value: "private", label: "Privat", desc: "Hanya Anda yang bisa melihat" },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="profileVisibility"
                            value={option.value}
                            checked={privacySettings.profileVisibility === option.value}
                            onChange={(e) => handlePrivacyChange("profileVisibility", e.target.value)}
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <div>
                            <div className="font-medium text-gray-900">{option.label}</div>
                            <div className="text-gray-600 text-sm">{option.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Informasi Kontak</h3>
                <div className="space-y-4">
                  {[
                    { key: "showEmail", label: "Tampilkan Email", desc: "Email terlihat di profil publik" },
                    { key: "showPhone", label: "Tampilkan Nomor Telepon", desc: "Nomor telepon terlihat di profil" },
                    { key: "showLocation", label: "Tampilkan Lokasi", desc: "Lokasi terlihat di profil publik" },
                    { key: "allowMessaging", label: "Izinkan Pesan", desc: "Orang lain bisa mengirim pesan" },
                    { key: "showOnlineStatus", label: "Status Online", desc: "Tampilkan status online/offline" },
                  ].map((setting) => (
                    <div
                      key={setting.key}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-xl"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900">{setting.label}</h4>
                        <p className="text-gray-600 text-sm">{setting.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={privacySettings[setting.key]}
                          onChange={(e) => handlePrivacyChange(setting.key, e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Keamanan Akun</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Password</h4>
                        <p className="text-gray-600 text-sm">Terakhir diubah 1 hari lalu</p>
                      </div>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                        Ubah Password
                      </button>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                        <p className="text-gray-600 text-sm">Tambahan keamanan untuk akun Anda</p>
                      </div>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Aktifkan 2FA
                      </button>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Login Sessions</h4>
                        <p className="text-gray-600 text-sm">Kelola perangkat yang login ke akun</p>
                      </div>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Lihat Sessions
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Data & Privacy</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Download Data</h4>
                        <p className="text-gray-600 text-sm">Unduh semua data akun Anda</p>
                      </div>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Request Data
                      </button>
                    </div>
                  </div>

                  <div className="p-4 border border-red-200 rounded-xl bg-red-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-red-900">Delete Account</h4>
                        <p className="text-red-700 text-sm">Hapus akun dan semua data secara permanen</p>
                      </div>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Aktivitas Terbaru</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg">{activity.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900">{activity.action}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
                <p className="text-gray-400 text-xs mt-1">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
