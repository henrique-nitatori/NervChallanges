import React from 'react';
import { Link } from 'react-router-dom'

import '../Styles/Components/Header.css'

import Button from '../components/Button'


export default () => {
    return (
        <>
        <header id="header">
            <h2>NERV Challanges </h2>
                <div className="header-actions">
                    <section className="buttons">
                        <Button buttonText="Login" buttonColor="primary"/>
                    </section>
                        <Link to="#">Registrar-se</Link>
                </div>
         </header>
        </>
    )
}