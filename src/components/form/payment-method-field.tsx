import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'

import { ButtonRadio } from './button-radio'
import { FormSchema } from './checkout-form/form-schema'

export function PaymentMethodField() {
  const { watch, register } = useFormContext<FormSchema>()

  const selectedPaymentMethod = watch('paymentMethod')

  return (
    <div className="flex gap-3">
      <ButtonRadio
        isSelected={selectedPaymentMethod === 'credit-card'}
        id="credit-card"
        value="credit-card"
        {...register('paymentMethod')}
      >
        <CreditCard size={16} className="text-purple" />
        <span className="font-text text-xs uppercase text-base-text">
          cartão de crédito
        </span>
      </ButtonRadio>
      <ButtonRadio
        isSelected={selectedPaymentMethod === 'debit-card'}
        id="debit-card"
        value="debit-card"
        {...register('paymentMethod')}
      >
        <Bank size={16} className="text-purple" />
        <span className="font-text text-xs uppercase text-base-text">
          cartão de débito
        </span>
      </ButtonRadio>
      <ButtonRadio
        isSelected={selectedPaymentMethod === 'money'}
        id="money"
        value="money"
        {...register('paymentMethod')}
      >
        <Money size={16} className="text-purple" />
        <span className="font-text text-xs uppercase text-base-text">
          dinheiro
        </span>
      </ButtonRadio>
    </div>
  )
}
