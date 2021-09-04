import React from 'react'

export const HomePage = () => {
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-4">
                    <p class="fs-1 text-center">Guía de Estilos</p>
                </div>
            </div>
            <div class="row justify-content-center mt-2">
                <div class="col-sm-8">
                <p class="fs-5">La guía de estilos sirve como referencia para organizar la información y la forma en la que esta estará disponible, para facilitar a nuestros usuarios que accedan de manera sencilla a todo el contenido que solicite.</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-7">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="assets/img/favico.png" class="d-block" width="56%" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="assets/img/Captura_01.png" class="d-block" width="100%" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="assets/img/Captura_02.png" class="d-block" width="100%" alt="..."/>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-2">
                <div class="col-sm-7">
                    <p class="fs-2 text-center">Utilizando el framework y paqueterias</p>
                </div>
            </div>
            <div class="row justify-content-center mt-3">
                <div class="col-sm-3">
                    <div class="card text-center shadow card-item mb-3">
                        <a class="mt-3 text-black" href="#" title="titulo"><b>Bootstrap</b></a>
                        <a href="#" class="card-body" title="titulo"> 
                            <div class="input-group">
                                <img class="" width="100%" src="assets/img/B5.png" alt=""></img>
                            </div>
                        </a> 
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card text-center shadow card-item mb-3">
                        <a class="mt-3 text-black" href="#" title="titulo"><b>DataTable</b></a>
                        <a href="#" class="card-body" title="titulo"> 
                            <div class="input-group">
                                <img class="" width="80%" src="assets/img/DT.png" alt=""></img>
                            </div>
                        </a> 
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card text-center shadow card-item mb-3">
                        <a class="mt-3 text-black" href="#" title="titulo"><b>FontAwesome</b></a>
                        <a href="#" class="card-body" title="titulo"> 
                            <div class="input-group">
                                <img class="" width="80%" src="assets/img/FA.png" alt=""></img>
                            </div>
                        </a> 
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-2">
                <div class="col-sm-3">
                    <p class="fs-2 text-center">Equipo oficial</p>
                    <p class="fs-4 mt-4 text-center">ITMA II</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-3">
                    <div class="input-group">
                        <img class="" width="90%" src="assets/img/ITMA_II.png" alt=""></img>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="input-group">
                        <img class="" width="90%" src="assets/img/SIS.png" alt=""></img>
                    </div> 
                </div>
            </div>
        </div>
    )
}
