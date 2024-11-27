import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'

import { Card } from '../../card'
import { PaymentMethodField } from '../payment-method-field'
import { AddressFields } from './address-fields'
import { FormSchema, formSchema } from './form-schema'

interface Props {
  doSubmit: (data: FormSchema) => void
}

export function CheckoutForm({ doSubmit }: Props) {
  const methods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: FormSchema) {
    doSubmit(values)
  }

  return (
    <FormProvider {...methods}>
      <form id="checkout-form" onSubmit={methods.handleSubmit(onSubmit)}>
        <Card
          title="Endereço de Entrega"
          description="Informe o endereço onde deseja receber seu pedido"
          headerIcon={<MapPinLine className="text-yellow-dark" size={22} />}
        >
          <AddressFields />
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
