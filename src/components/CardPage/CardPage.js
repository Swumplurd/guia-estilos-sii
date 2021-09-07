import React from "react";
import "./CardPage.css";

export const CardPage = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-10">
                    <h1 className="display-4">Cards</h1>
                    <hr></hr>
                    <p className="lead">Diseño de cards que parten de Bootstrap 4 modificadas para obtener un diseño predefinido.</p>
                </div>

                <div className="col-md-5 mb-4">
                    <h2>.card-custom</h2>
                    <p className="lead">Card utilizada como principal contenedora de otras.</p>
                    <div className="card card-custom text-black">
                        <div className="card-header">
                            <h1 className="card-title">Card titulo</h1>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-10">
                    <h2>Codigo</h2>
                </div>
                <div className="col-md-10 rounded border">
                    <pre className="py-2">
                        <code>
                            &lt;div class="card card-custom text-black"&gt; &lt;div class="card-header"&gt; &lt;h1 class="card-title"&gt;Card titulo&lt;/h1&gt; &lt;/div&gt; &lt;div class="card-body"&gt; &lt;p
                            class="card-text"&gt;Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of
                            the card's content.&lt;/p&gt; &lt;/div&gt; &lt;/div&gt;
                        </code>
                    </pre>
                </div>

                <div className="col-md-10 mb-4 mt-4">
                    <h2>.card-item</h2>
                    <p className="lead">Card secundaria utilzada para generar enlaces.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center shadow card-item mb-3">
                                <a className="mt-3 text-black" href="/guia-estilos-sii/cards" title="titulo">
                                    <b>Titulo</b>
                                </a>
                                <a href="/guia-estilos-sii/cards" className="card-body" title="titulo">
                                    <div className="input-group">
                                        <img className="" width="60%" src="assets/img/favico.png" alt=""></img>
                                        <p className="display-3 ml-1">M</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center shadow card-item mb-3">
                                <a className="mt-3 text-black" href="/guia-estilos-sii/cards" title="titulo">
                                    <b>Titulo</b>
                                </a>
                                <a href="/guia-estilos-sii/cards" className="card-body" title="titulo">
                                    <div className="input-group">
                                        <img className="" width="60%" src="assets/img/favico.png" alt=""></img>
                                        <p className="display-3 ml-1">M</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center shadow card-item mb-3">
                                <a className="mt-3 text-black" href="/guia-estilos-sii/cards" title="titulo">
                                    <b>Titulo</b>
                                </a>
                                <a href="/guia-estilos-sii/cards" className="card-body" title="titulo">
                                    <div className="input-group">
                                        <img className="" width="60%" src="assets/img/favico.png" alt=""></img>
                                        <p className="display-3 ml-1">M</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-10">
                    <h2>Codigo</h2>
                </div>
                <div className="col-md-10 rounded border">
                    <pre className="py-2">
                        <code>
                            &lt;div class="card text-center shadow card-item mb-3"&gt; &lt;a class="mt-3 text-black" href="/card" title="titulo"&gt;&lt;b&gt;Titulo&lt;/b&gt;&lt;/a&gt; &lt;a href="/card" class="card-body"
                            title="titulo"&gt; &lt;div class="input-group"&gt; &lt;img class="" width="60%" src="assets/img/favico.png" alt=""&gt;&lt;/img&gt; &lt;p class="display-3 ml-1"&gt;M&lt;/p&gt; &lt;/div&gt;
                            &lt;/a&gt; &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
};
