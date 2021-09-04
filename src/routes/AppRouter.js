import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { BotonPage } from "../components/BotonPage/BotonPage";
import { CardPage } from "../components/CardPage/CardPage";
import { CargaPage } from "../components/CargaPage/CargaPage";
import { ColorPage } from "../components/ColorPage/ColorPage";
import { EfectosPage } from "../components/EfectosPage/EfectosPage";
import { FormsPage } from "../components/FormsPage/FormsPage";
import { HomePage } from "../components/HomePage/HomePage";
import { NavbarPage } from "../components/NavbarPage/NavbarPage";
import { SideBar } from "../components/SideBar/SideBar";
import { TablasPage } from "../components/TablasPage/TablasPage";

export const AppRouter = () => {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 p-0">
                        <SideBar />
                    </div>
                    <div className="col-10">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <Switch>
                                        <Route exact path="/colores" component={ColorPage} />
                                        <Route exact path="/navbar" component={NavbarPage} />
                                        <Route exact path="/botones" component={BotonPage} />
                                        <Route exact path="/card" component={CardPage} />
                                        <Route exact path="/efectos" component={EfectosPage} /> {/* Fercho */}
                                        <Route exact path="/forms" component={FormsPage} /> {/* Mario */}
                                        <Route exact path="/tablas" component={TablasPage} /> {/* Charls */}
                                        <Route exact path="/carga" component={CargaPage} /> {/* Yaku */}
                                        <Route exact path="/" component={HomePage} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </Router>
    );
};
