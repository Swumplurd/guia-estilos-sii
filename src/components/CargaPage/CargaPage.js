import React from 'react'
import './CargaPage.css'

export const CargaPage = () => {
    return (
        <div className="contenedor" id="contenedor">
            <div className="loader-container">
                <div className="loader"></div>
                <div className="loader2"></div>
                <img loading="lazy" className="img-load" src="assets/img/favico.png" alt=""></img>
            </div>
        </div>
    )
}
