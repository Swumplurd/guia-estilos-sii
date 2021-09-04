import React from "react";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{minHeight: "100vh", maxWidth: 280}}>
                <NavLink exact to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                    <span className="fs-4">Guia De Estilos</span>
                </NavLink>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active" className="nav-link">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/colores" classNameActive="active" className="nav-link">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Colores
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/navbar" classNameActive="active" className="nav-link">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Navbar
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/botones" classNameActive="active" className="nav-link">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Botones
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/card" classNameActive="active" className="nav-link">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Card
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/efectos" classNameActive="active" className="nav-link">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Efectos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/forms" classNameActive="active" className="nav-link">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Forms
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/tablas" classNameActive="active" className="nav-link">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Tablas
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/carga" classNameActive="active" className="nav-link">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Mascara de Carga
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};
