import React from "react";
import './NavButton.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
] 

const SIZE = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children, 
    type, 
    onClick,
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIXE.includes(buttonSize) ? buttonSize : buttonSize[0]

    return (
        <button className={`btn ${buttonStyle} ${buttonSize}`} onClick = {onClick} type = {type}>
            {children}
        </button>
    )
}