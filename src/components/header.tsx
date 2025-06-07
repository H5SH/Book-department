import Image from "next/image"
import logo from "@/assets/book-department-logo.png"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Book Department" width={100} height={100}/>
            <h1 className="text-3xl font-bold text-gray-900">The Book Department</h1>
          </div>
          <p className="text-gray-600 hidden sm:block">Your Digital Library Resource</p>
        </div>
      </div>
    </header>
  )
}
