import React from "react";

export const HomePage = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <p className="fs-1 text-center">Guía de Estilos</p>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col-sm-8">
                    <p className="fs-5">
                        La guía de estilos sirve como referencia para organizar la información y la forma en la que esta estará disponible, para facilitar a nuestros usuarios que accedan de manera sencilla a todo el
                        contenido que solicite.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-7">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="assets/img/favico.png" className="d-block" width="56%" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="assets/img/Captura_01.png" className="d-block" width="100%" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="assets/img/Captura_02.png" className="d-block" width="100%" alt="..." />
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
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
            <div className="row justify-content-center mt-2">
                <div className="col-sm-7">
                    <p className="fs-2 text-center">Utilizando el framework y paqueterias</p>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-sm-3">
                    <div className="card text-center shadow card-item mb-3">
                        <a className="mt-3 text-black" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" title="titulo">
                            <b>Bootstrap</b>
                        </a>
                        <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="card-body" title="titulo">
                            <div className="input-group">
                                <img className="" width="100%" src="assets/img/B5.png" alt=""></img>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card text-center shadow card-item mb-3">
                        <a className="mt-3 text-black" href="https://datatables.net/" title="titulo">
                            <b>DataTable</b>
                        </a>
                        <a href="https://datatables.net/" className="card-body" title="titulo">
                            <div className="input-group">
                                <img className="" width="80%" src="assets/img/DT.png" alt=""></img>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card text-center shadow card-item mb-3">
                        <a className="mt-3 text-black" href="https://fontawesome.com/" title="titulo">
                            <b>FontAwesome</b>
                        </a>
                        <a href="https://fontawesome.com/" className="card-body" title="titulo">
                            <div className="input-group">
                                <img className="" width="80%" src="assets/img/FA.png" alt=""></img>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col-sm-3">
                    <p className="fs-2 text-center">Equipo oficial</p>
                    <p className="fs-4 mt-4 text-center">ITMA II</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-3">
                    <div className="input-group">
                        <img className="" width="90%" src="assets/img/ITMA_II.png" alt=""></img>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="input-group">
                        <img className="" width="90%" src="assets/img/SIS.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    );
};
