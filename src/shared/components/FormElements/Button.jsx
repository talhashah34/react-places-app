import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

const Button = ({children, inverse, danger, onClick, href, to, size, type = 'button', disabled = false}) => {
    const buildClassName = () => {
        const classes = ['button', `button--${size || 'default'}`]
        if (inverse) classes.push('button--inverse')
        if (danger) classes.push('button--danger')
        return classes.join(' ')
    }

    if (href) {
        return (
            <a className={buildClassName()} href={href}>
                {children}
            </a>
        )
    }

    if (to) {
        return (
            <Link to={to} className={buildClassName()}>
                {children}
            </Link>
        )
    }

    return (
        <button
            className={buildClassName()}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
