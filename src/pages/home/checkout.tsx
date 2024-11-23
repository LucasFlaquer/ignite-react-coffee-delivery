import { MapPinLine } from '@phosphor-icons/react'

export function Checkout() {
  return (
    <form className="mx-auto flex w-full max-w-[1120px] justify-between gap-8">
      <fieldset className="flex-1">
        <legend className="pb-4 font-title text-lg font-bold text-base-title">
          Complete seu pedido
        </legend>
        <div className="rounded-lg bg-base-card p-10">
          <div className="flex gap-2">
            <MapPinLine className="text-yellow-dark" size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <div className="grid-areas-addressForm grid gap-4">
            <div className="area-cep">
              <input type="text" placeholder="CEP" />
            </div>

            <div className="area-address">
              <input type="text" className="w-full" placeholder="RUA" />
            </div>
            <div className="area-number">
              <input type="text" className="w-full" placeholder="Número" />
            </div>
            <div className="area-complement">
              <input type="text" className="w-full" placeholder="Complemento" />
            </div>
            <div className="area-neighborhood">
              <input type="text" className="w-full" placeholder="Bairro" />
            </div>
            <div className="area-city">
              <input type="text" className="w-full" placeholder="Cidade" />
            </div>
            <div className="area-uf">
              <input type="text" className="w-full" placeholder="UF" />
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
