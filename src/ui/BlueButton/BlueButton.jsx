import React from 'react'
import './_blueButton.scss'

export default function BlueButton({ text }) {
    return (
        <button className="blueBtn">
            <p>{text}</p>
        </button>
    )
}
