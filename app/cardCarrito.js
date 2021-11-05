import React from "react";
import bd from './utilerias/InvocarBackEnd'


class cardCarrito extends React.Component {

    constructor(props) {
        super(props);


    }

    render() {
        return(
            <React.Fragment>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={this.props.img}  className="card-img" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.description}</p>
                                <p className="card-text">${this.props.precio}</p>
                                <p className="card-text">cantidad: {this.props.cantidad}</p>
                                <div>
                                    <button type="button" className="btn btn-dark" onClick={this.eliminarCarrito.bind(this)}>
                                        <p className="text-light">Eliminar </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }


    eliminarCarrito(e){
        let idCarrito= this.props.idCarrito;
        bd.getInvocacion(`/carrito/eliminar/${idCarrito}`, data => {
            alert(JSON.stringify(data))
        }, error => {
            alert(JSON.stringify(error))
        })
    }

}

export default cardCarrito;