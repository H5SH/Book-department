"use client"

import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Eye, ChevronDown, ChevronUp } from "lucide-react"
import { VerticalInfoCard } from "./vertical-info-card"
import { FileData } from "@/lib/data"
import { HorizontalInfoCard } from "./horizontal-info-card"

interface FileCardProps {
  file: FileData
}

export function FileCard({ file }: FileCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<"right" | "left">("right")

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Determine if card should expand left or right based on its position in viewport (desktop only)
  useEffect(() => {
    if (cardRef.current && !isMobile) {
      const updatePosition = () => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (rect) {
          const viewportWidth = window.innerWidth
          const cardCenterX = rect.left + rect.width / 2
          setPosition(cardCenterX > viewportWidth / 2 ? "left" : "right")
        }
      }

      updatePosition()
      window.addEventListener("resize", updatePosition)
      return () => window.removeEventListener("resize", updatePosition)
    }
  }, [isMobile])

  // Get appropriate file icon based on type
  const getFileIcon = (type: string) => {
    return (
      <div className="w-5 h-5 rounded-sm bg-blue-100 flex items-center justify-center text-xs text-blue-600">
        {type.slice(0, 1).toUpperCase()}
      </div>
    )
  }

  // Handle mobile click
  const handleMobileClick = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded)
    }
  }

  // Handle desktop hover
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsExpanded(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsExpanded(false)
    }
  }

  return (
    <div className="relative group" ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Base Card */}
      <Card
        className={`transition-all duration-500 cursor-pointer border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-gray-50/50 overflow-hidden ${isMobile ? "h-auto" : "h-full"
          }`}
        onClick={handleMobileClick}
      >
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

          {/* Desktop hover overlay with action buttons */}
          {!isMobile && (
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
          )}
        </div>

        <CardHeader className="pb-3 pt-4">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
              {file.name}
            </CardTitle>
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0">{getFileIcon(file.type)}</div>
              {isMobile && (
                <div className="flex-shrink-0">
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </div>
              )}
            </div>
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

        {/* Mobile expanded content (vertical) */}
        {isMobile && (
          <VerticalInfoCard
            file={file}
            isExpanded={isExpanded}
          />
        )}
      </Card>

      {/* Desktop Expanded Details Panel (horizontal) */}
      {!isMobile && (
        <HorizontalInfoCard file={file} isExpanded={isExpanded} position={position} getFileIcon={getFileIcon} />
      )}
    </div>
  )
}
