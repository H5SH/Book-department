import { FileData } from "@/lib/data";
import { Badge } from "./ui/badge";
import { Download, Eye } from "lucide-react";

export const VerticalInfoCard = ({file, isExpanded}:{file: FileData, isExpanded: boolean}) => (
    <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}
    >
        <div className="px-6 pb-6 border-t border-gray-100">
            <div className="pt-4 space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
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
            </div>

            {/* Mobile action buttons */}
            <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-100">
                <a
                    href={file.url}
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                </a>
                <a
                    href={file.url}
                    download={file.name}
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                </a>
            </div>
        </div>
    </div>
)