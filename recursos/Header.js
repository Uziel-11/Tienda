import React from "react";
import{Link} from "react-router-dom";

class Header extends React.Component {

    render() {
        return(
            <>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">
                            <Link to='/'>
                                <img src="../recursos/images/logo.png" alt="" width="60" height="60"
                                     className="d-inline-block align-top"/>
                            </Link>
                            <a>   </a>
                            <button type="button" className="btn btn-outline-secondary">NOVEDADES</button>
                            <a>   </a>
                            <button type="button" className="btn btn-outline-secondary">TENDENCIAS</button>
                            <a>   </a>
                            <button type="button" className="btn btn-outline-secondary">OFERTAS</button>
                        </a>
                        <div>
                            <Link to ='/InicioSesion'>
                                <a><button type="button" className="btn btn-outline-success">Iniciar sesión</button>   </a>
                            </Link>
                            <Link to = '/CarritoCompras'>
                                <a><button type="button" className="btn btn-outline-primary">Carrito</button>   </a>
                            </Link>
                            <Link to='/favoritos'>
                                <a><button type="button" className="btn btn-outline-primary">Favoritos</button>   </a>
                            </Link>
                            <Link to='/Home'>
                                <a> <button type="button" className="btn btn-outline-primary">Soporte</button>  </a>
                            </Link>
                            <Link to="/AltaProductos">
                                <a> <button type="button" className="btn btn-outline-primary">Productos</button>  </a>
                            </Link>
                            <Link to="/usuario">
                                <a> <button type="button" className="btn btn-outline-primary">Usuarios</button>  </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default Header;