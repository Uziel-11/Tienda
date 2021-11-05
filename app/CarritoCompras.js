import React from 'react'
import Header from "../recursos/Header";

class CarritoCompras extends React.Component{

    render(){
        return(
            <>
                <Header/>
                <div>
                    <br/>
                    <div className={"container"} id={"box-login"}>
                        <div className={"row content"}>
                            <div className={"col-md-6 border text-center"}>
                                <h1> Carrito </h1>
                                <label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</label>
                                <br/>
                            </div>
                            <div className={"col-md-6 container-fluid border text-center"} id={"box-login"}>
                                <div className={"container-fluid border border-secondary"}>
                                    <h1>Resumen del pedido</h1>
                                </div>
                                <br/>
                                <h3>Subtotal</h3>
                                <button className={"btn btn-outline-success"}>Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export  default CarritoCompras;