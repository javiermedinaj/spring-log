import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Producto</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-gray-300 hover:text-white">
                  Características
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-300 hover:text-white">
                  Precios
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Soporte</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-gray-300 hover:text-white">
                  Documentación
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-300 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Empresa</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-gray-300 hover:text-white">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-gray-300 hover:text-white">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-300 hover:text-white">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 TicketToExcel, Inc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

