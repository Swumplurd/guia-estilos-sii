import React, { useEffect, useState } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import { BotonPage } from "../BotonPage/BotonPage";
import { CardPage } from "../CardPage/CardPage";
import { CargaPage } from "../CargaPage/CargaPage";
import { ColorPage } from "../ColorPage/ColorPage";
import { EfectosPage } from "../EfectosPage/EfectosPage";
import { FormsPage } from "../FormsPage/FormsPage";
import { HomePage } from "../HomePage/HomePage";
import { NavbarPage } from "../NavbarPage/NavbarPage";
import { TablasPage } from "../TablasPage/TablasPage";

import "./Sidebar.css";

export const Sidebar = () => {
    const [theme, setTheme] = useState(false)
    const [show, setShow] = useState(false)

    const handleDark = () => {
        setTheme(!theme)
    }

    const handleHide = () => {
        document.getElementById('menu-control').checked = false
    }

    const handleShowHide = () => {
        setShow(!show)
        document.getElementById('menu-control').checked = show
        setShow(false)
    }

    useEffect(() => {
        const check = document.getElementById('themeSwitch').checked
        if (check) {
            document.getElementById('theme').className = "bg-dark text-light"
        } else {
            document.getElementById('theme').className = "bg-white text-dark"
        }
    }, [theme])

    return (
        <section className="banner">
            <label htmlFor="menu-control" onClick={handleShowHide} className="hamburger">
                <i className="hamburger__icon bg-secondary"></i>
                <i className="hamburger__icon bg-secondary"></i>
                <i className="hamburger__icon bg-secondary"></i>
            </label>

            <input type="checkbox" id="menu-control" className="menu-control" />

            <aside className="sidebar" style={{ zIndex: "1" }}>
                <nav className="sidebar__menu">
                    <NavLink onClick={handleHide} className="display-6 fs-4" to="/">
                        <i className="fs-4 bi bi-house me-2"></i>Home
                    </NavLink>
                    <NavLink onClick={handleHide} className="display-6 fs-4" to="/colores">
                        <i className="fs-4 bi bi-brush me-2"></i>Colores
                    </NavLink>
                    <NavLink onClick={handleHide} className="display-6 fs-4" to="/botones">
                        <i className="fs-4 bi bi-square me-2"></i>Botones
                    </NavLink>
                    <NavLink onClick={handleHide} className="display-6 fs-4" to="/cards">
                        <i className="fs-4 bi bi-file-richtext me-2"></i>Cards
                    </NavLink>
                    <NavLink onClick={handleHide} className="display-6 fs-4" to="/forms">
                        <i className="fs-4 bi bi-input-cursor-text me-2"></i>
                        Forms
                    </NavLink>
                    <NavLink onClick={handleHide} className="display-6 fs-4" to="/navbar">
                        <i className="fs-4 bi bi-window me-2"></i>Navbar
                    </NavLink>
                    <NavLink onClick={handleHide} className="display-6 fs-4" to="/tablas">
                        <i className="fs-4 bi bi-grid-3x2 me-2"></i>Tablas
                    </NavLink>
                    <NavLink onClick={handleHide} className="display-6 fs-6" to="/carga">
                        <i className="fs-4 bi bi-hourglass-split me-2"></i>
                        Mascara de Carga
                    </NavLink>
                    <NavLink onClick={handleHide} className="display-6 fs-4" to="/efectos">
                        <i className="fs-4 bi bi-gem me-2"></i>Efectos
                    </NavLink>

                </nav>

                <label
                    htmlFor="menu-control"
                    className="sidebar__close"
                ></label>

                <ul className="sidebar__social">
                    
                    <li>
                        <div className="form-check form-switch">
                            <input onChange={handleDark} className="form-check-input" type="checkbox" id="themeSwitch"/>
                            <label
                                className="form-check-label"
                                htmlFor="themeSwitch"
                            >
                                🌗 
                            </label>
                        </div>
                    </li>
                </ul>
            </aside>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div>
                            <Switch>
                                <Route
                                    exact
                                    path="/colores"
                                    component={ColorPage}
                                />
                                <Route
                                    exact
                                    path="/botones"
                                    component={BotonPage}
                                />
                                <Route
                                    exact
                                    path="/cards"
                                    component={CardPage}
                                />
                                <Route
                                    exact
                                    path="/forms"
                                    component={FormsPage}
                                />
                                <Route
                                    exact
                                    path="/navbar"
                                    component={NavbarPage}
                                />
                                <Route
                                    exact
                                    path="/tablas"
                                    component={TablasPage}
                                />
                                <Route
                                    exact
                                    path="/carga"
                                    component={CargaPage}
                                />
                                <Route
                                    exact
                                    path="/efectos"
                                    component={EfectosPage}
                                />
                                <Route exact path="/" component={HomePage} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
