import React from 'react';
import update from 'immutability-helper';
import bd from './utilerias/InvocarBackEnd';
import Header from "../recursos/Header";
import {Link} from "react-router-dom";

class AltaProductos extends React.Component{


    constructor() {
        super();
        this.state = {
            idProducto: '',
            nomProducto: '',
            descripcion: '',
            precio: '',
            marca: '',
            talla: '',
            color: null
        }
    }

    cambiarCampo(e){
        let campo = e.target.name
        let valor = e.target.value
        let type = e.target.type

        this.setState({
            color : e.target.value
        })

        if (type === 'radio'){
            this.setState(update(this.state, {
                talla : {$set : valor}
            }))
        }else {
            this.setState(update(this.state, {
                [campo] : {$set : valor}
            }))
        }

    }


    render() {
        return(
            <>
                <Header/>
                <br/>
                <div className={"col-md-4 container-fluid border border-secondary"}>
                    <img src="../recursos/images/add.png" width="50" height="50"
                    className="d-inline-block align-top"/>

                    <form onSubmit={this.agregarProducto.bind(this)}>
                        <div className="mb-3">
                            <label htmlFor="idProducto" className="form-label">Id del Producto</label>
                            <input type="text" className="form-control" id="idProducto"
                                   name="idProducto"
                                   placeholder='1'
                                   value={this.state.idProducto}
                                   onChange={this.cambiarCampo.bind(this)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nomProducto" className="form-label">Nombre de producto</label>
                            <input type="text" className="form-control" id="nomProducto"
                                   name="nomProducto"
                                   placeholder='Pantalon'
                                   value={this.state.nomProducto}
                                   onChange={this.cambiarCampo.bind(this)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripcion</label>
                            <input type="text" className="form-control" id="descripcion"
                                   name='descripcion'
                                   placeholder='con grietas en la parte de los bolsillos'
                                   value={this.state.descripcion}
                                   onChange={this.cambiarCampo.bind(this)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="precio" className="form-label">Precio</label>
                            <input type="text" className="form-control" id="precio"
                                   name='precio'
                                   placeholder='125'
                                   value={this.state.precio}
                                   onChange={this.cambiarCampo.bind(this)}
                                   />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marca" className="form-label">Marca</label>
                            <input type="text" className="form-control" id="marca"
                                   name='marca'
                                   placeholder='Cuidado con el Perro'
                                   value={this.state.marca}
                                   onChange={this.cambiarCampo.bind(this)}
                            />
                        </div>

                        <div onChange={this.cambiarCampo.bind(this)}>
                            <input id="talla" type="radio" value="XL" name="gender" /> XL
                            <input id="talla" type="radio" value="L" name="gender" /> L
                            <input id="talla" type="radio" value="M" name="gender" /> M
                            <input id="talla" type="radio" value="S" name="gender" /> S
                        </div>

                        {/*<div className="form-check form-check-inline">*/}
                        {/*    <label className="form-check-label" htmlFor="inlineRadio1">XL</label>*/}
                        {/*    <input className="form-check-input" type="radio" name="XL" id="inlineRadio1"*/}
                        {/*           onChange={this.cambiarCampo.bind(this)}*/}
                        {/*           value={this.state.talla}/>*/}
                        {/*</div>*/}
                        {/*<div className="form-check form-check-inline">*/}
                        {/*    <label className="form-check-label" htmlFor="inlineRadio2">L</label>*/}
                        {/*    <input className="form-check-input" type="radio" name="L" id="inlineRadio2"*/}
                        {/*           onChange={this.cambiarCampo.bind(this)}*/}
                        {/*           value={this.state.talla}/>*/}

                        {/*</div>*/}
                        {/*<div className="form-check form-check-inline">*/}
                        {/*    <label className="form-check-label" htmlFor="inlineRadio3">M</label>*/}
                        {/*    <input className="form-check-input" type="radio" name="M" id="inlineRadio3"*/}
                        {/*           onChange={this.cambiarCampo.bind(this)}*/}
                        {/*           value={this.state.talla}/>*/}

                        {/*</div>*/}
                        {/*<div className="form-check form-check-inline">*/}
                        {/*    <label className="form-check-label" htmlFor="inlineRadio3">S</label>*/}
                        {/*    <input className="form-check-input" type="radio" name="S" id="inlineRadio3"*/}
                        {/*           onChange={this.cambiarCampo.bind(this)}*/}
                        {/*           value={this.state.talla}/>*/}

                        {/*</div>*/}
                        {/*<br/>*/}
                        <div>
                            <select name='color' id='color' value={this.state.color} onChange={this.cambiarCampo.bind(this)} className="form-select" aria-label="Default select example">
                                <option value="" selected>Selecciona el color</option>
                                <option value="Azul">Azul</option>
                                <option value="Rojo">Rojo</option>
                                <option value="Amarillo">Amarillo</option>
                                <option value="Verde">Verde</option>
                                <option value="Cafe">Cafe</option>
                                <option value="Negro">Negro</option>
                                <option value="Blanco">Blanco</option>
                                <option value="Multicolor">Multicolor</option>
                            </select>

                        </div>
                        <br/>

                        <div className='label-error' ref={self => this.mensage =self}> </div>
                        <button type="button" className="btn btn-outline-success" onClick={this.agregarProducto.bind(this)}>Agregar</button>
                        <button type="button" className="btn btn-outline-success" onClick={this.actualizarProducto.bind(this)}>Actualizar</button>
                    </form>
                    <br/>
                    <Link to='Productos'>
                        Ver Productos
                    </Link>
                </div>
            </>
        )
    }

    agregarProducto(e){

        let datos = {
            nombre: this.state.nomProducto,
            descripcion: this.state.descripcion,
            precio: this.state.precio,
            marca: this.state.marca,
            talla: this.state.talla,
            color: this.state.color
        }

        bd.postInvocacion(`/producto/agregar`, datos, dato =>{
            //alert(dato.message)
            alert(JSON.stringify(dato))
        }, error =>{
            alert(error.message + error.error)
        })

        e.preventDefault()
        document.getElementById("nomProducto").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("marca").value = "";
        document.getElementById("color").value = "";
        document.getElementById("talla").value = "";
            this.state.nomProducto = null,
            this.state.descripcion = null,
            this.state.precio = null,
            this.state.marca = null,
            this.state.color = null
    }

    actualizarProducto(e){

        let datos = {
            idProducto: this.state.idProducto,
            nombre: this.state.nomProducto,
            descripcion: this.state.descripcion,
            precio: this.state.precio,
            marca: this.state.marca,
            talla: this.state.talla,
            color: this.state.color
        }

        bd.postInvocacion(`/producto/actualizar`, datos, dato =>{
            //alert(dato.message)
            alert(JSON.stringify(dato))
        }, error =>{
            alert(error.message + error.error)
        })

        e.preventDefault()
        document.getElementById('idProducto').value = '';
        document.getElementById("nomProducto").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("marca").value = "";
        document.getElementById("color").value = "";
        document.getElementById("talla").value = "";
        this.state.idProducto = null,
        this.state.nomProducto = null,
            this.state.descripcion = null,
            this.state.precio = null,
            this.state.marca = null,
            this.state.color = null
    }


}


export default AltaProductos;