import React from 'react';
import { Link } from 'react-router-dom'

import '../Styles/Pages/Challanges.css'

import Header from '../components/Header'
import PageWrapper from '../components/PageWrapper'
import Challange from '../components/Challange'


export default () => {
    return(
        <div id="challanges">
            <PageWrapper backgroundColor="#052F5F">
                <Header />
                <main className="challanges-main">
                    <Challange 
                    id="1"
                    name='Criar uma calculadora' 
                    description='Calculadora deve conter todas suas funcionalidades
                    Calculadora deve conter todas suas funcionalidades
                    Calculadora deve conter todas suas funcionalidades
                    Calculadora deve conter todas suas funcionalidades'
                    category='beginner'/>
                </main>
            </PageWrapper>
        </div>
    )
}