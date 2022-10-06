import Head from 'next/head'

// Components
import Hero from '../components/Hero'
import Info from '../components/Info'
import Mid from '../components/Mid'
import MidBottom from '../components/MidBottom'
import Format from '../layout/Format'

export default function Home() {
  return (
    <Format>
      <Hero
        hOne={'Providing solutions'}
        hTwo={'to your investment goals'}
        p={'With a team of experts in developing business concepts, business development and projections, we partner with businesses to source investments, manage the business and build sustainable profit streams.'} />
      <Mid />
      <MidBottom />
      <Info />
    </Format>
  )
}
