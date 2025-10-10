"use client"
import { useState } from "react"

export default function ForumAlumniPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("latest")

  const categories = [
    { id: "all", name: "Semua", count: 156 },
    { id: "career-tips", name: "Career Tips", count: 45 },
    { id: "interview", name: "Interview", count: 32 },
    { id: "salary", name: "Salary & Benefits", count: 28 },
    { id: "networking", name: "Networking", count: 24 },
    { id: "success-story", name: "Success Story", count: 27 },
  ]

  const forumPosts = [
    {
      id: 1,
      title: "Tips Negosiasi Gaji untuk Fresh Graduate",
      author: {
        name: "Sarah Putri",
        avatar: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        title: "Software Engineer at Tokopedia",
        verified: true,
      },
      category: "salary",
      content: "Sharing pengalaman negosiasi gaji pertama kali setelah lulus. Beberapa tips yang bisa membantu...",
      replies: 24,
      likes: 89,
      views: 342,
      timeAgo: "2 jam lalu",
      isPinned: true,
      tags: ["salary", "negotiation", "fresh-graduate"],
    },
    {
      id: 2,
      title: "Roadmap Lengkap Menjadi Data Scientist di 2024",
      author: {
        name: "Ahmad Rahman",
        avatar: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
        title: "Data Science Director at Shopee",
        verified: true,
      },
      category: "career-tips",
      content:
        "Update roadmap terbaru untuk yang ingin berkarir di bidang data science. Mulai dari skill dasar hingga advanced...",
      replies: 18,
      likes: 67,
      views: 523,
      timeAgo: "5 jam lalu",
      isPinned: false,
      tags: ["data-science", "roadmap", "learning"],
    },
    {
      id: 3,
      title: "Pengalaman Interview di 5 Startup Unicorn Indonesia",
      author: {
        name: "Budi Santoso",
        avatar: "https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80",
        title: "Product Manager at Gojek",
        verified: true,
      },
      category: "interview",
      content:
        "Sharing detail proses interview di Gojek, Tokopedia, Shopee, Traveloka, dan Bukalapak. Semoga membantu!",
      replies: 31,
      likes: 102,
      views: 789,
      timeAgo: "1 hari lalu",
      isPinned: false,
      tags: ["interview", "startup", "unicorn"],
    },
    {
      id: 4,
      title: "From Jobless to Product Manager: My Journey",
      author: {
        name: "Dinda Maharani",
        avatar: "/placeholder.svg?height=40&width=40",
        title: "Product Manager at Shopee",
        verified: true,
      },
      category: "success-story",
      content: "Cerita perjalanan dari pengangguran 6 bulan hingga akhirnya diterima sebagai PM di Shopee...",
      replies: 45,
      likes: 156,
      views: 1234,
      timeAgo: "2 hari lalu",
      isPinned: false,
      tags: ["success-story", "product-manager", "motivation"],
    },
  ]

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId)
    return category ? category.name : categoryId
  }

  const getCategoryColor = (categoryId) => {
    const colors = {
      "career-tips": "bg-blue-100 text-blue-700",
      interview: "bg-green-100 text-green-700",
      salary: "bg-purple-100 text-purple-700",
      networking: "bg-orange-100 text-orange-700",
      "success-story": "bg-pink-100 text-pink-700",
    }
    return colors[categoryId] || "bg-gray-100 text-gray-700"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Forum Alumni 🎓</h1>
        <p className="text-blue-100 text-lg">
          Diskusi dan networking dengan sesama alumni PathWise yang sudah berhasil berkarir
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6">
            {/* New Post Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all mb-6">
              + Buat Post Baru
            </button>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Kategori</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                      ? "bg-blue-100 text-blue-700 font-medium"
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

            {/* Top Contributors */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {[
                  { name: "Sarah Putri", posts: 24, avatar: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=", },
                  {
                    name: "Ahmad Rahman", posts: 18, avatar: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
                  },
                  {
                    name: "Budi Santoso", posts: 15, avatar: "https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80",
                  },
                ].map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={contributor.avatar || "/placeholder.svg"}
                      alt={contributor.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{contributor.name}</p>
                      <p className="text-xs text-gray-500">{contributor.posts} posts</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Sort and Filter */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">
                  {selectedCategory === "all" ? "Semua Diskusi" : getCategoryName(selectedCategory)}
                </h3>
                <p className="text-gray-600 text-sm">{forumPosts.length} diskusi ditemukan</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Urutkan:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="latest">Terbaru</option>
                  <option value="popular">Terpopuler</option>
                  <option value="most-replies">Paling Banyak Reply</option>
                </select>
              </div>
            </div>
          </div>

          {/* Forum Posts */}
          <div className="space-y-6">
            {forumPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Post Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                      {post.author.verified && (
                        <span className="text-blue-500">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                      {post.isPinned && (
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">📌 Pinned</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{post.author.title}</p>
                    <p className="text-gray-500 text-xs">{post.timeAgo}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(post.category)}`}>
                    {getCategoryName(post.category)}
                  </span>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{post.content}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Post Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      {post.replies} replies
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      {post.likes} likes
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {post.views} views
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-purple-600 p-2 rounded-lg hover:bg-purple-50 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        />
                      </svg>
                    </button>
                  </div>
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
