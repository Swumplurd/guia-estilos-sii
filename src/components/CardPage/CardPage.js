import React from "react";
import "./CardPage.css";

export const CardPage = () => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row">
                <div className="col-md-10">
                    <h1 className="display-4">Cards</h1>
                    <hr></hr>
                    <p className="lead text-justify">Diseño de cards que parten de Bootstrap 4 modificadas para obtener un diseño predefinido.</p>
                </div>
                <div className="col-md-10">
                    <h2>.card-custom</h2>
                    <p className="lead text-justify">Card utilizada como principal contenedora de otras.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card card-custom text-black">
                        <div className="card-header">
                            <h1 className="card-title">Card titulo</h1>
                        </div>
                        <div className="card-body">
                            <p className="card-text lead text-justify">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-10">
                    <div>
                        <code>
                            <pre className="chroma p-3 rounded">
                                <br/>   <span className="p">&lt;</span><span className="nt">div</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;card card-custom text-black&#34;</span><span className="p">&gt;</span>
                                <br/>       <span className="p">&lt;</span><span className="nt">div</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;card-header&#34;</span><span className="p">&gt;</span>
                                <br/>           <span className="p">&lt;</span><span className="nt">h1</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;card-title&#34;</span><span className="p">&gt;</span>Card titulo<span className="p">&lt;/</span><span className="nt">h1</span><span className="p">&gt;</span>
                                <br/>       <span className="p">&lt;/</span><span className="nt">div</span><span className="p">&gt;</span>
                                <br/>       <span className="p">&lt;</span><span className="nt">div</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;card-body&#34;</span><span className="p">&gt;</span>
                                <br/>           <span className="p">&lt;</span><span className="nt">p</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;card-text lead text-justify&#34;</span><span className="p">&gt;</span>
                                <br/>               Some quick example text to build on the card title and make up the bulk of the card&#39;s content. Some quick
                                <br/>               example text to build on the card title and make up the bulk of the card&#39;s content.
                                <br/>           <span className="p">&lt;/</span><span className="nt">p</span><span className="p">&gt;</span>
                                <br/>       <span className="p">&lt;/</span><span className="nt">div</span><span className="p">&gt;</span>
                                <br/>   <span className="p">&lt;/</span><span className="nt">div</span><span className="p">&gt;</span>
                            </pre>
                        </code>
                    </div>
                </div>

                <div className="col-md-10 mb-4 mt-4">
                    <h2>.card-item</h2>
                    <p className="lead text-justify">Card secundaria utilzada para generar enlaces.</p>
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
                <div className="col-md-10 rounded">
                    <div>
                        <code>
                            <pre className="chroma p-3 rounded">
                                <br/>   <span className="p">&lt;</span><span className="nt">div</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;card text-center shadow card-item mb-3&#34;</span><span className="p">&gt;</span>
                                <br/>       <span className="p">&lt;</span><span className="nt">a</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;mt-3 text-black&#34;</span> <span className="na">href</span><span className="o">=</span><span className="s">&#34;/guia-estilos-sii/cards&#34;</span> <span className="na">title</span><span className="o">=</span><span className="s">&#34;titulo&#34;</span><span className="p">&gt;</span>
                                <br/>           <span className="p">&lt;</span><span className="nt">b</span><span className="p">&gt;</span>Titulo<span className="p">&lt;/</span><span className="nt">b</span><span className="p">&gt;</span>
                                <br/>       <span className="p">&lt;/</span><span className="nt">a</span><span className="p">&gt;</span>
                                <br/>       <span className="p">&lt;</span><span className="nt">a</span> <span className="na">href</span><span className="o">=</span><span className="s">&#34;/guia-estilos-sii/cards&#34;</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;card-body&#34;</span> <span className="na">title</span><span className="o">=</span><span className="s">&#34;titulo&#34;</span><span className="p">&gt;</span>
                                <br/>           <span className="p">&lt;</span><span className="nt">div</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;input-group&#34;</span><span className="p">&gt;</span>
                                <br/>               <span className="p">&lt;</span><span className="nt">img</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;&#34;</span> <span className="na">width</span><span className="o">=</span><span className="s">&#34;60%&#34;</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;assets/img/favico.png&#34;</span> <span className="na">alt</span><span className="o">=</span><span className="s">&#34;&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">img</span><span className="p">&gt;</span>
                                <br/>               <span className="p">&lt;</span><span className="nt">p</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;display-3 ml-1&#34;</span><span className="p">&gt;</span>M<span className="p">&lt;/</span><span className="nt">p</span><span className="p">&gt;</span>
                                <br/>           <span className="p">&lt;/</span><span className="nt">div</span><span className="p">&gt;</span>
                                <br/>       <span className="p">&lt;/</span><span className="nt">a</span><span className="p">&gt;</span>
                                <br/>   <span className="p">&lt;/</span><span className="nt">div</span><span className="p">&gt;</span>
                            </pre>                    
                        </code>
                    </div>
                </div>
            </div>
        </div>
    );
};
