import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'

import { Card } from '../../card'
import { Input } from '../../input'
import { FormSchema, formSchema } from './form-schema'

export function CheckoutForm() {
  const { register, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: FormSchema) {
    console.log(values)
  }

  return (
    <form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
      <Card
        title="Endereço de Entrega"
        description="Informe o endereço onde deseja receber seu pedido"
        headerIcon={<MapPinLine className="text-yellow-dark" size={22} />}
      >
        <div className="grid grid-cols-[200px_1fr_60px] gap-4 grid-areas-addressForm">
          <div className="area-cep">
            <Input type="text" placeholder="CEP" {...register('cep')} />
          </div>
          <div className="area-address">
            <Input type="text" placeholder="RUA" />
          </div>
          <div className="area-number">
            <Input type="text" placeholder="Número" />
          </div>
          <div className="area-complement">
            <Input type="text" placeholder="Complemento" />
          </div>
          <div className="area-neighborhood">
            <Input type="text" placeholder="Bairro" />
          </div>
          <div className="area-city">
            <Input type="text" placeholder="Cidade" />
          </div>
          <div className="area-uf">
            <Input type="text" placeholder="UF" />
          </div>
        </div>
      </Card>
      <Card
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        headerIcon={<CurrencyDollar className="text-purple" size={22} />}
      >
        <div className="flex gap-3">
          <label
            htmlFor="credit-card"
            className="flex flex-1 cursor-pointer items-center gap-3 rounded-md bg-base-button p-4 hover:bg-base-hover"
          >
            <input
              type="radio"
              name="payment-method"
              id="credit-card"
              className="hidden"
            />
            <CreditCard size={16} className="text-purple" />
            <span className="font-text text-xs uppercase text-base-text">
              cartão de crédito
            </span>
          </label>
          <label
            htmlFor="debit-card"
            className="flex flex-1 cursor-pointer items-center gap-3 rounded-md bg-base-button p-4 hover:bg-base-hover"
          >
            <input
              type="radio"
              name="payment-method"
              id="debit-card"
              className="hidden"
            />
            <Bank size={16} className="text-purple" />
            <span className="font-text text-xs uppercase text-base-text">
              cartão de débito
            </span>
          </label>
          <label
            htmlFor="money"
            className="flex flex-1 cursor-pointer items-center gap-3 rounded-md bg-base-button p-4 hover:bg-base-hover"
          >
            <input
              type="radio"
              name="payment-method"
              id="money"
              className="hidden"
            />
            <Money size={16} className="text-purple" />
            <span className="font-text text-xs uppercase text-base-text">
              dinheiro
            </span>
          </label>
        </div>
      </Card>
    </form>
  )
}
