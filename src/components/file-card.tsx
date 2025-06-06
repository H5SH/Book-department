"use client"

import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Eye } from "lucide-react"
import { FileData } from "@/lib/data"

interface FileCardProps {
  file: FileData
}

export function FileCard({ file }: FileCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<"right" | "left">("right")

  // Determine if card should expand left or right based on its position in viewport
  useEffect(() => {
    if (cardRef.current) {
      const updatePosition = () => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (rect) {
          const viewportWidth = window.innerWidth
          const cardCenterX = rect.left + rect.width / 2

          // If card is in the right half of the viewport, expand to the left
          setPosition(cardCenterX > viewportWidth / 2 ? "left" : "right")
        }
      }

      updatePosition()
      window.addEventListener("resize", updatePosition)
      return () => window.removeEventListener("resize", updatePosition)
    }
  }, [])

  // Get appropriate file icon based on type
  const getFileIcon = (type: string) => {
    // This is a placeholder - you would implement your actual file icon logic here
    return (
      <div className="w-5 h-5 rounded-sm bg-blue-100 flex items-center justify-center text-xs text-blue-600">
        {type.slice(0, 1).toUpperCase()}
      </div>
    )
  }

  return (
    <div
      className="relative group"
      ref={cardRef}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Base Card */}
      <Card className="h-full transition-all duration-500 cursor-pointer border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={file.previewImage || "/placeholder.svg?height=200&width=300"}
            alt={`Preview of ${file.name}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* File type badge */}
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/95 text-gray-700 shadow-sm backdrop-blur-sm">
              {file.type}
            </Badge>
          </div>

          {/* Hover overlay with action buttons */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
            <a
              href={file.url}
              className="inline-flex items-center px-3 py-2 text-sm font-medium bg-white/90 hover:bg-white text-gray-800 shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75 rounded-md"
            >
              <Eye className="h-4 w-4 mr-1" />
              Preview
            </a>
            <a
              href={file.url}
              download={file.name}
              className="inline-flex items-center px-3 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100 rounded-md"
            >
              <Download className="h-4 w-4 mr-1" />
              Download
            </a>
          </div>
        </div>

        <CardHeader className="pb-3 pt-4">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
              {file.name}
            </CardTitle>
            <div className="flex-shrink-0 mt-1">{getFileIcon(file.type)}</div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
              {file.categories[0]}
            </Badge>
            <span className="text-xs text-gray-500 font-medium">{file.size}</span>
          </div>
        </CardHeader>

        <CardContent className="pt-0 pb-4">
          <CardDescription className="text-sm text-gray-600 line-clamp-3 mb-3 leading-relaxed">
            {file.shortDescription}
          </CardDescription>

          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-gray-500">
              by <span className="font-medium text-gray-700">{file.author}</span>
            </p>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Available</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expanded Details Panel */}
      <div
        className={`
    absolute top-0 z-10 h-full bg-white shadow-2xl rounded-lg border border-gray-100
    transition-all duration-500 ease-in-out overflow-hidden
    ${isExpanded ? "opacity-100 w-[300px] md:w-[400px]" : "opacity-0 w-0"}
    ${position === "right" ? "left-full" : "right-full"}
  `}
      >
        <div className="h-full w-[300px] md:w-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4 sticky top-0 bg-white pb-2 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 pr-4">{file.name}</h3>
              <div className="flex-shrink-0">{getFileIcon(file.type)}</div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Full Description</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{file.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {file.categories.map((category, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">File Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Size:</span>
                    <span className="text-gray-900 font-medium">{file.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Type:</span>
                    <span className="text-gray-900 font-medium">{file.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Author:</span>
                    <span className="text-gray-900 font-medium">{file.author}</span>
                  </div>
                </div>
              </div>

              {/* Additional metadata section */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Additional Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-600 font-medium">Available</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Last Modified:</span>
                    <span className="text-gray-900 font-medium">2 days ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Downloads:</span>
                    <span className="text-gray-900 font-medium">1,234</span>
                  </div>
                </div>
              </div>

              {/* Action buttons - sticky at bottom */}
              {/* <div className="sticky bottom-0 bg-white pt-4 border-t border-gray-100 mt-6">
                <div className="flex items-center space-x-3">
                  <a
                    href={file.url}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </a>
                  <a
                    href={file.url}
                    download={file.name}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
