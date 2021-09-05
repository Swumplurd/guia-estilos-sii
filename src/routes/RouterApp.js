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
                  <Link to="/home" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Guia de Estilos SII</span>
                  </Link>
                  <ul className="nav w-100 nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item w-100">
                      <NavLink to="/home" className="nav-link align-middle px-3">
                        <i className="fs-4 bi-house"></i>
                        <span className="ms-1 d-none d-sm-inline">Get Started</span>
                      </NavLink>
                      <NavLink to="/colores" className="nav-link align-middle px-3">
                        <i className="fs-4 bi-house"></i>
                        <span className="ms-1 d-none d-sm-inline">Colores</span>
                      </NavLink>
                      <NavLink to="/botones" className="nav-link align-middle px-3">
                        <i className="fs-4 bi-house"></i>
                        <span className="ms-1 d-none d-sm-inline">Botones</span>
                      </NavLink>
                      <NavLink to="/cards" className="nav-link align-middle px-3">
                        <i className="fs-4 bi-house"></i>
                        <span className="ms-1 d-none d-sm-inline">Cards</span>
                      </NavLink>
                      <NavLink to="/forms" className="nav-link align-middle px-3">
                        <i className="fs-4 bi-house"></i>
                        <span className="ms-1 d-none d-sm-inline">Forms</span>
                      </NavLink>
                      <NavLink to="/navbar" className="nav-link align-middle px-3">
                        <i className="fs-4 bi-house"></i>
                        <span className="ms-1 d-none d-sm-inline">Navbar</span>
                      </NavLink>
                      <NavLink to="/tablas" className="nav-link align-middle px-3">
                        <i className="fs-4 bi-house"></i>
                        <span className="ms-1 d-none d-sm-inline">Tablas</span>
                      </NavLink>
                      <NavLink to="/carga" className="nav-link align-middle px-3">
                        <i className="fs-4 bi-house"></i>
                        <span className="ms-1 d-none d-sm-inline">Mascara de Carga</span>
                      </NavLink>
                      <NavLink to="/efectos" className="nav-link align-middle px-3">
                        <i className="fs-4 bi-house"></i>
                        <span className="ms-1 d-none d-sm-inline">Efectos</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col py-3">
                <Switch>
                  <Route path="/home" component={HomePage} />
                  <Route path="/colores" component={ColorPage} />
                  <Route path="/botones" component={BotonPage} />
                  <Route path="/cards" component={CardPage} />
                  <Route path="/forms" component={FormsPage} />
                  <Route path="/navbar" component={NavbarPage} />
                  <Route path="/tablas" component={TablasPage} />
                  <Route path="/carga" component={CargaPage} />
                  <Route path="/efectos" component={EfectosPage} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </>
    );
  };