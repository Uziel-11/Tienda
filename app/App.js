import React from 'react'
import CrearCuenta from "./CrearCuenta";
import NotFound404 from "./NotFound404";
import InicioSesion from "./InicioSesion";
import Home from "./Home"

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CarritoCompras from "./CarritoCompras";

class App extends React.Component{

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route  exact path='/' component={Home}/>
                    <Route exact path='/CrearCuenta' component={CrearCuenta}/>
                    <Route exact path='/InicioSesion' component={InicioSesion}/>
                    <Route exact path='/CarritoCompras' component={CarritoCompras}/>
                    <Route component={NotFound404}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;