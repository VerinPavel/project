import React from 'react'
import './_orderButton.scss'

export default function OrderButton() {
    return (
        <button className="orderBtn">
            <div className="orderBtn__container">
                <img src="../img/document.webp" alt="Pin a file" />
                <p>Прикрепить файл</p>
            </div>
        </button>
    )
}
