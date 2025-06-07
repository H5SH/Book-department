import { Book, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import logo from "@/assets/book-department-logo.png"

export function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Image src={logo} alt="Book Department" width={40} height={40}/>
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
  )
}
