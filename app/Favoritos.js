import React from "react";
import Header from "../recursos/Header";

class Favoritos extends React.Component{

    render() {
        return(
            <>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl">
                            <h1>TUS FAVORITOS</h1>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <h3>Producto</h3>

                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <h3>Descripcion</h3>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <h3>Precio</h3>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <h3>Cantidad</h3>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <h3>Eliminar</h3>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 col-lg-3">

                            <img src={"https://img.ltwebstatic.com/images3_pi/2021/01/13/16105143105e072659dd0f9244013dac6f5802a0ac_thumbnail_405x552.webp"} alt=""  width="200" height="200" />
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <h5>Vestido de Tirante</h5>

                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <h5>Precio: $450</h5>
                            <br/>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-dark ">Cantidad</button>
                                <button type="button" className="btn btn-outline-dark   dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">

                            <button type="button" className="btn btn-outline-danger">Eliminar</button>
                            <br/>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-4 col-lg-3">
                            <img src={"https://img.ltwebstatic.com/images3_pi/2021/01/13/1610523034a59d5b789d0137828b714a25df8946ac_thumbnail_600x.webp"} alt=""  width="200" height="200" />
                        </div>
                        <div className="col-sm-3 col-md-4 col-lg-3">
                            <h5>Vestido con Estampado Floral</h5>
                            <br/>


                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2">
                            <h5>Precio: $430</h5>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2">
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-dark ">Cantidad</button>
                                <button type="button" className="btn btn-outline-dark   dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2">
                            <button type="button" className="btn btn-outline-danger">Eliminar</button>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-4 col-lg-3">
                            <img src={"https://img.ltwebstatic.com/images3_pi/2021/01/19/1611027106a481bbe28a41854a0f578cdd8df7d6d6_thumbnail_405x552.webp"} alt=""  width="200" height="200" />
                        </div>
                        <div className="col-sm-3 col-md-4 col-lg-3">
                            <h5>Vestido Slip Floral</h5>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2">
                            <h5>Precio: $580</h5>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2">
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-dark ">Cantidad</button>
                                <button type="button" className="btn btn-outline-dark   dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2">
                            <button type="button" className="btn btn-outline-danger">Eliminar</button>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-9">

                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3">
                            <h3>Precio Total: $1460</h3>
                        </div>
                    </div>
                    <br/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-10">

                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-2">
                            <button type="button" className="btn btn-outline-primary">Pagar</button>
                        </div>
                    </div>
                    <br/>
                </div>
            </>
        )
    }

}

export default Favoritos;