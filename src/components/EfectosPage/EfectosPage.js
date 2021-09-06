import React from "react";
import "./EfectosPage.css";

export const EfectosPage = () => {
    return (
        <>
            <div className="highlight">
                <pre tabIndex="0" className="chroma p-3 rounded mx-2">
                    <code className="language-css" data-lang="css">
                        <span className="p">.</span>
                        <span className="nc">pricing</span> <span className="p">.</span>
                        <span className="nc">card</span>
                        <span className="p">:</span>
                        <span className="nd">hover</span> <span className="p">{"{"}</span>
                        <br />
                        <span className="k t-2">margin-top</span>
                        <span className="p">:</span> <span className="mf">-.25</span>
                        <span className="kt">rem</span>
                        <span className="p">;</span>
                        <br />
                        <span className="k t-2">margin-bottom</span>
                        <span className="p">:</span> <span className="mf">.25</span>
                        <span className="kt">rem</span>
                        <span className="p">;</span>
                        <br />
                        <span className="k t-2">box-shadow</span>
                        <span className="p">:</span> <span className="mi">0</span> <span className="mf">0.5</span>
                        <span className="kt">rem</span> <span className="mi">1</span>
                        <span className="kt">rem</span> <span className="mi">0</span> <span className="nb">rgba</span>
                        <span className="p">(</span>
                        <span className="mi">3</span>
                        <span className="p">,</span> <span className="mi">101</span>
                        <span className="p">,</span> <span className="mi">167</span>
                        <span className="p">,</span> <span className="mf">0.4</span>
                        <span className="p">);</span>
                        <br />
                        <span className="p">{"}"}</span>
                        <br />
                    </code>
                </pre>

                <div className="pricing">
                    <div className="card cards my-3 text-dark ms-2" style={{ width: "18rem" }}>
                        <img src="https://dummyimage.com/180x120/dbdbdb/787878.png&text=Image+cap" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/guia-estilos-sii/efectos" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>

                <pre tabIndex="0" className="chroma p-3 rounded mx-2">
                    <code className="language-css" data-lang="css">
                        <span className="p">.</span>
                        <span className="nc">shadow</span> <span className="p">{"{"}</span>
                        <br />
                        <span className="k t-2">box-shadow</span>
                        <span className="p">:</span> <span className="mi">-3</span>
                        <span className="kt">px</span> <span className="mi">3</span>
                        <span className="kt">px</span> <span className="mi">5</span>
                        <span className="kt">px</span> <span className="nb">rgb</span>
                        <span className="p">(</span>
                        <span className="mi">153</span>
                        <span className="p">,</span> <span className="mi">153</span>
                        <span className="p">,</span> <span className="mi">153</span>
                        <span className="p">,</span> <span className="mf">0.7</span>
                        <span className="p">);</span>
                        <br />
                        <span className="p">{"}"}</span>
                        <br />
                    </code>
                </pre>

                <button type="button" className="mb-4 ms-2 btn shadows btn-primary">
                    Button
                </button>

                <pre tabIndex="0" className="chroma p-3 rounded mx-2">
                    <code className="language-css" data-lang="css">
                        <span className="p">.</span>
                        <span className="nc">contenerdor-btn</span>
                        <span className="p">:</span>
                        <span className="nd">hover</span> <span className="p">.</span>
                        <span className="nc">boton-emergente</span> <span className="p">{"{"}</span>
                        <br />
                        <span className="k t-2">transform</span>
                        <span className="p">:</span> <span className="nb">translateY</span>
                        <span className="p">(</span>
                        <span className="mi">-85</span>
                        <span className="kt">%</span>
                        <span className="p">);</span>
                        <br />
                        <span className="k t-2">visibility</span>
                        <span className="p">:</span> <span className="kc">visible</span>
                        <span className="p">;</span>
                        <br />
                        <span className="k t-2">opacity</span>
                        <span className="p">:</span> <span className="mi">100</span>
                        <span className="p">;</span>
                        <br />
                        <span className="p">{"}"}</span> <br />
                    </code>
                </pre>
            </div>
            
            <div className="contenedor-btn">
                <img src="assets/img/favico.png" className="img-fluid rounded border border-dark rounded" alt="..."/>
                <div className="boton-emergente mx-auto d-block">
                    <button href="/guia-estilos-sii/efectos" className="btn btn-primary" title="descargar download">
                        <i className="bi bi-box-arrow-in-down"></i>
                    </button>
                </div>
            </div>
            ?
        </>
    );
};
