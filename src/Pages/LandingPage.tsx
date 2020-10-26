import React from 'react';
import { useSpring, animated } from 'react-spring'
import '../Styles/Pages/LandingPage.css'

import Button from '../components/Button'
import PageWrapper from '../components/PageWrapper'
import SharedImg from '../images/shared.svg'
import WaveImg from '../images/wave.svg'

export default () => {

    return (
        <div id="landing-page">
            <PageWrapper backgroundColor="#052F5F">
                    <header>
                        <h2>NERV Challanges</h2>
                    </header>

                    <main>
                        <section className="nerv-challange-info">
                            <h4>
                                Não tem idéia do que progamar? 
                                Que tal resolver nossos desafios
                            </h4>
                            <div className="button">
                                <Button buttonText="Desafios" buttonColor="primary" /> 
                            </div>
                        </section>
                        <img src={SharedImg} alt="Image"/>
                    </main>
                    <img src={WaveImg} alt="wave" className="wave"/>
            </PageWrapper>
        </div>
    )
}