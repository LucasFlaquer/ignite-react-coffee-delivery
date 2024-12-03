import { MapPin } from '@phosphor-icons/react'
import { Location, useLocation } from 'react-router-dom'

interface LocationState {
  address: string
  city: string
  uf: string
  paymentMethod: 'credit-card' | 'debit-card' | 'money'
}

export function Confirmation() {
  const { state } = useLocation() as Location<LocationState>

  return (
    <div className="mx-auto max-w-[1120px] pt-20">
      <h1 className="mb-1 font-title text-4xl font-extrabold text-yellow-dark">
        Uhu! Pedido confirmado
      </h1>
      <p className="mb-7 font-text text-xl text-base-subtitle">
        Agora é só aguardar que logo o café chegará até você
      </p>
      <div className="flex items-center justify-between">
        <div className="rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] border bg-gradient-to-r from-yellow to-purple p-[1px]">
          <div className="h-full w-full space-y-8 bg-background p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple p-2">
                <MapPin weight="fill" className="text-white" size={16} />
              </div>
              <div>
                <p className="text-base-text">
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p className="text-base-text">Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple p-2">
                <MapPin weight="fill" className="text-white" size={16} />
              </div>
              <div>
                <p className="text-base-text">
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p className="text-base-text">Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple p-2">
                <MapPin weight="fill" className="text-white" size={16} />
              </div>
              <div>
                <p className="text-base-text">
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p className="text-base-text">Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
          </div>
        </div>
        <img src="/confirmation-delivery.png" alt="Confirmação de pedido" />
      </div>
    </div>
  )
}
