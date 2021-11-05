import React from "react";
import img1 from '../recursos/images/image1.jpg'
import img2 from '../recursos/images/image2.jpg'
import img3 from '../recursos/images/image3.jpg'
import bd from './utilerias/InvocarBackEnd'
import Header from "../recursos/Header";
import CardProd from "./cardProductos";

class Productos extends React.Component {


    constructor(props) {
        super(props);
        this.state  = {
            ProductList: [],
            Imagenes:[img1, img2, img3],

        }

        this.status = false
        //Extraer el catálogo de roles del backend
        bd.getInvocacion('/producto/consultar',data => {  //Entrará acá cuando status = true
            this.setState({
                ProductList : data.dato
            })
        }, error => { //Entrará acá cuando status = false
            console.log(data)
        })
    }


    render() {
        return(
            <>
                <Header/>
                <div className="container">
                    <div className="row">
                        <For each="item" index="index" of={this.state.ProductList} >
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <CardProd key={index} img={this.state.Imagenes[index]} title={item.Nombre} descripcion={item.Descripcion} precio={item.Precio}
                                           talla={item.Talla} color={item.Color}  idProducto={item.idProducto}/>
                            </div>
                        </For>
                    </div>
                </div>
            </>
        )
    }
}

export default Productos;