import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { BotonPage } from "../components/BotonPage/BotonPage";
import { ColorPage } from "../components/ColorPage/ColorPage";
import { HomePage } from "../components/HomePage/HomePage";
import { NavbarPage } from "../components/NavbarPage/NavbarPage";
import { SideBar } from "../components/SideBar/SideBar";

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
