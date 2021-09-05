import React from "react";
import "./TablasPage.css";

export const TablasPage = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-4">
                    <div className="col mt-4">
                        <h1>Tablas</h1>
                        <p className="lead">Documentación y ejemplos de tablas basadas en el estilo de Bootstrap 4 con colores personalizados.</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col mt-2">
                        <h2>Descripción</h2>
                        <p className="lead">
                            La clase <samp>&lt;table-head&gt;</samp> controla el color de la cabecera de la tabla mientras que la clase <samp>&lt;table-body&gt;</samp> controla el color del cuerpo de la tabla.
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
                        <div className="border border-light mx-2">
                            <pre className="mx-3 mt-3">
                                &lt;table class="table table-body"&gt; &lt;thead class="table-head"&gt; &lt;tr&gt; &lt;th scope="col"&gt;#&lt;/th&gt; &lt;th scope="col"&gt;Nombre&lt;/th&gt; &lt;th
                                scope="col"&gt;Apellido&lt;/th&gt; &lt;th scope="col"&gt;Área&lt;/th&gt; &lt;/tr&gt; &lt;/thead&gt; &lt;tbody&gt; &lt;tr&gt; &lt;th scope="row"&gt;1&lt;/th&gt; &lt;td&gt;Miguel&lt;/td&gt;
                                &lt;td&gt;Posada&lt;/td&gt; &lt;td&gt;Finanzas&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;th scope="row"&gt;2&lt;/th&gt; &lt;td&gt;Diego&lt;/td&gt; &lt;td&gt;Bollas&lt;/td&gt;
                                &lt;td&gt;Sistemas&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;th scope="row"&gt;3&lt;/th&gt; &lt;td&gt;Mario&lt;/td&gt; &lt;td&gt;Arriaga&lt;/td&gt; &lt;td&gt;Recursos Humanos&lt;/td&gt;
                                &lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt;
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col mt-4">
                        <h1>Tablas con borde</h1>
                        <p className="lead">
                            Se pueden agregar bordes a la tabla mediante las clases para bordes de Bootstrap 4. Para más información sobre los bordes consulta la{" "}
                            <a href="https://getbootstrap.com/docs/4.6/utilities/borders/">documentación de Bootstrap 4.</a>
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col mt-2">
                        <h2>Ejemplo</h2>
                        <p className="lead">
                            Tabla con <samp>&lt;border-light&gt;</samp>.
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <table className="table table-body border border-light">
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
                        <div className="border border-light mx-2">
                            <pre className="mx-3 mt-3">
                                &lt;table class="table table-body border border-light"&gt; &lt;thead class="table-head"&gt; &lt;tr&gt; &lt;th scope="col"&gt;#&lt;/th&gt; &lt;th scope="col"&gt;Nombre&lt;/th&gt; &lt;th
                                scope="col"&gt;Apellido&lt;/th&gt; &lt;th scope="col"&gt;Área&lt;/th&gt; &lt;/tr&gt; &lt;/thead&gt; &lt;tbody&gt; &lt;tr&gt; &lt;th scope="row"&gt;1&lt;/th&gt; &lt;td&gt;Miguel&lt;/td&gt;
                                &lt;td&gt;Posada&lt;/td&gt; &lt;td&gt;Finanzas&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;th scope="row"&gt;2&lt;/th&gt; &lt;td&gt;Diego&lt;/td&gt; &lt;td&gt;Bollas&lt;/td&gt;
                                &lt;td&gt;Sistemas&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;th scope="row"&gt;3&lt;/th&gt; &lt;td&gt;Mario&lt;/td&gt; &lt;td&gt;Arriaga&lt;/td&gt; &lt;td&gt;Recursos Humanos&lt;/td&gt;
                                &lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt;
                            </pre>
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
        </>
    );
};
