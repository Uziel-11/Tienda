import React from "react";
import img1 from '../recursos/images/image1.jpg'
import img2 from '../recursos/images/image2.jpg'
import img3 from '../recursos/images/image3.jpg'
import bd from './utilerias/InvocarBackEnd'
import Header from "../recursos/Header";
import CardC from './cardCarrito'


class Carrito extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
            ProductList: [],
            listPrecio: [],
            Imagenes:[img1, img2, img3],
            total:''

        }

        this.status = false
        //Extraer el catálogo de roles del backend
        bd.getInvocacion('/carrito/consultar',data => {  //Entrará acá cuando status = true
            this.setState({
                ProductList : data.data,
                listPrecio : data.data.Precio
            })
        }, error => { //Entrará acá cuando status = false
        })
        const lista= Array.from( this.state.listPrecio);

        const sumaPrecios = lista.reduce((prev, next) => prev + next.Precio,1460);
        this.state.total = sumaPrecios;
    }

    render() {
        return(
            <React.Fragment>
                <Header/>
                <div>
                    <div className="container">
                        <div className="row">
                            <For each="item" index="index" of={this.state.ProductList} >
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <CardC key={index} img={this.state.Imagenes[index]} title={item.Nombre} precio={item.Precio} idCarrito={item.idCarrito} cantidad={item.Cantidad}/>

                                </div>
                            </For>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl">
                                    <h3>TOTAL${this.state.total}</h3>
                                    <button type="button" className="btn btn-dark" >
                                        <p className="text-light">Comprar </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </React.Fragment>
        )
    }
}

export default Carrito;