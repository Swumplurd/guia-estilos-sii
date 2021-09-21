import React from "react";

export const HomePage = () => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row">
                <div className="col">
                    <h1 className="display-4">Guía de Estilos</h1>
                    <hr/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-sm-12">
                    <p className="lead text-justify">
                        La guía de estilos sirve como referencia para organizar la información y la forma en la que esta estará disponible, para facilitar a nuestros usuarios que accedan de manera sencilla a todo el
                        contenido que solicite.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-8">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active badge text-wrap">
                                <img src="assets/img/favico.png" className="mx-auto d-block" width="56%" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="assets/img/code_blue_home.png" className="w-100 mx-auto d-block" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="assets/img/code_blue_login.png" className="w-100 mx-auto d-block" alt="..." />
                            </div>
                            <button className="carousel-control-prev btn btn-carousel" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead text-justify">Utilizando el framework y paqueterias</p>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-around mt-3 pricing">
                <div className="col-md-4 mb-3">
                    <div className="card h-100 text-center shadow card-item mb-3">
                        <a className="mt-3 text-black" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" title="Bootstrap">
                            <b>Bootstrap</b>
                        </a>
                        <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" className="card-body" title="Bootstrap">
                            <div className="input-group">
                                <img className="img-fluid" src="assets/img/B5.png" alt=""></img>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card h-100 text-center shadow card-item mb-3">
                        <a className="mt-3 text-black" href="https://datatables.net/" target="_blank" title="DataTable">
                            <b>DataTable</b>
                        </a>
                        <a href="https://datatables.net/" target="_blank" className="card-body" title="DataTable">
                            <div className="input-group">
                                <img className="img-fluid" src="assets/img/DT.png" alt=""></img>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card h-100 text-center shadow card-item mb-3">
                        <a className="mt-3 text-black" href="https://fontawesome.com/" target="_blank" title="FontAwesome">
                            <b>FontAwesome</b>
                        </a>
                        <a href="https://fontawesome.com/" target="_blank" className="card-body" title="FontAwesome">
                            <div className="input-group">
                                <img className="img-fluid" src="assets/img/FA.png" alt=""></img>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <p className="lead text-justify">Integrantes del Equipo</p>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col-sm-3">
                    <div className="input-group">
                        <img className="img-fluid" src="assets/img/ITMA_II.png" alt=""></img>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="input-group">
                        <img className="img-fluid" src="assets/img/SIS.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    );
};
