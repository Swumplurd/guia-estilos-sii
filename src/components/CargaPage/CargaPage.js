import React from 'react'
import './CargaPage.css'

export const CargaPage = () => {
    return (
        <div class="contenedor" id="contenedor">
            <div class="loader-container">
                <div class="loader"></div>
                <div class="loader2"></div>
                <img loading="lazy" class="img-load" src="assets/img/favico.png" alt=""></img>
            </div>
        </div>
    )
}
