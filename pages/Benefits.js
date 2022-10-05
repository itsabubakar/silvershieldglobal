import React from 'react'

import Format from '../layout/Format'
import Hero from '../components/Hero'
import HeaderText from '../components/HeaderText'
import BenefitsContainer from '../components/BenefitsContainer'

const About = () => {
    return (
        <Format>
            <HeaderText h2={'Benefits'} p={'Our partners come to us because they require more than just a safe pair of hands. They must understand that we are industry leaders and that they will be counseled, supported, and understood at all times.'} />
            <BenefitsContainer />
        </Format>
    )
}

export default About