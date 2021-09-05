import React from "react";
import "./ColorPage.css";

export const ColorPage = () => {
    return (
        <div className="container mt-3">
            <h1>Tema de colores</h1>
            <p>
                Usamos el siguiente conjunto de colores usando los mismos nombres que Bootstrap para una facil implementacion.
            </p>

            <div className="row p-4 rounded p-5" style={{ backgroundColor: "#dddddd" }}>
                <div className="col-md-4">
                    <div className="p-3 mb-3 primary text-white">Primary</div>
                </div>

                <div className="col-md-4">
                    <div className="p-3 mb-3 secondary text-white">Secondary</div>
                </div>

                <div className="col-md-4">
                    <div className="p-3 mb-3 success text-dark">Success</div>
                </div>

                <div className="col-md-4">
                    <div className="p-3 mb-3 danger text-white">Danger</div>
                </div>

                <div className="col-md-4">
                    <div className="p-3 mb-3 warning text-dark">Warning</div>
                </div>

                <div className="col-md-4">
                    <div className="p-3 mb-3 info text-dark">Info</div>
                </div>

                <div className="col-md-4">
                    <div className="p-3 mb-3 light text-dark">Light</div>
                </div>

                <div className="col-md-4">
                    <div className="p-3 mb-3 dark text-white">Dark</div>
                </div>
            </div>
        </div>
    );
};
