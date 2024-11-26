import { CoffeeCheckoutItem } from '../../components/coffee-checkout-item'
import { CheckoutForm } from '../../components/form/checkout-form'

export function Checkout() {
  return (
    <div className="mx-auto flex w-full max-w-[1120px] justify-between gap-8">
      <div className="flex-1">
        <h2 className="mb-4 font-title text-lg font-bold text-base-title">
          Complete seu pedido
        </h2>
        <CheckoutForm />
      </div>
      <div className="w-[448px]">
        <h2 className="mb-4 font-title text-lg font-bold text-base-title">
          Cafés selecionados
        </h2>
        <div className="rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card p-10">
          <CoffeeCheckoutItem />
          <CoffeeCheckoutItem />

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-text text-sm text-base-text">
                Total de itens
              </span>
              <span className="font-text text-base text-base-text">
                R$ 29,70
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-text text-sm text-base-text">Entrega</span>
              <span className="font-text text-base text-base-text">
                R$ 3,50
              </span>
            </div>
            <div className="flex justify-between">
              <h3 className="font-text text-xl font-bold text-base-subtitle">
                Total
              </h3>
              <strong className="font-text text-xl font-bold text-base-subtitle">
                R$ 33,20
              </strong>
            </div>
          </div>
          <button
            type="submit"
            form="checkout-form"
            className="mt-4 w-full rounded-md bg-yellow px-2 py-3 text-center text-sm font-bold uppercase text-white hover:bg-yellow-dark"
          >
            Confirmar pedido
          </button>
        </div>
      </div>
    </div>
  )
}
