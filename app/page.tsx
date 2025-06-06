"use client"

import { useState, useMemo } from "react"
import { Search, Github, Linkedin, Book, FileText, ImageIcon, Video, Music } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Dummy data for files
const files = [
  {
    id: 1,
    name: "Advanced React Patterns",
    category: "Programming",
    shortDescription: "Modern React development techniques",
    fullDescription:
      "A comprehensive guide covering advanced React patterns including render props, higher-order components, compound components, and custom hooks. Perfect for developers looking to master React architecture and build scalable applications.",
    previewImage: "/placeholder.svg?height=200&width=300",
    fileType: "PDF",
    size: "2.4 MB",
    author: "John Smith",
  },
  {
    id: 2,
    name: "Digital Marketing Fundamentals",
    category: "Business",
    shortDescription: "Essential marketing strategies for digital age",
    fullDescription:
      "Learn the core principles of digital marketing including SEO, social media marketing, content strategy, email campaigns, and analytics. This guide provides practical insights for building successful online marketing campaigns.",
    previewImage: "/placeholder.svg?height=200&width=300",
    fileType: "PDF",
    size: "1.8 MB",
    author: "Sarah Johnson",
  },
  {
    id: 3,
    name: "Machine Learning Basics",
    category: "Technology",
    shortDescription: "Introduction to ML algorithms and concepts",
    fullDescription:
      "A beginner-friendly introduction to machine learning covering supervised and unsupervised learning, neural networks, decision trees, and practical implementation using Python. Includes hands-on examples and real-world applications.",
    previewImage: "/placeholder.svg?height=200&width=300",
    fileType: "PDF",
    size: "3.2 MB",
    author: "Dr. Michael Chen",
  },
  {
    id: 4,
    name: "Creative Writing Workshop",
    category: "Literature",
    shortDescription: "Techniques for compelling storytelling",
    fullDescription:
      "Develop your creative writing skills with proven techniques for character development, plot structure, dialogue, and narrative voice. Includes writing exercises, examples from published works, and tips for overcoming writer's block.",
    previewImage: "/placeholder.svg?height=200&width=300",
    fileType: "PDF",
    size: "1.5 MB",
    author: "Emma Williams",
  },
  {
    id: 5,
    name: "Financial Planning Guide",
    category: "Business",
    shortDescription: "Personal and business financial strategies",
    fullDescription:
      "Master the art of financial planning with comprehensive strategies for budgeting, investing, retirement planning, and risk management. Suitable for both personal finance and small business financial planning needs.",
    previewImage: "/placeholder.svg?height=200&width=300",
    fileType: "PDF",
    size: "2.1 MB",
    author: "Robert Davis",
  },
  {
    id: 6,
    name: "Web Design Principles",
    category: "Technology",
    shortDescription: "Modern UI/UX design fundamentals",
    fullDescription:
      "Explore the fundamental principles of web design including typography, color theory, layout composition, user experience design, and responsive design. Learn to create visually appealing and user-friendly websites.",
    previewImage: "/placeholder.svg?height=200&width=300",
    fileType: "PDF",
    size: "2.7 MB",
    author: "Lisa Anderson",
  },
  {
    id: 7,
    name: "Data Structures & Algorithms",
    category: "Programming",
    shortDescription: "Essential CS concepts for developers",
    fullDescription:
      "Master fundamental data structures and algorithms essential for software development. Covers arrays, linked lists, trees, graphs, sorting algorithms, and complexity analysis with practical coding examples.",
    previewImage: "/placeholder.svg?height=200&width=300",
    fileType: "PDF",
    size: "4.1 MB",
    author: "Alex Thompson",
  },
  {
    id: 8,
    name: "Modern Poetry Collection",
    category: "Literature",
    shortDescription: "Contemporary poems and analysis",
    fullDescription:
      "A curated collection of modern poetry featuring works from contemporary poets around the world. Includes detailed analysis, themes exploration, and insights into modern poetic techniques and movements.",
    previewImage: "/placeholder.svg?height=200&width=300",
    fileType: "PDF",
    size: "1.2 MB",
    author: "Maya Patel",
  },
]

const categories = ["All", "Programming", "Business", "Technology", "Literature"]

const getFileIcon = (fileType: string) => {
  switch (fileType) {
    case "PDF":
      return <FileText className="h-4 w-4" />
    case "Image":
      return <ImageIcon className="h-4 w-4" />
    case "Video":
      return <Video className="h-4 w-4" />
    case "Audio":
      return <Music className="h-4 w-4" />
    default:
      return <FileText className="h-4 w-4" />
  }
}

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFiles = useMemo(() => {
    return files.filter((file) => {
      const matchesSearch =
        file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.author.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || file.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Book className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">The Book Department</h1>
            </div>
            <p className="text-gray-600 hidden sm:block">Your Digital Library Resource</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search files, authors, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredFiles.length} of {files.length} files
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* File Grid */}
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFiles.map((file) => (
              <Tooltip key={file.id}>
                <TooltipTrigger asChild>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md hover:scale-105">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={file.previewImage || "/placeholder.svg"}
                        alt={`Preview of ${file.name}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-white/90 text-gray-700">
                          {file.fileType}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {file.name}
                        </CardTitle>
                        {getFileIcon(file.fileType)}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {file.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{file.size}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm text-gray-600 line-clamp-2 mb-2">
                        {file.shortDescription}
                      </CardDescription>
                      <p className="text-xs text-gray-500">by {file.author}</p>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs p-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold">{file.name}</h4>
                    <p className="text-sm">{file.fullDescription}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{file.category}</span>
                      <span>{file.size}</span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        {/* No Results */}
        {filteredFiles.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No files found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Book className="h-6 w-6 text-blue-600" />
              <span className="text-gray-900 font-semibold">The Book Department</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">Connect with us:</span>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="h-4 w-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t text-center text-sm text-gray-500">
            <p>&copy; 2024 The Book Department. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
