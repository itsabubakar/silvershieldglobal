import React from 'react'

import Format from '../layout/Format'
import AboutHero from '../components/AboutHero'
import AboutText from '../components/AboutText'

const About = () => {
  return (
    <Format title={'- About'}>
      <AboutHero />
      <AboutText bg={'#fefefe'} text={[
        'Silvershieldglobal makes business grants, development plans, and financial management easier for new and old businesses.',
        `As company owners, we are always moving our enterprises forward—from the first stages of development through the first sale to international expansion. Services that will create a comfortable, safe, and flexible experience for your company growth is necessary.`,
        'Silvershield Global Services Ltd was created for the modern economy, where boundaries are dissolving and starting a global company is possible with the right team. Silvershield Global Services Ltd offers different packages ranging from Consultancy, debt recovery, and financing.',
      ]} />
      <AboutText h2={'Who  We Are'} text={[
        "Silvershield Global services Ltd was founded with the goal of creating engaging business concepts, developing companies to reach their global potential and managing a company's keeping and profit projections.",
        'Since launch, Silvershield Global Services Ltd has worked with different companies and different government sectors to ensure smooth financial management, sustainable growth and development of new prosperous business projects.',
      ]} />
    </Format>
  )
}

export default About