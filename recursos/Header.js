import React from "react";
import{Link} from "react-router-dom";

class Header extends React.Component {

    render() {
        return(
            <>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">
                            <img src="../recursos/images/logo.png" alt="" width="60" height="60"
                                 className="d-inline-block align-top"/>
                            <a>   </a>
                            <button type="button" className="btn btn-outline-secondary">NOVEDADES</button>
                            <a>   </a>
                            <button type="button" className="btn btn-outline-secondary">TENDENCIAS</button>
                            <a>   </a>
                            <button type="button" className="btn btn-outline-secondary">OFERTAS</button>
                        </a>
                        <div>
                            <Link to ='/CrearCuenta'>
                                <a><button type="button" className="btn btn-outline-success">Iniciar sesión</button>   </a>
                            </Link>
                            <Link to = '/CarritoCompras'>
                                <a><button type="button" className="btn btn-outline-primary">Carrito</button>   </a>
                            </Link>
                            <a><button type="button" className="btn btn-outline-primary">Favoritos</button>   </a>
                            <button type="button" className="btn btn-outline-primary">Soporte</button>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default Header;