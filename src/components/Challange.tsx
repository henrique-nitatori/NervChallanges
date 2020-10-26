import React from 'react';
import { Link } from 'react-router-dom'
import  '../Styles/Components/Challange.css'

interface IChallange {
    id: string;
    name: string;
    description: string;
    category: 'beginner' | 'intermediate' | 'advanced'; 
}

export default ({ name, description, category , id}: IChallange) => {
    const styles = {
        beginner: {
            backgroundColor: '#F1A208',
            opacity: 0.6
        },
        intermediate: {
            backgroundColor: '#F1A208',
            opacity: 0.8
        },
        advanced: {
            backgroundColor: '#F1A208',
            opacity: 1
        }
    }

    return (
        <Link to={id}>
            <div id="challange">
                <header className="challange-header">
                    <h3>{name}</h3>
                </header>
                <main>
                    <span>{description}</span>
                </main>
                <div className="challange-difficulty"style={styles[category]}>
                    <span>Iniciante</span>
                </div>
            </div>
        </Link>
    )
}