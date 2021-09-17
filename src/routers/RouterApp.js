import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Sidebar } from '../components/Sidebar/Sidebar'

export const RouterApp = () => {
    return (
        <Router basename="/guia-estilos-sii">
            <Sidebar/>
            <Footer/>
        </Router>
    )
}
