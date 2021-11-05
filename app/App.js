import React from 'react'
import CrearCuenta from "./CrearCuenta";
import NotFound404 from "./NotFound404";
import InicioSesion from "./InicioSesion";
import Home from "./Home"
import CardsHome from "./CardsHome";
import Favoritos from "./Favoritos";
import Productos from "./Productos";
import Usuarios from "./Usuarios";


import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CarritoCompras from "./CarritoCompras";
import AltaProductos from "./AltaProductos";
import Carrito from "./Carrito";

class App extends React.Component{

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path = '/' component={Home}/>
                    <Route exact path = '/CrearCuenta' component = {CrearCuenta}/>
                    <Route exact path = '/InicioSesion' component = {InicioSesion}/>
                    <Route exact path = '/CarritoCompras' component = {Carrito}/>
                    <Route exact path = '/AltaProductos' component = { AltaProductos} />
                    <Route exact path = '/favoritos' component = {Favoritos}/>
                    <Route exact path = '/usuario' component = {Usuarios}/>
                    <Route exact path = '/Productos' component = {Productos}/>
                    <Route component={NotFound404}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;