import { BannerIntro } from '../../components/banner-intro'
import { CoffeesList } from '../../components/coffees-list'
import { Header } from '../../components/header'

export function Home() {
  return (
    <>
      <Header />
      <BannerIntro />
      <CoffeesList />
    </>
  )
}
