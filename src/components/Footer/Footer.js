import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div class="card border-0 rounded-0 footer text-white">
            <div class="card-body">
                <div class="container-fluid">
                    <div className="row justify-content-around">
                        <div className="col-md-8 text-center">
                            <h4>Instituto Tecnológico de Milpa Alta II</h4>
                            <hr/>
                            <div className="input-group justify-content-center mb-2">
                                <a href="https://www.facebook.com/tecmilpaalta2" class="redes" target="_blank" title="Facebook"><i class="fab fa-facebook fa-2x mx-2"></i></a>
                                <a href="https://twitter.com/TecNMMilpaAlta2" class="redes" target="_blank" title="Twiter"><i class="fab fa-twitter fa-2x mx-2"></i></a>
                                <a href="https://www.youtube.com/channel/UCXJVuz9lnFc03mObS-0wYOg" class="redes" target="_blank" title="YouTube"><i class="fab fa-youtube fa-2x mx-2"></i></a>
                                <a href="https://github.com/itma2" class="redes" target="_blank" title="Github"><i class="fab fa-github fa-2x mx-2"></i></a>
                                <a href="about" class="redes" title="Colaboradores"><i class="fas fa-chalkboard-teacher fa-2x mx-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div className="col-md-2 align-self-center">
                            <img src="assets/img/favico.png" class="img-fluid"/>
                        </div>
                        <div className="col-md-3 align-self-center text-justify linea">
                            <h4>Supervisores</h4>
                            <hr/>
                            <div className="mx-auto d-block">
                                <p>Ing. Omar Jesús Peréz Ramos</p>
                                <p>Ing. Enrique Calderas Martínez</p>
                                <p>Ing. Roldan Aquino Segura</p>
                            </div>
                        </div>
            
                        <div class="col-md-5 align-self-center">
                            <h4 className="text-center">Colaboradores</h4>
                            <hr/>
                            <div className="input-group justify-content-justify mb-2">
                                <div className="mx-auto d-block">
                                    <p>Ing. Diego Alberto Bollas Paredes</p>                           
                                    <p>Ing. Fernando Said Vasquez Tello</p>                           
                                    <p>Ing. Carlos Eduardo Ayala Galarza</p>
                                </div>
                                <div className="mx-auto d-block">
                                    <p>Ing. Jiménez Montes Guillermo</p>                           
                                    <p>Ing. Mario Arriaga Colin</p>
                                    <p>Ing. Miguel Angel Posada Ibañez</p>  
                                </div>                               
                            </div>                                                     
                        </div>
                        <div class="col-md-2 align-self-center">
                            <img src="assets/img/ITMA_II.png" class="mx-auto d-block" width="80%"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-center">
                <p class="copyright"><i class="far fa-copyright"></i>  Copyright 2021 Code Blue - Todos los Derechos Reservados</p>
            </div>
        </div>
    
    );
};