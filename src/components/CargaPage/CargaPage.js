import React from "react";
import "./CargaPage.css";

export const CargaPage = () => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row">
                <div className="col-md-10">
                    <h1 className="display-4">Mascara de carga</h1> 
                    <hr/>
                    <p className="lead text-justify">
                        La mascara de carga se usa para evitar que el usuario recargue o realice mas solicitudes al servidor.
                        El tiempo que sera mostrada sera el mismo en que el sistema retorne una respuesta.
                    </p>
                </div>
            </div>
            <div className="row">    
                <div className="col-md-10 align-self-center">
                    <div>
                        <code>
                            <pre className="chroma p-3 rounded">
                            <br/>   <span className="p">&lt;</span><span className="nt">div</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;contenedor&#34;</span> <span className="na">id</span><span className="o">=</span><span className="s">&#34;contenedor&#34;</span><span className="p">&gt;</span>
                            <br/>       <span className="p">&lt;</span><span className="nt">div</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;loader-container&#34;</span><span className="p">&gt;</span>
                            <br/>           <span className="p">&lt;</span><span className="nt">div</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;loader&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">div</span><span className="p">&gt;</span>
                            <br/>           <span className="p">&lt;</span><span className="nt">div</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;loader2&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">div</span><span className="p">&gt;</span>
                            <br/>           <span className="p">&lt;</span><span className="nt">img</span> <span className="na">loading</span><span className="o">=</span><span className="s">&#34;lazy&#34;</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;img-load&#34;</span> <span className="na">src</span><span className="o">=</span><span className="s">&#34;assets/img/favico.png&#34;</span> <span className="na">alt</span><span className="o">=</span><span className="s">&#34;&#34;</span><span className="p">/&gt;</span>
                            <br/>       <span className="p">&lt;/</span><span className="nt">div</span><span className="p">&gt;</span>
                            <br/>   <span className="p">&lt;/</span><span className="nt">div</span><span className="p">&gt;</span>
                            </pre>
                        </code>
                    </div>
                </div>
                <div className="col-md-10 align-self-center">
                    <div>
                        <code>
                            <pre className="chroma p-3 rounded">
                            <br/>   <span className="kr">export</span> <span className="k">default</span> <span className="kr">class</span> <span className="nx">Loader</span> <span className="p">&#123;</span>
                            <br/>       <span className="nx">constructor</span><span className="p">()</span> <span className="p">&#123;</span>
                            <br/>       <span className="p">&#125;</span>
                            <br/>       <span className="nx">opening</span><span className="p">()</span> <span className="p">&#123;</span>
                            <br/>           <span className="nx">$</span><span className="p">(</span><span className="s1">&#39;#contenedor2&#39;</span><span className="p">).</span><span className="nx">css</span><span className="p">(</span><span className="s2">&#34;visibility&#34;</span><span className="p">,</span> <span className="s1">&#39;visible&#39;</span><span className="p">);</span>
                            <br/>           <span className="c1">//carga.style.opacity = &#39;0&#39;;
                            <br/>       </span><span className="c1"></span> <span className="p">&#125;</span>
                            <br/>       <span className="nx">ending</span><span className="p">()</span> <span className="p">&#123;</span>
                            <br/>           <span className="nx">$</span><span className="p">(</span><span className="s1">&#39;#contenedor2&#39;</span><span className="p">).</span><span className="nx">css</span><span className="p">(</span><span className="s2">&#34;visibility&#34;</span><span className="p">,</span> <span className="s1">&#39;hidden&#39;</span><span className="p">);</span>
                            <br/>           <span className="nx">$</span><span className="p">(</span><span className="s1">&#39;#contenedor2&#39;</span><span className="p">).</span><span className="nx">css</span><span className="p">(</span><span className="s2">&#34;opacity&#34;</span><span className="p">,</span> <span className="s1">&#39;0&#39;</span><span className="p">);</span>
                            <br/>       <span className="p">&#125;</span>
                            <br/>   <span className="p">&#125;</span></pre>
                        </code>
                    </div>
                </div>                               
            </div>
            <div className="row justify-content-between">
                <div className="col-md-6">
                    <div className="contenedor" id="contenedor">
                        <div className="loader-container">
                            <div className="loader"></div>
                            <div className="loader2"></div>
                            <img loading="lazy" className="img-load" src="assets/img/favico.png" alt=""/>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    );
};
