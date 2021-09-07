import React from "react";
import "./BotonPage.css";

export const BotonPage = () => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row">
                <div className="col">
                    <h1 className="display-4">Botones</h1>
                    <hr />
                    <p className="lead">
                        Usa un diseño de botones basado en el estilo Bootstrap 4
                        con una paleta de colores personalizada y su propio
                        efecto hover.
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col mt-2">
                    <h2>Ejemplos</h2>
                    <p className="lead">
                        Incluye varios botones predefinidos para su uso en
                        diferentes espacios, dependiendo su propósito.
                    </p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <button type="button" className="btn btn-primary">
                        Primary
                    </button>
                    <button type="button" className="btn btn-secondary">
                        Secondary
                    </button>
                    <button type="button" className="btn btn-success">
                        Success
                    </button>
                    <button type="button" className="btn btn-danger">
                        Danger
                    </button>
                    <button type="button" className="btn btn-warning">
                        Warning
                    </button>
                    <button type="button" className="btn btn-info">
                        Info
                    </button>
                    <button type="button" className="btn btn-light">
                        Light
                    </button>
                    <button type="button" className="btn btn-dark">
                        Dark
                    </button>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div>
                        <pre className="chroma p-3 rounded">
                            <code>
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-primary&#34;
                                </span>
                                <span className="p">&gt;</span>Primary
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-secondary&#34;
                                </span>
                                <span className="p">&gt;</span>Secondary
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-success&#34;
                                </span>
                                <span className="p">&gt;</span>Success
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-danger&#34;
                                </span>
                                <span className="p">&gt;</span>Danger
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-warning&#34;
                                </span>
                                <span className="p">&gt;</span>Warning
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-info&#34;
                                </span>
                                <span className="p">&gt;</span>Info
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-light&#34;
                                </span>
                                <span className="p">&gt;</span>Light
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-dark&#34;
                                </span>
                                <span className="p">&gt;</span>Dark
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col mt-4">
                    <h1 className="display-4">Botones Outline</h1>
                    <hr />
                    <p className="lead">
                        Usa un diseño de botones outline con fondo transparente
                        basado en el estilo Bootstrap 4 con una paleta de
                        colores personalizada y su propio efecto hover.
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col mt-2">
                    <h2>Ejemplos</h2>
                    <p className="lead">
                        Incluye varios botones outline para su uso en diferentes
                        espacios, dependiendo su propósito.
                    </p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <button type="button" className="btn btn-outline-primary">
                        Primary
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Secondary
                    </button>
                    <button type="button" className="btn btn-outline-success">
                        Success
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                        Danger
                    </button>
                    <button type="button" className="btn btn-outline-warning">
                        Warning
                    </button>
                    <button type="button" className="btn btn-outline-info">
                        Info
                    </button>
                    <button type="button" className="btn btn-outline-light">
                        Light
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                        Dark
                    </button>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div>
                        <pre className="chroma p-3 rounded">
                            <code>
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-outline-primary&#34;
                                </span>
                                <span className="p">&gt;</span>Primary
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-outline-secondary&#34;
                                </span>
                                <span className="p">&gt;</span>Secondary
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-outline-success&#34;
                                </span>
                                <span className="p">&gt;</span>Success
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-outline-danger&#34;
                                </span>
                                <span className="p">&gt;</span>Danger
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-outline-warning&#34;
                                </span>
                                <span className="p">&gt;</span>Warning
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-outline-info&#34;
                                </span>
                                <span className="p">&gt;</span>Info
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-outline-light&#34;
                                </span>
                                <span className="p">&gt;</span>Light
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;</span>
                                <span className="nt">button</span>{" "}
                                <span className="na">type</span>
                                <span className="o">=</span>
                                <span className="s">&#34;button&#34;</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;btn btn-outline-dark&#34;
                                </span>
                                <span className="p">&gt;</span>Dark
                                <span className="p">&lt;/</span>
                                <span className="nt">button</span>
                                <span className="p">&gt;</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                <div className="col mb-4">
                    <h2>Modificar colores</h2>
                    <p className="lead">
                        Se pueden cambiar estos colores modificando sus
                        respectivas clases mediante el archivo{" "}
                        <i>
                            <b>main.css</b>
                        </i>{" "}
                        en la carpeta{" "}
                        <i>
                            <b>public/css.</b>
                        </i>
                    </p>
                </div>
            </div>
        </div>
    );
};
