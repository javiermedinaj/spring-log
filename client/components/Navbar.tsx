'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-white">
            <Link href="/dashboard" className=" hover:text-slate-500 px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </Link>
            <Link href="#pricing" className=" hover:text-slate-500 px-3 py-2 rounded-md text-sm font-medium">
              Precios
            </Link>
            <Link href="#contact" className=" hover:text-slate-500 px-3 py-2 rounded-md text-sm font-medium">
              Contacto
            </Link>
            <Button variant="outline" className="ml-4 bg-indigo-600 text-white hover:bg-slate-500">
              <Link href="/login">Iniciar sesión</Link>
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-950 shadow-lg">
          <Link href="#features" className="block px-4 py-2 text-white hover:bg-gray-700">
            Características
          </Link>
          <Link href="#pricing" className="block px-4 py-2 text-white hover:bg-gray-700">
            Precios
          </Link>
          <Link href="#contact" className="block px-4 py-2 text-white hover:bg-gray-700">
            Contacto
          </Link>
          <Button className="w-full p-2 bg-indigo-600 text-white hover:bg-slate-900">
            <Link href="/login">Iniciar sesión</Link>
          </Button>
        </div>
      )}
    </nav>
  )
}