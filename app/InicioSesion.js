import React from 'react'
import update from "immutability-helper";
import bd from './utilerias/InvocarBackEnd';
import {Link} from "react-router-dom";
import Header from "../recursos/Header";

class InicioSesion extends React.Component{

    constructor() {
        super();
        this.state = {
            usuario: '',
            contrasena: ''
        }
    }

    cambiarCampo(e){
        let campo = e.target.name
        let valor = e.target.value

        this.setState(update(this.state, {
            [campo] : {$set : valor}
        }))
    }

    render() {
        return(
            <>
                <Header/>
                <div>
                    <br/>
                    <div className={"container"} >
                        <div className={"row content"}>
                            <div className={"col-md-6"}>
                                <img src="./recursos/images/logo.png" alt="" width="400" height="400"
                                     className="d-inline-block align-top"/>
                            </div>
                            <div className={"col-md-6 container-fluid border border-secondary"} id={"box-login"}>
                                <h1> Inicio de Sesion </h1>
                                <br/>
                                <form>
                                    <div className={"form-group"}>
                                        <label htmlFor='usuario'> Nombre de Usuario </label>
                                        <input
                                            type='text'
                                            id='usuario'
                                            name='usuario'
                                            placeholder='Ejemplo    '
                                            value={this.state.usuario}
                                            onChange={this.cambiarCampo.bind(this)}
                                            onBlur={this.validarUsuario.bind(this)}
                                        />
                                        <br/>
                                        <div className='label-error' ref={self => this.label = self}> </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div>
                                        <label htmlFor='contrasena'> Contraseña </label>
                                        <input
                                            type='password'
                                            name='contrasena'
                                            id='contrasena'
                                            placeholder='12345'
                                            value={this.state.contrasena}
                                            onChange={this.cambiarCampo.bind(this)}
                                        />
                                        <br/>
                                        <br/>
                                        <div className='label-error' ref={self => this.pass =self}> </div>
                                    </div>
                                    <div className={"align-top"}>
                                        <p/>
                                        <button type='button' className={"btn btn-outline-primary"} id={"background-coloe"} onClick={this.iniciarSesion.bind(this)}> Iniciar Sesion </button>

                                        <button type='button' className={"btn btn-outline-primary"}> Olvidé mi contraseña </button>
                                        <br/>
                                        <Link to="CrearCuenta"> Crear Cuenta </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    validarUsuario(e){
        let usuario = this.state.usuario
        bd.getInvocacion(`/users/validarUsuario/${usuario}`,
            dato => {
            this.label.innerHTML = ''
        },
            error =>{
            this.pass.innerHTML = 'La Cuenta de Usuario no Existe'
        })
    }

    iniciarSesion(e){
        let usuari = {
            usuario: this.state.usuario,
            contrasena: this.state.contrasena
        }
        alert('iniciar sesion')
        bd.postInvocacion(`/users/iniciarSesion`, usuari, dato =>{
            //alert(JSON.stringify(dato))
            this.props.history.push('/')
        }, error => {
            this.pass.innerHTML = error.message
            alert(error)
        })


    }
}

export default InicioSesion;