import React from 'react'
import update from "immutability-helper";
import bd from './utilerias/InvocarBackEnd';

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
                <h1> Inicio de Sesion </h1>
                <form>
                    <div>
                        <label htmlFor='usuario'> Nombre de Usuario </label>
                        <input
                            type='text'
                            id='usuario'
                            name='usuario'
                            placeholder='Uzielp11'
                            value={this.state.usuario}
                            onChange={this.cambiarCampo.bind(this)}
                            onBlur={this.validarUsuario.bind(this)}
                        />
                        <div className='label-error' ref={self => this.label = self}> </div>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor='contrasena'> Contraseña </label>
                        <input
                            type='password'
                            name='contrasena'
                            id='contrasena'
                            placeholder='1234'
                            value={this.state.contrasena}
                            onChange={this.cambiarCampo.bind(this)}
                        />
                        <div className='label-error' ref={self => this.pass =self}> </div>
                    </div>
                    <button type='button' onClick={this.iniciarSesion.bind(this)}> Iniciar Sesion </button>
                </form>
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
        bd.postInvocacion(`/users/login`, usuari, dato =>{
            alert(JSON.stringify(dato))
            //window.localStorage.setItem('token', dato.token)
        }, error => {
            this.pass.innerHTML = error.message
        })
    }

}

export default InicioSesion;