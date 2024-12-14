import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="bg-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Convierte tickets en hojas de cálculo con IA
          </h1>
          <p className="mt-6 text-xl text-gray-500">
            Automatiza tu flujo de trabajo. Nuestra IA convierte tus tickets en hojas de Excel organizadas y listas para analizar.
          </p>
          <div className="mt-8">
            <Button variant="outline" className="ml-4 bg-indigo-600 text-white" size="lg">
              Comienza gratis
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src="/placeholder.webp"
            alt="IA procesando tickets"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  )
}