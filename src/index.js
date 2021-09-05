import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { GuiaDeEstilosApp } from './components/GuiaDeEstilosApp';

document.body.className = "bg-dark bg-gradient text-light"
document.body.style = "min-height: 100vh"

ReactDOM.render(
    <GuiaDeEstilosApp />,
    document.querySelector('#root')
)