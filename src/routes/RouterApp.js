import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from "react-router-dom";

import { HomePage } from "../components/HomePage/HomePage";
import { ColorPage } from "../components/ColorPage/ColorPage";
import { BotonPage } from "../components/BotonPage/BotonPage";
import { CardPage } from "../components/CardPage/CardPage";
import { CargaPage } from "../components/CargaPage/CargaPage";
import { EfectosPage } from "../components/EfectosPage/EfectosPage";
import { FormsPage } from "../components/FormsPage/FormsPage";
import { NavbarPage } from "../components/NavbarPage/NavbarPage";
import { TablasPage } from "../components/TablasPage/TablasPage";

export const RouterApp = () => {
    return (
        <>
            <Router>
                <div className="container-fluid">
                    <div className="row flex-nowrap">
                        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                <Link to="/guia-estilos-sii/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                    <span className="fs-5 d-none d-sm-inline">Guia de Estilos SII</span>
                                </Link>
                                <ul className="nav w-100 nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                    <li className="nav-item w-100">
                                        <NavLink exact to="/guia-estilos-sii/" className="nav-link align-middle px-3">
                                            <i className="fs-4 bi bi-house"></i>
                                            <span className="ms-1 d-none d-sm-inline">Get Started</span>
                                        </NavLink>
                                        <NavLink to="/guia-estilos-sii/colores" className="nav-link align-middle px-3">
                                            <i className="fs-4 bi bi-brush"></i>
                                            <span className="ms-1 d-none d-sm-inline">Colores</span>
                                        </NavLink>
                                        <NavLink to="/guia-estilos-sii/botones" className="nav-link align-middle px-3">
                                            <i className="fs-4 bi bi-square"></i>
                                            <span className="ms-1 d-none d-sm-inline">Botones</span>
                                        </NavLink>
                                        <NavLink to="/guia-estilos-sii/cards" className="nav-link align-middle px-3">
                                            <i className="fs-4 bi bi-file-richtext"></i>
                                            <span className="ms-1 d-none d-sm-inline">Cards</span>
                                        </NavLink>
                                        <NavLink to="/guia-estilos-sii/forms" className="nav-link align-middle px-3">
                                            <i className="fs-4 bi bi-input-cursor-text"></i>
                                            <span className="ms-1 d-none d-sm-inline">Forms</span>
                                        </NavLink>
                                        <NavLink to="/guia-estilos-sii/navbar" className="nav-link align-middle px-3">
                                            <i className="fs-4 bi bi-window"></i>
                                            <span className="ms-1 d-none d-sm-inline">Navbar</span>
                                        </NavLink>
                                        <NavLink to="/guia-estilos-sii/tablas" className="nav-link align-middle px-3">
                                            <i className="fs-4 bi bi-grid-3x2"></i>
                                            <span className="ms-1 d-none d-sm-inline">Tablas</span>
                                        </NavLink>
                                        <NavLink to="/guia-estilos-sii/carga" className="nav-link align-middle px-3">
                                            <i className="fs-4 bi bi-hourglass-split"></i>
                                            <span className="ms-1 d-none d-sm-inline">Mascara de Carga</span>
                                        </NavLink>
                                        <NavLink to="/guia-estilos-sii/efectos" className="nav-link align-middle px-3">
                                            <i className="fs-4 bi bi-gem"></i>
                                            <span className="ms-1 d-none d-sm-inline">Efectos</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col py-3">
                            <Switch>
                                <Route exact path="/guia-estilos-sii/colores" component={ColorPage} />
                                <Route exact path="/guia-estilos-sii/botones" component={BotonPage} />
                                <Route exact path="/guia-estilos-sii/cards" component={CardPage} />
                                <Route exact path="/guia-estilos-sii/forms" component={FormsPage} />
                                <Route exact path="/guia-estilos-sii/navbar" component={NavbarPage} />
                                <Route exact path="/guia-estilos-sii/tablas" component={TablasPage} />
                                <Route exact path="/guia-estilos-sii/carga" component={CargaPage} />
                                <Route exact path="/guia-estilos-sii/efectos" component={EfectosPage} />
                                <Route exact path="/guia-estilos-sii/" component={HomePage} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </>
    );
};
