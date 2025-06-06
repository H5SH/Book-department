export interface FileData {
  id: number
  name: string
  category: string
  shortDescription: string
  fullDescription: string
  previewImage: string
  fileType: string
  size: string
  author: string
}

export const files: FileData[] = [
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

export const categories = ["All", "Programming", "Business", "Technology", "Literature"]
