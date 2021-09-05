import React from "react";
import "./BotonPage.css";

export const BotonPage = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col mt-4">
                    <h1>Botones</h1>
                    <p className="lead">Usa un diseño de botones basado en el estilo Bootstrap 4 con una paleta de colores personalizada y su propio efecto hover.</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col mt-2">
                    <h2>Ejemplos</h2>
                    <p className="lead">Incluye varios botones predefinidos para su uso en diferentes espacios, dependiendo su propósito.</p>
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
                    <div className="border border-light mx-2">
                        <pre className="mx-3 mt-3">&lt;button type="button" class="btn btn-primary"&gt;Primary&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-secondary"&gt;Secondary&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-success"&gt;Success&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-danger"&gt;Danger&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-warning"&gt;Warning&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-info"&gt;Info&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-light"&gt;Light&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-dark"&gt;Dark&lt;/button&gt;</pre>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col mt-4">
                    <h1>Botones Outline</h1>
                    <p className="lead">Usa un diseño de botones outline con fondo transparente basado en el estilo Bootstrap 4 con una paleta de colores personalizada y su propio efecto hover.</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col mt-2">
                    <h2>Ejemplos</h2>
                    <p className="lead">Incluye varios botones outline para su uso en diferentes espacios, dependiendo su propósito.</p>
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
                    <div className="border border-light mx-2">
                        <pre className="mx-3 mt-3">&lt;button type="button" class="btn btn-outline-primary"&gt;Primary&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-outline-secondary"&gt;Secondary&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-outline-success"&gt;Success&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-outline-danger"&gt;Danger&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-outline-warning"&gt;Warning&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-outline-info"&gt;Info&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-outline-light"&gt;Light&lt;/button&gt;</pre>
                        <pre className="mx-3">&lt;button type="button" class="btn btn-outline-dark"&gt;Dark&lt;/button&gt;</pre>
                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                <div className="col mb-4">
                    <h2>Modificar colores</h2>
                    <p className="lead">
                        Se pueden cambiar estos colores modificando sus respectivas clases mediante el archivo{" "}
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
