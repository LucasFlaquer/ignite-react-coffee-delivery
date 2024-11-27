import { useFormContext } from 'react-hook-form'

import { Input } from '../../input'
import { FormSchema } from './form-schema'

export function AddressFields() {
  const { register } = useFormContext<FormSchema>()

  return (
    <div className="grid grid-cols-[200px_1fr_60px] gap-4 grid-areas-addressForm">
      <div className="area-cep">
        <Input type="text" placeholder="CEP" {...register('cep')} />
      </div>
      <div className="area-address">
        <Input type="text" placeholder="RUA" {...register('street')} />
      </div>
      <div className="area-number">
        <Input type="text" placeholder="Número" {...register('streetNumber')} />
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
        <Input type="text" placeholder="Bairro" {...register('neighborhood')} />
      </div>
      <div className="area-city">
        <Input type="text" placeholder="Cidade" {...register('city')} />
      </div>
      <div className="area-uf">
        <Input type="text" placeholder="UF" {...register('uf')} />
      </div>
    </div>
  )
}
