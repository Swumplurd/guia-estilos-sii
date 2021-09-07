import React from "react";
import "./EfectosPage.css";

export const EfectosPage = () => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row">
                <div className="col">
                    <h1 className="display-4">Efectos</h1>
                    <hr />
                    <div>
                        <p className="lead text-justify">Efecto de pricing</p>
                        <pre className="chroma p-3 rounded mx-2">
                            <code>
                                <span className="p">.</span>
                                <span className="nc">pricing</span>{" "}
                                <span className="p">.</span>
                                <span className="nc">card</span>
                                <span className="p">:</span>
                                <span className="nd">hover</span>{" "}
                                <span className="p">{"{"}</span>
                                <br />
                                <span className="k t-2">margin-top</span>
                                <span className="p">:</span>{" "}
                                <span className="mf">-.25</span>
                                <span className="kt">rem</span>
                                <span className="p">;</span>
                                <br />
                                <span className="k t-2">margin-bottom</span>
                                <span className="p">:</span>{" "}
                                <span className="mf">.25</span>
                                <span className="kt">rem</span>
                                <span className="p">;</span>
                                <br />
                                <span className="k t-2">box-shadow</span>
                                <span className="p">:</span>{" "}
                                <span className="mi">0</span>{" "}
                                <span className="mf">0.5</span>
                                <span className="kt">rem</span>{" "}
                                <span className="mi">1</span>
                                <span className="kt">rem</span>{" "}
                                <span className="mi">0</span>{" "}
                                <span className="nb">rgba</span>
                                <span className="p">(</span>
                                <span className="mi">3</span>
                                <span className="p">,</span>{" "}
                                <span className="mi">101</span>
                                <span className="p">,</span>{" "}
                                <span className="mi">167</span>
                                <span className="p">,</span>{" "}
                                <span className="mf">0.4</span>
                                <span className="p">);</span>
                                <br />
                                <span className="p">{"}"}</span>
                                <br />
                            </code>
                        </pre>

                        <pre className="chroma p-3 rounded mx-2">
                            <code>
                                <span className="p">&lt;</span>
                                <span className="nt">div</span>{" "}
                                <span className="na">class</span>
                                <span className="o">=</span>
                                <span className="s">&#34;pricing&#34;</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-2">&lt;</span>
                                <span className="nt">div</span>{" "}
                                <span className="na">class</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;card my-3 text-dark ms-2&#34;
                                </span>{" "}
                                <span className="na">style</span>
                                <span className="o">=</span>
                                <span className="s">{"{{"}</span>{" "}
                                <span className="na">width:</span>{" "}
                                <span className="err">&#34;</span>
                                <span className="na">18rem</span>
                                <span className="err">&#34;</span>{" "}
                                <span className="err">{"}}"}</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;</span>
                                <span className="nt">h5</span>{" "}
                                <span className="na">class</span>
                                <span className="o">=</span>
                                <span className="s">&#34;card-title&#34;</span>
                                <span className="p">&gt;</span>Card title
                                <span className="p">&lt;/</span>
                                <span className="nt">h5</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;</span>
                                <span className="nt">p</span>{" "}
                                <span className="na">class</span>
                                <span className="o">=</span>
                                <span className="s">&#34;card-text&#34;</span>
                                <span className="p">&gt;</span>Some quick example
                                text to build on the card title and make up the
                                bulk of the card&#39;s content.
                                <span className="p">&lt;/</span>
                                <span className="nt">p</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-3">&lt;</span>
                                <span className="nt">img</span>{" "}
                                <span className="na">src</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;https://dummyimage.com/180x120/dbdbdb/787878.png&amp;text=Image+cap&#34;
                                </span>{" "}
                                <span className="na">class</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;card-img-top&#34;
                                </span>{" "}
                                <span className="na">alt</span>
                                <span className="o">=</span>
                                <span className="s">&#34;...&#34;</span>{" "}
                                <span className="p">/&gt;</span>
                                <br />
                                <span className="p t-3">&lt;</span>
                                <span className="nt">div</span>{" "}
                                <span className="na">class</span>
                                <span className="o">=</span>
                                <span className="s">&#34;card-body&#34;</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p t-4">&lt;</span>
                                <span className="nt">a</span>{" "}
                                <span className="na">href</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;/guia-estilos-sii/efectos&#34;
                                </span>{" "}
                                <span className="na">class</span>
                                <span className="o">=</span>
                                <span className="s">&#34;btn btn-primary&#34;</span>
                                <span className="p">&gt;</span>
                                Go somewhere
                                <span className="p">&lt;/</span>
                                <span className="nt">a</span>
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
                                <span className="nt">div</span>
                                <span className="p">&gt;</span>
                            </code>
                        </pre>

                        <div className="pricing">
                            <div
                                className="card cards my-3 text-dark ms-2"
                                style={{ width: "18rem" }}
                            >
                                <img
                                    src="https://dummyimage.com/180x120/dbdbdb/787878.png&text=Image+cap"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <a
                                        href="/guia-estilos-sii/efectos"
                                        className="btn btn-primary"
                                    >
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>


                        <p className="lead text-justify">Efecto de Shadow</p>
                        <pre className="chroma p-3 rounded mx-2">
                            <code className="language-css" data-lang="css">
                                <span className="p">.</span>
                                <span className="nc">shadow</span>{" "}
                                <span className="p">{"{"}</span>
                                <br />
                                <span className="k t-2">box-shadow</span>
                                <span className="p">:</span>{" "}
                                <span className="mi">-3</span>
                                <span className="kt">px</span>{" "}
                                <span className="mi">3</span>
                                <span className="kt">px</span>{" "}
                                <span className="mi">5</span>
                                <span className="kt">px</span>{" "}
                                <span className="nb">rgb</span>
                                <span className="p">(</span>
                                <span className="mi">153</span>
                                <span className="p">,</span>{" "}
                                <span className="mi">153</span>
                                <span className="p">,</span>{" "}
                                <span className="mi">153</span>
                                <span className="p">,</span>{" "}
                                <span className="mf">0.7</span>
                                <span className="p">);</span>
                                <br />
                                <span className="p">{"}"}</span>
                                <br />
                            </code>
                        </pre>

                        <pre className="chroma p-3 rounded mx-2">
                            <span className="p">&lt;</span>
                            <span className="nt">button</span>{" "}
                            <span className="na">type</span>
                            <span className="o">=</span>
                            <span className="s">&#34;button&#34;</span>{" "}
                            <span className="na">class</span>
                            <span className="o">=</span>
                            <span className="s">
                                &#34;mb-4 ms-2 btn shadow btn-primary&#34;
                            </span>
                            <span className="p">&gt;</span>
                            Button
                            <span className="p">&lt;/</span>
                            <span className="nt">button</span>
                            <span className="p">&gt;</span>
                        </pre>

                        <button
                            type="button"
                            className="mb-4 ms-2 btn shadows btn-primary"
                        >
                            Button
                        </button>

                        <p className="lead text-justify">Efecto de Boton Emergente</p>
                        <pre className="chroma p-3 rounded mx-2">
                            <code>
                                <span className="p">.</span>
                                <span className="nc">contenerdor-btn</span>
                                <span className="p">{"{"}</span>
                                <br/>
                                <span className="k t-2">position</span>
                                <span className="p">:</span>{" "}
                                <span className="kc">relative</span>
                                <span className="p">;</span>
                                <span className="k">overflow</span>
                                <span className="p">:</span>{" "}
                                <span className="kc">hidden</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="p">{"}"}</span>
                                <br/>
                                <span className="p">.</span>
                                <span className="nc">boton-emergente</span>
                                <span className="p">{"{"}</span>
                                <br/>
                                <span className="k t-2">visibility</span>
                                <span className="p">:</span>{" "}
                                <span className="kc">hidden</span>
                                <span className="p">;</span>\
                                <br/>
                                <span className="k t-2">opacity</span>
                                <span className="p">:</span>{" "}
                                <span className="mi">0</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="k t-2">position</span>
                                <span className="p">:</span>{" "}
                                <span className="kc">absolute</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="k t-2">bottom</span>
                                <span className="p">:</span>{" "}
                                <span className="mi">0</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="k t-2">padding</span>
                                <span className="p">:</span>{" "}
                                <span className="mi">7</span>
                                <span className="kt">px</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="k t-2">transform</span>
                                <span className="p">:</span>{" "}
                                <span className="nb">translateY</span>
                                <span className="p">(</span>
                                <span className="mi">-50</span>
                                <span className="kt">%</span>
                                <span className="p">);</span>
                                <br/>
                                <span className="k t-2">transition</span>
                                <span className="p">:</span>{" "}
                                <span className="kc">all</span>{" "}
                                <span className="mf">0.5</span>
                                <span className="kt">s</span>{" "}
                                <span className="kc">ease</span>
                                <span className="o">-</span>
                                <span className="n">out</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="p">{"}"}</span>
                                <br/>
                                <span className="p">.</span>
                                <span className="nc">contenerdor-btn</span>
                                <span className="p">:</span>
                                <span className="nd">hover</span>{" "}
                                <span className="p">.</span>
                                <span className="nc">boton-emergente</span>
                                <span className="p">{"{"}</span>
                                <br/>
                                <span className="k t-2">transform</span>
                                <span className="p">:</span>{" "}
                                <span className="nb">translateY</span>
                                <span className="p">(</span>
                                <span className="mi">-85</span>
                                <span className="kt">%</span>
                                <span className="p">);</span>
                                <br/>
                                <span className="k t-2">visibility</span>
                                <span className="p">:</span>{" "}
                                <span className="kc">visible</span>
                                <span className="p">;</span>
                                <span className="k">opacity</span>
                                <span className="p">:</span>{" "}
                                <span className="mi">100</span>
                                <span className="p">;</span>
                                <br/>
                                <span className="p">{"}"}</span>
                            </code>
                        </pre>

                        <div className="contenerdor-btn">
                            <img src="assets/img/favico.png" className="img-fluid rounded border border-dark rounded" width="20%" alt="..."/>
                            <div className="boton-emergente mx-auto d-block">
                                <button href="/guia-estilos-sii/efectos" className="btn btn-primary" title="descargar" download>
                                    <i className="bi bi-box-arrow-in-down"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
