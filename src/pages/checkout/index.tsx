import { MapPinLine } from '@phosphor-icons/react'

import { Input } from '../../components/input'

export function Checkout() {
  return (
    <form className="mx-auto flex w-full max-w-[1120px] justify-between gap-8">
      <fieldset className="flex-1">
        <legend className="pb-4 font-title text-lg font-bold text-base-title">
          Complete seu pedido
        </legend>
        <div className="rounded-lg bg-base-card p-10">
          <div className="mb-8 flex gap-2">
            <MapPinLine className="text-yellow-dark" size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <div className="grid grid-cols-[200px_1fr_60px] gap-4 grid-areas-addressForm">
            <div className="area-cep">
              <Input type="text" placeholder="CEP" />
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
        </div>
      </fieldset>
      <fieldset className="w-[448px]">
        <legend className="pb-4 font-title text-lg font-bold text-base-title">
          Cafés selecionados
        </legend>
        <div className="bg-base-card p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          explicabo.
        </div>
      </fieldset>
    </form>
  )
}
