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
      <Hero />
      <Mid />
      <MidBottom />
      <Info />
    </Format>
  )
}
