import { coffees } from '../constants/coffees'
import { CoffeeItem } from './coffee-item'

export function CoffeesList() {
  return (
    <section className="px-40">
      <h2>Nossos cafés</h2>
      <div className="mb-10 mt-14 grid grid-cols-4 gap-x-8 gap-y-10">
        {coffees.map((coffee) => (
          <CoffeeItem coffee={coffee} key={coffee.id} />
        ))}
      </div>
    </section>
  )
}
