import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Mid from '../components/Mid'
import MidBottom from '../components/MidBottom'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Mid />
      <MidBottom />
      <Info />
      <Footer />
    </div>
  )
}
