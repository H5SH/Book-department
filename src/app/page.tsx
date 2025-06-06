"use client"

import { useState, useMemo } from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SearchBar } from "@/components/search-bar"
import { CategoryFilters } from "@/components/category-filters"
import { FileCard } from "@/components/file-card"
import { EmptyState } from "@/components/empty-state"
import { files, categories } from "@/lib/data"

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
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
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
              <FileCard key={file.id} file={file} />
            ))}
          </div>
        </TooltipProvider>

        {/* No Results */}
        {filteredFiles.length === 0 && <EmptyState />}
      </main>

      <Footer />
    </div>
  )
}
