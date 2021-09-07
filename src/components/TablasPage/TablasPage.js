import React from "react";
import "./TablasPage.css";

export const TablasPage = () => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row">
                <div className="col">
                    <h1 className="display-4">Tablas</h1>
                    <hr />
                    <p className="lead">
                        Documentación y ejemplos de tablas basadas en el estilo
                        de Bootstrap 4 con colores personalizados.
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col mt-2">
                    <h2>Descripción</h2>
                    <p className="lead">
                        La clase <code>.table-head</code> controla el color de
                        la cabecera de la tabla mientras que la clase{" "}
                        <code>.table-body</code> controla el color del cuerpo de
                        la tabla.
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col mt-2">
                    <h2>Ejemplo</h2>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <table className="table table-body">
                        <thead className="table-head">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Área</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Miguel</td>
                                <td>Posada</td>
                                <td>Finanzas</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Diego</td>
                                <td>Bollas</td>
                                <td>Sistemas</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Mario</td>
                                <td>Arriaga</td>
                                <td>Recursos Humanos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div>
                        <pre className="chroma p-3 rounded">
                            <code>
                                <span className="p">&lt;</span>
                                <span className="nt">table</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;table table-body&#34;
                                </span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-4">&lt;</span>
                                <span className="nt">thead</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">&#34;table-head&#34;</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;col&#34;</span>
                                <span className="p">&gt;</span>#
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;col&#34;</span>
                                <span className="p">&gt;</span>Nombre
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;col&#34;</span>
                                <span className="p">&gt;</span>Apellido
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;col&#34;</span>
                                <span className="p">&gt;</span>Área
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;/</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-4">&lt;/</span>
                                <span className="nt">thead</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-4">&lt;</span>
                                <span className="nt">tbody</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;row&#34;</span>
                                <span className="p">&gt;</span>1
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Miguel
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Posada
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Finanzas
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;/</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;row&#34;</span>
                                <span className="p">&gt;</span>2
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Diego
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Bollas
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Sistemas
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;/</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;row&#34;</span>
                                <span className="p">&gt;</span>3
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Mario
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Arriaga
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Recursos Humanos
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;/</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-4">&lt;/</span>
                                <span className="nt">tbody</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;/</span>
                                <span className="nt">table</span>
                                <span className="p">&gt;</span>
                                <br />
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col mt-4">
                    <h1 className="display-4">Tablas con borde</h1>
                    <hr />
                    <p className="lead">
                        Se pueden agregar bordes a la tabla mediante las clases
                        para bordes de Bootstrap 4. Para más información sobre
                        los bordes consulta la{" "}
                        <a href="https://getbootstrap.com/docs/4.6/utilities/borders/">
                            documentación de Bootstrap 4.
                        </a>
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col mt-2">
                    <h2>Ejemplo</h2>
                    <p className="lead">
                        Tabla con <code>.border-secondary</code>.
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <table className="table table-body border border-secondary">
                        <thead className="table-head">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Área</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Miguel</td>
                                <td>Posada</td>
                                <td>Finanzas</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Diego</td>
                                <td>Bollas</td>
                                <td>Sistemas</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Mario</td>
                                <td>Arriaga</td>
                                <td>Recursos Humanos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div>
                        <pre className="chroma p-3 rounded">
                            <code>
                                <span className="p">&lt;</span>
                                <span className="nt">table</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">
                                    &#34;table table-body border
                                    border-secondary&#34;
                                </span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-4">&lt;</span>
                                <span className="nt">thead</span>{" "}
                                <span className="na">className</span>
                                <span className="o">=</span>
                                <span className="s">&#34;table-head&#34;</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;col&#34;</span>
                                <span className="p">&gt;</span>#
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;col&#34;</span>
                                <span className="p">&gt;</span>Nombre
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;col&#34;</span>
                                <span className="p">&gt;</span>Apellido
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;col&#34;</span>
                                <span className="p">&gt;</span>Área
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;/</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-4">&lt;/</span>
                                <span className="nt">thead</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-4">&lt;</span>
                                <span className="nt">tbody</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;row&#34;</span>
                                <span className="p">&gt;</span>1
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Miguel
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Posada
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Finanzas
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;/</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;row&#34;</span>
                                <span className="p">&gt;</span>2
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Diego
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Bollas
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Sistemas
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;/</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">th</span>{" "}
                                <span className="na">scope</span>
                                <span className="o">=</span>
                                <span className="s">&#34;row&#34;</span>
                                <span className="p">&gt;</span>3
                                <span className="p">&lt;/</span>
                                <span className="nt">th</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Mario
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Arriaga
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-6">&lt;</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>Recursos Humanos
                                <span className="p">&lt;/</span>
                                <span className="nt">td</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-5">&lt;/</span>
                                <span className="nt">tr</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p ps-4">&lt;/</span>
                                <span className="nt">tbody</span>
                                <span className="p">&gt;</span>
                                <br />
                                <span className="p">&lt;/</span>
                                <span className="nt">table</span>
                                <span className="p">&gt;</span>
                                <br />
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
