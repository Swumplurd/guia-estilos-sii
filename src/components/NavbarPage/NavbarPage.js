import React from 'react'

export const NavbarPage = () => {
    return (
        <div class="container">
        <div class="row">
            <div class="col">
                <p class="fs-2">Antes de iniciarcesion</p>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-sm-10">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="container-fluid">
                        <a class="navbar-brand text-white" href="#"><img loading="lazy" src="assets/img/favico.png" width="30px" height="30px"/> LOGO</a>
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
                                    <a class="btn btn-primary" href="#"><i class="fas fa-user mr-1"></i> Iniciar Sesion</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div class="row mt-1">
            <div class="col">
                <p class="fs-2">Despues de iniciarcesion</p>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-10">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="container-fluid">
                        <a class="navbar-brand text-white" href="#"><img loading="lazy" src="assets/img/favico.png" width="30px" height="30px"/> LOGO</a>
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
                                    <a href="#" class="btn btn-primary">Enero -Junio</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle btn btn-primary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user mr-1" ></i> Linces</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#"><button class="btn btn-outline-danger" type="button" id="btnCerrarSesion"><i class="fas fa-power-off mr-1"></i> Cerrar Sesion</button></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    )
}
