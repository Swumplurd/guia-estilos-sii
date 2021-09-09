import React from "react";

export const ColorPage = () => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row">
                <div className="col">
                    <h1 className="display-4">Colores</h1>
                    <hr />

                    <p className="lead text-justify">
                        Usamos el siguiente conjunto de colores usando los
                        mismos nombres que Bootstrap para una facil
                        implementacion.
                    </p>

                    <div
                        className="row mx-1 mb-3 p-4 rounded p-xs-1"
                        style={{ backgroundColor: "#ddd" }}
                    >
                        <div className="col-md-6 col-lg-4">
                            <div className="p-3 mb-3 bg-primary text-white">
                                Primary
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="p-3 mb-3 bg-secondary text-white">
                                Secondary
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="p-3 mb-3 bg-success text-dark">
                                Success
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="p-3 mb-3 bg-danger text-white">
                                Danger
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="p-3 mb-3 bg-warning text-dark">
                                Warning
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="p-3 mb-3 bg-info text-dark">Info</div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="p-3 mb-3 bg-light text-dark">
                                Light
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="p-3 mb-3 bg-dark text-white">Dark</div>
                        </div>
                    </div>

                    <p className="lead text-justify">
                        Las clases se encuentrar en el documento<span className="badge mx-2 bg-secondary">main.css</span> y son las siguientes aplicadas a fondos de elmentos:
                    </p>
                    <div>
                        <pre className="chroma p-3 rounded">
                            <code>
                                <span className="p">.</span>
                                <span className="nc">primary</span>{" "}
                                <span className="p">{"{"}</span>
                                <br/>
                                <span className="k ps-4">background-color</span>
                                <span className="p">:</span>{" "}
                                <span className="mh">#073379</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="p">{"}"}</span>
                                <br />
                                <span className="p">.</span>
                                <span className="nc">secondary</span>{" "}
                                <span className="p">{"{"}</span>
                                <br/>
                                <span className="k ps-4">background-color</span>
                                <span className="p">:</span>{" "}
                                <span className="mh">#707070</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="p">{"}"}</span>
                                <br />
                                <span className="p">.</span>
                                <span className="nc">success</span>{" "}
                                <span className="p">{"{"}</span>
                                <br/>
                                <span className="k ps-4">background-color</span>
                                <span className="p">:</span>{" "}
                                <span className="mh">#44d120</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="p">{"}"}</span>
                                <br />
                                <span className="p">.</span>
                                <span className="nc">danger</span>{" "}
                                <span className="p">{"{"}</span>
                                <br/>
                                <span className="k ps-4">background-color</span>
                                <span className="p">:</span>{" "}
                                <span className="mh">#ca0000</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="p">{"}"}</span>
                                <br />
                                <span className="p">.</span>
                                <span className="nc">warning</span>{" "}
                                <span className="p">{"{"}</span>
                                <br/>
                                <span className="k ps-4">background-color</span>
                                <span className="p">:</span>{" "}
                                <span className="mh">#ffe26f</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="p">{"}"}</span>
                                <br />
                                <span className="p">.</span>
                                <span className="nc">info</span>{" "}
                                <span className="p">{"{"}</span>
                                <br/>
                                <span className="k ps-4">background-color</span>
                                <span className="p">:</span>{" "}
                                <span className="mh">#55b3d8</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="p">{"}"}</span>
                                <br />
                                <span className="p">.</span>
                                <span className="nc">light</span>{" "}
                                <span className="p">{"{"}</span>
                                <br/>
                                <span className="k ps-4">background-color</span>
                                <span className="p">:</span>{" "}
                                <span className="mh">#fff</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="p">{"}"}</span>
                                <br />
                                <span className="p">.</span>
                                <span className="nc">dark</span>{" "}
                                <span className="p">{"{"}</span>
                                <br/>
                                <span className="k ps-4">background-color</span>
                                <span className="p">:</span>{" "}
                                <span className="mh">#000</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="p">{"}"}</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};
