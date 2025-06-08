import { FileData } from "@/lib/data";
import { Download, Eye } from "lucide-react";
import { Badge } from "./ui/badge";
import { JSX } from "react";

export const HorizontalInfoCard = (
    { file, isExpanded, position, getFileIcon }: 
    { file: FileData, 
      isExpanded: boolean, 
      position: 'right' | 'left',
      getFileIcon: (s: string)=> JSX.Element 
    }) => (
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
                            {/* <div className="flex justify-between">
                                <span className="text-gray-500">Last Modified:</span>
                                <span className="text-gray-900 font-medium">2 days ago</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Downloads:</span>
                                <span className="text-gray-900 font-medium">1,234</span>
                            </div> */}
                        </div>
                    </div>

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
)