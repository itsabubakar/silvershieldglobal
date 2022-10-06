import React from 'react'

import Format from '../layout/Format'
import HowHero from '../components/HowHero'
import HowText from '../components/HowText'

const How = () => {
    return (
        <Format title={'- How we work'}>
            <HowHero />
            <HowText />
        </Format>
    )
}

export default How