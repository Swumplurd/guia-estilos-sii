import React from "react";
import "./NavbarPage.css";

export const NavbarPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-4">Navbar</h1>
                </div>
                <hr/>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <p className="lead text-justify">Antes de iniciar sesión</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-11">
                    <nav className="navbar navbar-expand-lg navbar-dark bg_primary">
                        <div className="container-fluid">
                            <a className="navbar-brand text-white" href="/guia-estilos-sii/navbar">
                                <img alt="..." loading="lazy" src="assets/img/favico.png" width="30px" height="30px" /> LOGO
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/guia-estilos-sii/navbar">
                                            Inicio
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/guia-estilos-sii/navbar">
                                            Lorem.
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/guia-estilos-sii/navbar">
                                            Lorem, ipsum.
                                        </a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="btn btn_primary" href="/guia-estilos-sii/navbar">
                                            <i className="fas fa-user mr-1"></i> Iniciar Sesion
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-sm-11">
                    <div>
                        <pre className="chroma p-3 rounded">
                            <code className="language-html" data-lang="html">
                                <span className="p">&lt;</span>
                                <span className="nt">nav</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar navbar-expand-lg navbar-dark bg_primary"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-2">&lt;</span>
                                <span className="nt">div</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"container-fluid"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;</span>
                                <span className="nt">a</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar-brand text-white"</span>
                                <span className="na"> href</span>
                                <span className="o">=</span>
                                <span className="s">"#"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;</span>
                                <span className="nt">img</span>
                                <span className="na"> loading</span>
                                <span className="o">=</span>
                                <span className="s">"lazy"</span>
                                <span className="na"> src</span>
                                <span className="o">=</span>
                                <span className="s">"assets/img/favico.png"</span>
                                <span className="na"> width</span>
                                <span className="o">=</span>
                                <span className="s">"30px"</span>
                                <span className="na">height</span>
                                <span className="o">=</span>
                                <span className="s">"30px"</span>
                                <span className="p">&gt;</span> LOGO
                                <br />
                                <span className="p t-3">&lt;/</span>
                                <span className="nt">a</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;</span>
                                <span className="nt">button</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar-toggler"</span>
                                <span className="na"> type</span>
                                <span className="o">=</span>
                                <span className="s">"button"</span>
                                <span className="na"> data-bs-toggle</span>
                                <span className="o">=</span>
                                <span className="s">"collapse"</span>
                                <span className="na"> data-bs-target</span>
                                <span className="o">=</span>
                                <span className="s">"#navbarSupportedContent"</span>
                                <span className="na"> aria-controls</span>
                                <span className="o">=</span>
                                <span className="s">"navbarSupportedContent"</span>
                                <span className="na"> aria-expanded</span>
                                <span className="o">=</span>
                                <span className="s">"false"</span>
                                <span className="na"> aria-label</span>
                                <span className="o">=</span>
                                <span className="s">"Toggle navigation"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;</span>
                                <span className="nt">span</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar-toggler-icon"</span>
                                <span className="p">&gt;</span>
                                <span className="p">&lt;/</span>
                                <span className="nt">span</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;</span>
                                <span className="nt">div</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"collapse navbar-collapse"</span>
                                <span className="na"> id</span>
                                <span className="o">=</span>
                                <span className="s">"navbarSupportedContent"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;</span>
                                <span className="nt">ul</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar-nav me-auto mb-2 mb-lg-0"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;</span>
                                <span className="nt">li</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-item"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-6">&lt;</span>
                                <span className="nt">a</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-link active"</span>
                                <span className="na"> aria-current</span>
                                <span className="o">=</span>
                                <span className="s">"page"</span>
                                <span className="na"> href</span>
                                <span className="o">=</span>
                                <span className="s">"#"</span>
                                <span className="p">&gt;</span> Inicio
                                <span className="p">&lt;/</span>
                                <span className="nt">a</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;/</span>
                                <span className="nt">li</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;</span>
                                <span className="nt">li</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-item"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-6">&lt;</span>
                                <span className="nt">a</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-link active"</span>
                                <span className="na"> href</span>
                                <span className="o">=</span>
                                <span className="s">"#"</span>
                                <span className="p">&gt;</span> Lorem.
                                <span className="p">&lt;/</span>
                                <span className="nt">a</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;/</span>
                                <span className="nt">li</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;</span>
                                <span className="nt">li</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-item"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-6">&lt;</span>
                                <span className="nt">a</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-link active"</span>
                                <span className="na"> href</span>
                                <span className="o">=</span>
                                <span className="s">"#"</span>
                                <span className="p">&gt;</span> Lorem, ipsum.
                                <span className="p">&lt;/</span>
                                <span className="nt">a</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;/</span>
                                <span className="nt">li</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;/</span>
                                <span className="nt">ul</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;</span>
                                <span className="nt">ul</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar-nav me-auto mb-2 mb-lg-0"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;</span>
                                <span className="nt">li</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-item"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-6">&lt;</span>
                                <span className="nt">a</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"btn btn_primary"</span>
                                <span className="na"> href</span>
                                <span className="o">=</span>
                                <span className="s">"#"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-7">&lt;</span>
                                <span className="nt">i</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"fas fa-user mr-1"</span>
                                <span className="p">&gt;</span>
                                <span className="p">&lt;/</span>
                                <span className="nt">i</span>
                                <span className="p">&gt;</span> Iniciar Sesion
                                <br />
                                <span className="p t-6">&lt;/</span>
                                <span className="nt">a</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;/</span>
                                <span className="nt">li</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;/</span>
                                <span className="nt">ul</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;/</span>
                                <span className="nt">div</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-2">&lt;/</span>
                                <span className="nt">div</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;/</span>
                                <span className="nt">nav</span>
                                <span className="p">&gt;</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col">
                    <p className="fs-2 text_start">Despues de iniciar sesión</p>
                </div>
                <hr/>
            </div>
            <div className="row mt-2">
                <div className="col-md-11">
                    <nav className="navbar navbar-expand-lg navbar-dark bg_primary">
                        <div className="container-fluid">
                            <a className="navbar-brand text-white" href="/guia-estilos-sii/navbar">
                                <img alt="..." loading="lazy" src="assets/img/favico.png" width="30px" height="30px" /> LOGO
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/guia-estilos-sii/navbar">
                                            Inicio
                                        </a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item mx-auto d-block">
                                        <a href="/guia-estilos-sii/navbar" className="btn btn_primary">
                                            Enero -Junio
                                        </a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link active dropdown-toggle btn btn_primary" href="/guia-estilos-sii/navbar" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-user mr-1"></i> Linces
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a className="dropdown-item" href="/guia-estilos-sii/navbar">
                                                    <button className="btn btn_outline_danger" type="button" id="btnCerrarSesion">
                                                        <i className="fas fa-power-off mr-1"></i> Cerrar Sesion
                                                    </button>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-sm-11">
                    <div>
                        <pre className="chroma p-3 rounded">
                            <code>
                                <span className="p">&lt;</span>
                                <span className="nt">nav</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar navbar-expand-lg navbar-dark bg_primary"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-2">&lt;</span>
                                <span className="nt">div</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"container-fluid"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;</span>
                                <span className="nt">a</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar-brand text-white"</span>
                                <span className="na"> href</span>
                                <span className="o">=</span>
                                <span className="s">"#"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;</span>
                                <span className="nt">img</span>
                                <span className="na"> loading</span>
                                <span className="o">=</span>
                                <span className="s">"lazy"</span>
                                <span className="na"> src</span>
                                <span className="o">=</span>
                                <span className="s">"assets/img/favico.png"</span>
                                <span className="na"> width</span>
                                <span className="o">=</span>
                                <span className="s">"30px"</span>
                                <span className="na">height</span>
                                <span className="o">=</span>
                                <span className="s">"30px"</span>
                                <span className="p">&gt;</span> LOGO
                                <br />
                                <span className="p t-3">&lt;/</span>
                                <span className="nt">a</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;</span>
                                <span className="nt">button</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar-toggler"</span>
                                <span className="na"> type</span>
                                <span className="o">=</span>
                                <span className="s">"button"</span>
                                <span className="na"> data-bs-toggle</span>
                                <span className="o">=</span>
                                <span className="s">"collapse"</span>
                                <span className="na"> data-bs-target</span>
                                <span className="o">=</span>
                                <span className="s">"#navbarSupportedContent"</span>
                                <span className="na"> aria-controls</span>
                                <span className="o">=</span>
                                <span className="s">"navbarSupportedContent"</span>
                                <span className="na"> aria-expanded</span>
                                <span className="o">=</span>
                                <span className="s">"false"</span>
                                <span className="na"> aria-label</span>
                                <span className="o">=</span>
                                <span className="s">"Toggle navigation"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;</span>
                                <span className="nt">span</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar-toggler-icon"</span>
                                <span className="p">&gt;</span>
                                <span className="p">&lt;/</span>
                                <span className="nt">span</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;</span>
                                <span className="nt">div</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"collapse navbar-collapse"</span>
                                <span className="na"> id</span>
                                <span className="o">=</span>
                                <span className="s">"navbarSupportedContent"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;</span>
                                <span className="nt">ul</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar-nav me-auto mb-2 mb-lg-0"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;</span>
                                <span className="nt">li</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-item"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-6">&lt;</span>
                                <span className="nt">a</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-link active"</span>
                                <span className="na"> aria-current</span>
                                <span className="o">=</span>
                                <span className="s">"page"</span>
                                <span className="na"> href</span>
                                <span className="o">=</span>
                                <span className="s">"#"</span>
                                <span className="p">&gt;</span> Inicio
                                <span className="p">&lt;/</span>
                                <span className="nt">a</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;/</span>
                                <span className="nt">li</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;/</span>
                                <span className="nt">ul</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;</span>
                                <span className="nt">ul</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar-nav me-auto mb-2 mb-lg-0"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;</span>
                                <span className="nt">li</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-item"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-6">&lt;</span>
                                <span className="nt">a</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"btn btn_primary"</span>
                                <span className="na"> href</span>
                                <span className="o">=</span>
                                <span className="s">"#"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-7">&lt;</span>
                                <span className="nt">i</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"fas fa-user mr-1"</span>
                                <span className="p">&gt;</span>
                                <span className="p">&lt;/</span>
                                <span className="nt">i</span>
                                <span className="p">&gt;</span> Iniciar Sesion
                                <br />
                                <span className="p t-6">&lt;/</span>
                                <span className="nt">a</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;/</span>
                                <span className="nt">li</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;/</span>
                                <span className="nt">ul</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;</span>
                                <span className="nt">ul</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar-nav me-auto mb-2 mb-lg-0"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;</span>
                                <span className="nt">li</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-item mx-auto d-block"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-6">&lt;</span>
                                <span className="nt">a</span>
                                <span className="na"> href</span>
                                <span className="o">=</span>
                                <span className="s">"#"</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"btn btn_primary"</span>
                                <span className="p">&gt;</span> Enero -Junio
                                <span className="p">&lt;/</span>
                                <span className="nt">a</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;/</span>
                                <span className="nt">li</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;/</span>
                                <span className="nt">ul</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;</span>
                                <span className="nt">ul</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"navbar-nav me-auto mb-2 mb-lg-0"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;</span>
                                <span className="nt">li</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-item dropdown"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-6">&lt;</span>
                                <span className="nt">a</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"nav-link active dropdown-toggle btn btn_primary"</span>
                                <span className="na">href</span>
                                <span className="o">=</span>
                                <span className="s">"#"</span>
                                <span className="na"> id</span>
                                <span className="o">=</span>
                                <span className="s">"navbarDropdown"</span>
                                <span className="na"> role</span>
                                <span className="o">=</span>
                                <span className="s">"button"</span>
                                <span className="na"> data-bs-toggle</span>
                                <span className="o">=</span>
                                <span className="s">"dropdown"</span>
                                <span className="na"> aria-expanded</span>
                                <span className="o">=</span>
                                <span className="s">"false"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-7">&lt;</span>
                                <span className="nt">i</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"fas fa-user mr-1"</span>
                                <span className="p">&gt;</span>
                                <span className="p">&lt;/</span>
                                <span className="nt">i</span>
                                <span className="p">&gt;</span> Linces
                                <br />
                                <span className="p t-6">&lt;/</span>
                                <span className="nt">a</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-6">&lt;</span>
                                <span className="nt">ul</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"dropdown-menu"</span>
                                <span className="na"> aria-labelledby</span>
                                <span className="o">=</span>
                                <span className="s">"navbarDropdown"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-7">&lt;</span>
                                <span className="nt">li</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-8">&lt;</span>
                                <span className="nt">a</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"dropdown-item"</span>
                                <span className="nt"> href</span>
                                <span className="o">=</span>
                                <span className="s">"#"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-9">&lt;</span>
                                <span className="nt">button</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"btn btn_outline_danger"</span>
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">"button"</span>
                                <span className="na"> id</span>
                                <span className="o">=</span>
                                <span className="s">"btnCerrarSesion"</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-10">&lt;</span>
                                <span className="nt">i</span>
                                <span className="na"> class</span>
                                <span className="o">=</span>
                                <span className="s">"fas fa-power-off mr-1"</span>
                                <span className="p">&gt;</span>
                                <span className="p">&lt;/</span>
                                <span className="nt">i</span>
                                <span className="p">&gt;</span> Cerrar Sesion
                                <br />
                                <span className="p t-9">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-8">&lt;/</span>
                                <span className="nt">a</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-7">&lt;/</span>
                                <span className="nt">li</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-6">&lt;/</span>
                                <span className="nt">ul</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-5">&lt;/</span>
                                <span className="nt">li</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;/</span>
                                <span className="nt">ul</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;/</span>
                                <span className="nt">div</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-2">&lt;/</span>
                                <span className="nt">div</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;/</span>
                                <span className="nt">nav</span>
                                <span className="p">&gt;</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};
