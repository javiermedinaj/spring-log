import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Básico',
    price: '9.99',
    features: ['100 tickets por mes', 'Exportación a Excel', 'Soporte por email'],
  },
  {
    name: 'Pro',
    price: '29.99',
    features: ['500 tickets por mes', 'Exportación a Excel y CSV', 'Soporte prioritario', 'API access'],
  },
  {
    name: 'Empresa',
    price: 'Contactar',
    features: ['Tickets ilimitados', 'Todas las características', 'Soporte 24/7', 'Integración personalizada'],
  },
]

export default function Pricing() {
  return (
    <div className="bg-dark" id="pricing">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-center">Planes de precios</h2>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Elige el plan perfecto para tus necesidades
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {plans.map((plan) => (
            <div key={plan.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-medium text-white">{plan.name}</h3>
                <p className="mt-4 text-3xl font-extrabold text-white">${plan.price}</p>
                <Button variant="outline" className="mt-8 block w-full bg-indigo-600" >
                  Seleccionar {plan.name}
                </Button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-500 tracking-wide uppercase">Qué incluye</h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <span className="ml-3 text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

