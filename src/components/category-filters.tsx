"use client"

import { Button } from "@/components/ui/button"

interface CategoryFiltersProps {
  categories: string[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export function CategoryFilters({ categories, selectedCategory, setSelectedCategory }: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          onClick={() => setSelectedCategory(category)}
          className={`${selectedCategory === category ? 'bg-blue-500 text-white':''} text-sm`}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
