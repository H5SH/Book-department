import { FileText, ImageIcon, Video, Music } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

interface FileProps {
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

export function FileCard({ file }: { file: FileProps }) {
  return (
    <TooltipProvider>
      <Tooltip>
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
    </TooltipProvider>
  )
}
