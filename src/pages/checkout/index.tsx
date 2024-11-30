import { CoffeeCheckoutItem } from '../../components/coffee-checkout-item'
import { CheckoutForm } from '../../components/form/checkout-form'
import { useCart } from '../../context/cart-context'
import { formatCurrency } from '../../utils'

const DELIVERY_VALUE = 3.5

interface FormValues {
  cep: string
  street: string
  streetNumber: string
  complement: string
  neighborhood: string
  city: string
  uf: string
  paymentMethod: 'credit-card' | 'debit-card' | 'money'
}

export function Checkout() {
  const { cart, subtotal } = useCart()
  function handleSubmit(values: FormValues) {
    console.log(values)
  }

  const subtotalFormatted = formatCurrency(subtotal)
  const deliveryFormatted = formatCurrency(DELIVERY_VALUE)
  const totalFormatted = formatCurrency(subtotal + DELIVERY_VALUE)

  return (
    <div className="mx-auto flex w-full max-w-[1120px] justify-between gap-8">
      <div className="flex-1">
        <h2 className="mb-4 font-title text-lg font-bold text-base-title">
          Complete seu pedido
        </h2>
        <CheckoutForm doSubmit={handleSubmit} />
      </div>
      <div className="w-[448px]">
        <h2 className="mb-4 font-title text-lg font-bold text-base-title">
          Cafés selecionados
        </h2>
        <div className="rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card p-10">
          {cart.map((item) => (
            <CoffeeCheckoutItem key={item.id} item={item} />
          ))}

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-text text-sm text-base-text">
                Total de itens
              </span>
              <span className="font-text text-base text-base-text">
                {subtotalFormatted}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-text text-sm text-base-text">Entrega</span>
              <span className="font-text text-base text-base-text">
                {deliveryFormatted}
              </span>
            </div>
            <div className="flex justify-between">
              <h3 className="font-text text-xl font-bold text-base-subtitle">
                Total
              </h3>
              <strong className="font-text text-xl font-bold text-base-subtitle">
                {totalFormatted}
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
