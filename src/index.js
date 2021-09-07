import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'animate.css/animate.min.css'
import './index.css'

import { EstilosApp } from './components/EstilosApp';

document.body.style = 'min-height: 100vh'

ReactDOM.render(
    <EstilosApp />,
    document.querySelector('#root')
)