import React from 'react'
import './CardPage.css'

export const CardPage = () => {
    return (
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-10">
                    <h1 class="display-4">Cards</h1>
                    <hr></hr>
                    <p class="lead">Diseño de cards que parten de Bootstrap 4 modificadas para obtener un diseño predefinido.</p>
                </div>
                
                <div class="col-md-5 mb-4">
                    <h2>.card-custom</h2>
                    <p class="lead">Card utilizada como principal contenedora de otras.</p>
                    <div class="card card-custom text-black">
                        <div class="card-header">
                            <h1 class="card-title">Card titulo</h1>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-10">
                    <h2>Codigo</h2>
                </div>
                <div class="col-md-10 rounded border">
                    <pre class="py-2">
                        <code>
                            &lt;div class="card card-custom text-black"&gt;
                                &lt;div class="card-header"&gt;
                                    &lt;h1 class="card-title"&gt;Card titulo&lt;/h1&gt;
                                &lt;/div&gt;
                                &lt;div class="card-body"&gt;
                                    &lt;p class="card-text"&gt;Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        </code>
                    </pre>
                </div>

                <div class="col-md-10 mb-4 mt-4">
                    <h2>.card-item</h2>
                    <p class="lead">Card secundaria utilzada para generar enlaces.</p>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card text-center shadow card-item mb-3">
                                <a class="mt-3 text-black" href="#" title="titulo"><b>Titulo</b></a>
                                <a href="#" class="card-body" title="titulo">
                                    <div class="input-group">
                                        <img class="" width="60%" src="assets/img/favico.png" alt=""></img>
                                        <p class="display-3 ml-1">M</p>
                                    </div>
                                </a>
                            </div>                            
                        </div>
                        <div class="col-md-4">
                            <div class="card text-center shadow card-item mb-3">
                                <a class="mt-3 text-black" href="#" title="titulo"><b>Titulo</b></a>
                                <a href="#" class="card-body" title="titulo">
                                    <div class="input-group">
                                        <img class="" width="60%" src="assets/img/favico.png" alt=""></img>
                                        <p class="display-3 ml-1">M</p>
                                    </div>
                                </a>
                            </div>                            
                        </div>
                        <div class="col-md-4">
                            <div class="card text-center shadow card-item mb-3">
                                <a class="mt-3 text-black" href="#" title="titulo"><b>Titulo</b></a>
                                <a href="#" class="card-body" title="titulo">
                                    <div class="input-group">
                                        <img class="" width="60%" src="assets/img/favico.png" alt=""></img>
                                        <p class="display-3 ml-1">M</p>
                                    </div>
                                </a>
                            </div>                            
                        </div>
                    </div>
                </div>

                <div class="col-md-10">
                    <h2>Codigo</h2>
                </div>
                <div class="col-md-10 rounded border">
                    <pre class="py-2">
                        <code>
                            &lt;div class="card text-center shadow card-item mb-3"&gt;
                                &lt;a class="mt-3 text-black" href="#" title="titulo"&gt;&lt;b&gt;Titulo&lt;/b&gt;&lt;/a&gt;
                                &lt;a href="#" class="card-body" title="titulo"&gt;
                                    &lt;div class="input-group"&gt;
                                        &lt;img class="" width="60%" src="assets/img/favico.png" alt=""&gt;&lt;/img&gt;
                                        &lt;p class="display-3 ml-1"&gt;M&lt;/p&gt;
                                    &lt;/div&gt;
                                &lt;/a&gt;
                            &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>                        
        </div>
    )
}
