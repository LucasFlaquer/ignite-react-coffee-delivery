import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'

import { Card } from '../../card'
import { Input } from '../../input'
import { PaymentMethodField } from '../payment-method-field'
import { FormSchema, formSchema } from './form-schema'

export function CheckoutForm() {
  const methods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })
  const { register, handleSubmit } = methods

  function onSubmit(values: FormSchema) {
    console.log(values)
  }

  return (
    <FormProvider {...methods}>
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
              <Input type="text" placeholder="RUA" {...register('street')} />
            </div>
            <div className="area-number">
              <Input
                type="text"
                placeholder="Número"
                {...register('streetNumber')}
              />
            </div>
            <div className="area-complement">
              <Input
                type="text"
                placeholder="Complemento"
                isOptional
                {...register('complement')}
              />
            </div>
            <div className="area-neighborhood">
              <Input
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
            </div>
            <div className="area-city">
              <Input type="text" placeholder="Cidade" {...register('city')} />
            </div>
            <div className="area-uf">
              <Input type="text" placeholder="UF" {...register('uf')} />
            </div>
          </div>
        </Card>
        <Card
          title="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          headerIcon={<CurrencyDollar className="text-purple" size={22} />}
        >
          <PaymentMethodField />
        </Card>
      </form>
    </FormProvider>
  )
}
