import React from "react";
import Carrito from "../recursos/images/carrito.svg"
import bd from "./utilerias/InvocarBackEnd"


class CardsHome extends React.Component{
    constructor(props) {
        super(props);


    }

    render() {
        return(
            <React.Fragment>
                <div className="row ">
                    <div className="col" >
                        <div className="card"  >
                            <img src={this.props.img}  className="card-img"  />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <h6 className={'card-title'}> {this.props.descripcion} </h6>
                                <p className="card-text">${this.props.precio} </p>
                                <button type="button" className="btn btn-white" onClick={this.agregarCarrito.bind(this)}>
                                    <img src={Carrito} alt="" width="30" height="24"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    agregarCarrito(e){
        let carrito={
            idProducto: this.props.idProducto,
            nombre: this.props.title,
            precio: this.props.precio,
            cantidad:1
        }

        bd.postInvocacion('/carrito/agregar',carrito, data => {
            alert(JSON.stringify(data))
        }, error => {
            alert(JSON.stringify(error))
        })

    }
}

export default CardsHome;