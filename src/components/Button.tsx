import React from 'react';

import '../Styles/Components/Button.css'




interface IButton {
    buttonText: string;
    buttonColor: 'primary' | 'secondary';

} 

const Button: React.FC<IButton & React.ButtonHTMLAttributes<HTMLButtonElement>> =  ({ buttonText, buttonColor }) => {

    const style = {
        buttonCustom: {
            backgroundColor: buttonColor === 'primary' ? '#06A77D' : '#F1A208'
        },
    }

    return(
        <div className="button-wrapper">
            <button id="button-custom"  style={style.buttonCustom}>{ buttonText }</button>
        </div>
    )
}

export default Button