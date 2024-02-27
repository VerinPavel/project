import React from 'react'
import './_formIcons.scss'

export default function FormIcons() {
    return (
        <div className="iconsContainer">
            <div className="icon">
                <div className="icon__circle">
                    <img src="../img/search.webp" alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="icon">
                <div className="icon__circle">
                    <img src="../img/percent.webp" alt="" />
                </div>
                <p>Сonsecteturadipiscing elit</p>
            </div>
            <div className="icon">
                <div className="icon__circle">
                    <img src="../img/file.webp" alt="" />
                </div>
                <p>Sed do eiusmod tempor</p>
            </div>
            <div className="icon">
                <div className="icon__circle">
                    <img src="../img/message.webp" alt="" />
                </div>
                <p>Esse cillum dolore eu fugiat</p>
            </div>
            <div className="icon">
                <div className="icon__circle">
                    <img src="../img/money.webp" alt="" />
                </div>
                <p>Excepteur sint occaecat cupidatat non proident</p>
            </div>
        </div>
    )
}
