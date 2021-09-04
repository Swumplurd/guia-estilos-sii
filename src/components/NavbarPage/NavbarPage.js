import React from 'react'
import './NavbarPage.css'

export const NavbarPage = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="fs-2">Antes de iniciarcesion</p>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-sm-12">
                    <nav class="navbar navbar-expand-lg navbar-dark bg_primary">
                        <div class="container-fluid">
                            <a class="navbar-brand text-white" href="#"><img loading="lazy" src="assets/img/favico.png" width="30px" height="30px" /> LOGO</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Lorem.</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Lorem, ipsum.</a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="btn btn_primary" href="#"><i class="fas fa-user mr-1"></i> Iniciar Sesion</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-sm-12">
                    <div class="highlight">
                        <pre tabindex="0" class="chroma border border-light mx-2">
                            <code class="language-html" data-lang="html">
                                <span class="p">&lt;</span>
                                <span class="nt">nav</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar navbar-expand-lg navbar-dark bg_primary"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-2">&lt;</span>
                                <span class="nt">div</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"container-fluid"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-3">&lt;</span>
                                <span class="nt">a</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar-brand text-white"</span>
                                <span class="na"> href</span>
                                <span class="o">=</span>
                                <span class="s">"#"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;</span>
                                <span class="nt">img</span>
                                <span class="na"> loading</span>
                                <span class="o">=</span>
                                <span class="s">"lazy"</span>
                                <span class="na"> src</span>
                                <span class="o">=</span>
                                <span class="s">"assets/img/favico.png"</span>
                                <span class="na"> width</span>
                                <span class="o">=</span>
                                <span class="s">"30px"</span>
                                <span class="na">height</span>
                                <span class="o">=</span>
                                <span class="s">"30px"</span>
                                <span class="p">&gt;</span> LOGO
                                <br/>
                                <span class="p t-3">&lt;/</span>
                                <span class="nt">a</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-3">&lt;</span>
                                <span class="nt">button</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar-toggler"</span>
                                <span class="na"> type</span>
                                <span class="o">=</span>
                                <span class="s">"button"</span>
                                <span class="na"> data-bs-toggle</span>
                                <span class="o">=</span>
                                <span class="s">"collapse"</span>
                                <span class="na"> data-bs-target</span>
                                <span class="o">=</span>
                                <span class="s">"#navbarSupportedContent"</span>
                                <span class="na"> aria-controls</span>
                                <span class="o">=</span>
                                <span class="s">"navbarSupportedContent"</span>
                                <span class="na"> aria-expanded</span>
                                <span class="o">=</span>
                                <span class="s">"false"</span>
                                <span class="na"> aria-label</span>
                                <span class="o">=</span>
                                <span class="s">"Toggle navigation"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;</span>
                                <span class="nt">span</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar-toggler-icon"</span>
                                <span class="p">&gt;</span>
                                <span class="p">&lt;/</span>
                                <span class="nt">span</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-3">&lt;/</span>
                                <span class="nt">button</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-3">&lt;</span>
                                <span class="nt">div</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"collapse navbar-collapse"</span>
                                <span class="na"> id</span>
                                <span class="o">=</span>
                                <span class="s">"navbarSupportedContent"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;</span>
                                <span class="nt">ul</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar-nav me-auto mb-2 mb-lg-0"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;</span>
                                <span class="nt">li</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-item"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-6">&lt;</span>
                                <span class="nt">a</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-link active"</span>
                                <span class="na"> aria-current</span>
                                <span class="o">=</span>
                                <span class="s">"page"</span>
                                <span class="na"> href</span>
                                <span class="o">=</span>
                                <span class="s">"#"</span>
                                <span class="p">&gt;</span> Inicio
                                <span class="p">&lt;/</span>
                                <span class="nt">a</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;/</span>
                                <span class="nt">li</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;</span>
                                <span class="nt">li</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-item"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-6">&lt;</span>
                                <span class="nt">a</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-link active"</span>
                                <span class="na"> href</span>
                                <span class="o">=</span>
                                <span class="s">"#"</span>
                                <span class="p">&gt;</span> Lorem.
                                <span class="p">&lt;/</span>
                                <span class="nt">a</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;/</span>
                                <span class="nt">li</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;</span>
                                <span class="nt">li</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-item"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-6">&lt;</span>
                                <span class="nt">a</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-link active"</span>
                                <span class="na"> href</span>
                                <span class="o">=</span>
                                <span class="s">"#"</span>
                                <span class="p">&gt;</span> Lorem, ipsum.
                                <span class="p">&lt;/</span>
                                <span class="nt">a</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;/</span>
                                <span class="nt">li</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;/</span>
                                <span class="nt">ul</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;</span>
                                <span class="nt">ul</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar-nav me-auto mb-2 mb-lg-0"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;</span>
                                <span class="nt">li</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-item"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-6">&lt;</span>
                                <span class="nt">a</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"btn btn_primary"</span>
                                <span class="na"> href</span>
                                <span class="o">=</span>
                                <span class="s">"#"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-7">&lt;</span>
                                <span class="nt">i</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"fas fa-user mr-1"</span>
                                <span class="p">&gt;</span>
                                <span class="p">&lt;/</span>
                                <span class="nt">i</span>
                                <span class="p">&gt;</span> Iniciar Sesion
                                <br/>
                                <span class="p t-6">&lt;/</span>
                                <span class="nt">a</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;/</span>
                                <span class="nt">li</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;/</span>
                                <span class="nt">ul</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-3">&lt;/</span>
                                <span class="nt">div</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-2">&lt;/</span>
                                <span class="nt">div</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p">&lt;/</span>
                                <span class="nt">nav</span>
                                <span class="p">&gt;</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col">
                    <p class="fs-2">Despues de iniciarcesion</p>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-sm-12">
                    <nav class="navbar navbar-expand-lg navbar-dark bg_primary">
                        <div class="container-fluid">
                            <a class="navbar-brand text-white" href="#"><img loading="lazy" src="assets/img/favico.png" width="30px" height="30px" /> LOGO</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item mx-auto d-block">
                                        <a href="#" class="btn btn_primary">Enero -Junio</a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link active dropdown-toggle btn btn_primary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user mr-1" ></i> Linces</a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#"><button class="btn btn_outline_danger" type="button" id="btnCerrarSesion"><i class="fas fa-power-off mr-1"></i> Cerrar Sesion</button></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-sm-12">
                    <div class="highlight">
                        <pre tabindex="0" class="chroma border border-light mx-2">
                            <code class="language-html" data-lang="html">
                                <span class="p">&lt;</span>
                                <span class="nt">nav</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar navbar-expand-lg navbar-dark bg_primary"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-2">&lt;</span>
                                <span class="nt">div</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"container-fluid"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-3">&lt;</span>
                                <span class="nt">a</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar-brand text-white"</span>
                                <span class="na"> href</span>
                                <span class="o">=</span>
                                <span class="s">"#"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;</span>
                                <span class="nt">img</span>
                                <span class="na"> loading</span>
                                <span class="o">=</span>
                                <span class="s">"lazy"</span>
                                <span class="na"> src</span>
                                <span class="o">=</span>
                                <span class="s">"assets/img/favico.png"</span>
                                <span class="na"> width</span>
                                <span class="o">=</span>
                                <span class="s">"30px"</span>
                                <span class="na">height</span>
                                <span class="o">=</span>
                                <span class="s">"30px"</span>
                                <span class="p">&gt;</span> LOGO
                                <br/>
                                <span class="p t-3">&lt;/</span>
                                <span class="nt">a</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-3">&lt;</span>
                                <span class="nt">button</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar-toggler"</span>
                                <span class="na"> type</span>
                                <span class="o">=</span>
                                <span class="s">"button"</span>
                                <span class="na"> data-bs-toggle</span>
                                <span class="o">=</span>
                                <span class="s">"collapse"</span>
                                <span class="na"> data-bs-target</span>
                                <span class="o">=</span>
                                <span class="s">"#navbarSupportedContent"</span>
                                <span class="na"> aria-controls</span>
                                <span class="o">=</span>
                                <span class="s">"navbarSupportedContent"</span>
                                <span class="na"> aria-expanded</span>
                                <span class="o">=</span>
                                <span class="s">"false"</span>
                                <span class="na"> aria-label</span>
                                <span class="o">=</span>
                                <span class="s">"Toggle navigation"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;</span>
                                <span class="nt">span</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar-toggler-icon"</span>
                                <span class="p">&gt;</span>
                                <span class="p">&lt;/</span>
                                <span class="nt">span</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-3">&lt;/</span>
                                <span class="nt">button</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-3">&lt;</span>
                                <span class="nt">div</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"collapse navbar-collapse"</span>
                                <span class="na"> id</span>
                                <span class="o">=</span>
                                <span class="s">"navbarSupportedContent"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;</span>
                                <span class="nt">ul</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar-nav me-auto mb-2 mb-lg-0"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;</span>
                                <span class="nt">li</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-item"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-6">&lt;</span>
                                <span class="nt">a</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-link active"</span>
                                <span class="na"> aria-current</span>
                                <span class="o">=</span>
                                <span class="s">"page"</span>
                                <span class="na"> href</span>
                                <span class="o">=</span>
                                <span class="s">"#"</span>
                                <span class="p">&gt;</span> Inicio
                                <span class="p">&lt;/</span>
                                <span class="nt">a</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;/</span>
                                <span class="nt">li</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;/</span>
                                <span class="nt">ul</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;</span>
                                <span class="nt">ul</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar-nav me-auto mb-2 mb-lg-0"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;</span>
                                <span class="nt">li</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-item"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-6">&lt;</span>
                                <span class="nt">a</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"btn btn_primary"</span>
                                <span class="na"> href</span>
                                <span class="o">=</span>
                                <span class="s">"#"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-7">&lt;</span>
                                <span class="nt">i</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"fas fa-user mr-1"</span>
                                <span class="p">&gt;</span>
                                <span class="p">&lt;/</span>
                                <span class="nt">i</span>
                                <span class="p">&gt;</span> Iniciar Sesion
                                <br/>
                                <span class="p t-6">&lt;/</span>
                                <span class="nt">a</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;/</span>
                                <span class="nt">li</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;/</span>
                                <span class="nt">ul</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;</span>
                                <span class="nt">ul</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar-nav me-auto mb-2 mb-lg-0"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;</span>
                                <span class="nt">li</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-item mx-auto d-block"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-6">&lt;</span>
                                <span class="nt">a</span>
                                <span class="na"> href</span>
                                <span class="o">=</span>
                                <span class="s">"#"</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"btn btn_primary"</span>
                                <span class="p">&gt;</span> Enero -Junio
                                <span class="p">&lt;/</span>
                                <span class="nt">a</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;/</span>
                                <span class="nt">li</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;/</span>
                                <span class="nt">ul</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;</span>
                                <span class="nt">ul</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"navbar-nav me-auto mb-2 mb-lg-0"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;</span>
                                <span class="nt">li</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-item dropdown"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-6">&lt;</span>
                                <span class="nt">a</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"nav-link active dropdown-toggle btn btn_primary"</span>
                                <span class="na">href</span>
                                <span class="o">=</span>
                                <span class="s">"#"</span>
                                <span class="na"> id</span>
                                <span class="o">=</span>
                                <span class="s">"navbarDropdown"</span>
                                <span class="na"> role</span>
                                <span class="o">=</span>
                                <span class="s">"button"</span>
                                <span class="na"> data-bs-toggle</span>
                                <span class="o">=</span>
                                <span class="s">"dropdown"</span>
                                <span class="na"> aria-expanded</span>
                                <span class="o">=</span>
                                <span class="s">"false"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-7">&lt;</span>
                                <span class="nt">i</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"fas fa-user mr-1"</span>
                                <span class="p">&gt;</span>
                                <span class="p">&lt;/</span>
                                <span class="nt">i</span>
                                <span class="p">&gt;</span> Linces
                                <br/>
                                <span class="p t-6">&lt;/</span>
                                <span class="nt">a</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-6">&lt;</span>
                                <span class="nt">ul</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"dropdown-menu"</span>
                                <span class="na"> aria-labelledby</span>
                                <span class="o">=</span>
                                <span class="s">"navbarDropdown"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-7">&lt;</span>
                                <span class="nt">li</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-8">&lt;</span>
                                <span class="nt">a</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"dropdown-item"</span>
                                <span class="nt"> href</span>
                                <span class="o">=</span>
                                <span class="s">"#"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-9">&lt;</span>
                                <span class="nt">button</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"btn btn_outline_danger"</span>
                                <span class="na">type</span>
                                <span class="o">=</span>
                                <span class="s">"button"</span>
                                <span class="na"> id</span>
                                <span class="o">=</span>
                                <span class="s">"btnCerrarSesion"</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-10">&lt;</span>
                                <span class="nt">i</span>
                                <span class="na"> class</span>
                                <span class="o">=</span>
                                <span class="s">"fas fa-power-off mr-1"</span>
                                <span class="p">&gt;</span>
                                <span class="p">&lt;/</span>
                                <span class="nt">i</span>
                                <span class="p">&gt;</span> Cerrar Sesion
                                <br/>
                                <span class="p t-9">&lt;/</span>
                                <span class="nt">button</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-8">&lt;/</span>
                                <span class="nt">a</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-7">&lt;/</span>
                                <span class="nt">li</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-6">&lt;/</span>
                                <span class="nt">ul</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-5">&lt;/</span>
                                <span class="nt">li</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-4">&lt;/</span>
                                <span class="nt">ul</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-3">&lt;/</span>
                                <span class="nt">div</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p t-2">&lt;/</span>
                                <span class="nt">div</span>
                                <span class="p">&gt;</span>
                                <br/>
                                <span class="p">&lt;/</span>
                                <span class="nt">nav</span>
                                <span class="p">&gt;</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}
