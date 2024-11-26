import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '../../components/input'
import { Card } from './card'
import { CoffeeCheckoutItem } from './coffee-checkout-item'

const formSchema = z.object({
  cep: z.string().min(1, 'CEP obrigatório'),
  street: z.string().min(1, 'Rua obrigatória'),
  streetNumber: z.string().min(1, 'Informe o número'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(1, 'Informe o estado'),
  paymentMethod: z.enum(['credit-card', 'debit-card', 'money'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

type FormSchema = z.infer<typeof formSchema>

export function Checkout() {
  const { register, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: FormSchema) {
    console.log(values)
  }

  return (
    <div className="mx-auto flex w-full max-w-[1120px] justify-between gap-8">
      <div className="flex-1">
        <h2 className="mb-4 font-title text-lg font-bold text-base-title">
          Complete seu pedido
        </h2>
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
