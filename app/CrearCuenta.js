import React from 'react'
import update from 'immutability-helper'
import bd from './utilerias/InvocarBackEnd'

class CrearCuenta extends React.Component{

    constructor() {
        super();
        this.state = {
            id: '',
            nombre: '',
            apellidoP: '',
            usuario: '',
            contrasena: ''
        }

        this.estado = true
        this.usuariobien = true
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
                <br/>
                <div className={"col-md-4 container-fluid border border-secondary"}>
                    <div className={"text-center"}>
                        <h1> Crear Cuenta </h1>
                        <img src="/recursos/images/LoginIcon.png" width="100" height="100"/>
                    </div>

                    <form onSubmit={this.crearCuenta.bind(this)}>
                        <div>
                            <label htmlFor='nombre'> Nombre </label>
                            <input
                                type='text'
                                id='nombre'
                                name='nombre'
                                placeholder='Ejemplo'
                                value={this.state.nombre}
                                onChange={this.cambiarCampo.bind(this)}
                            />
                            <label ref={self => this.nombre = self}> </label>
                        </div>
                        <br/>
                        <div>
                            <label htmlFor='apellidoP'> Apellido Paterno </label>
                            <input
                                type='text'
                                id='apellidoP'
                                name='apellidoP'
                                placeholder='Ejemplo Apellido'
                                value={this.state.apellidoP}
                                onChange={this.cambiarCampo.bind(this)}
                            />
                            <label ref={self => this.apellidoP = self}> </label>
                        </div>
                        <br/>
                        <div className={"input-group"}>
                            <label htmlFor='usuario'> Nombre de Usuario </label>
                            <div className="input-group-text">@</div>
                            <input
                                className={"form-control"}
                                type='text'
                                id='usuario'
                                name='usuario'
                                placeholder='Ejemplo@gmail.com'
                                value={this.state.usuario}
                                onChange={this.cambiarCampo.bind(this)}
                                onBlur={this.validarUsuario.bind(this)}
                            />
                            <label ref={self => this.usuario = self}> </label>
                        </div>
                        <br/>
                        <div>
                            <label htmlFor='contrasena'> Contraseña </label>
                            <input
                                type='password'
                                id='contrasena'
                                name='contrasena'
                                placeholder='1234'
                                value={this.state.contrasena}
                                onChange={this.cambiarCampo.bind(this)}
                            />
                            <label ref={self => this.contrasena = self}> </label>
                        </div>
                        <br/>
                        <div className={"text-center"}>
                        <button className={"btn btn-outline-primary"} onClick={this.crearCuenta.bind(this)}>
                            Crear Cuenta
                        </button>
                        </div>
                        <div ref={self => this.messageError = self}> </div>
                        <br/>
                    </form>
                </div>
            </>
        )
    }

    crearCuenta(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if (this.estado && this.usuariobien){
            let usuar = {
                //id : this.state.id,
                nombre: this.state.nombre,
                apellidoP: this.state.apellidoP,
                usuario: this.state.usuario,
                contrasena: this.state.contrasena
            }
            bd.postInvocacion(`/users/crearCuenta`, usuar, dato =>{
                alert(dato.message)
                this.usuariobien = false
            }, error =>{
                alert(error.message + error.error)
            })
        }else
            this.messageError.innerHTML = 'Los Campos Marcados con * son Obligatorios'

        e.preventDefault()
    }

    validarCampos(){
        let estado = true
        if (this.state.nombre.length  === 0){
            this.nombre.innerHTML = '* Campo Obligatorio'
            estado = false
        }else {
            this.nombre.innerHTML = ''
        }

        if (this.state.apellidoP.length === 0){
            this.apellidoP.innerHTML = '* Campo Obligatorio'
            estado = false
        }else {
            this.apellidoP.innerHTML = ''
        }

        if (this.state.usuario.length === 0){
            this.usuario.innerHTML = '*Campo Obligatorio'
            estado = false
        }else {
            this.usuario.innerHTML = ''
        }

        if (this.state.contrasena.length === 0){
            this.contrasena.innerHTML = '* Campo Obligatorio'
            estado = false
        }else {
            this.contrasena.innerHTML = ''
        }

        if (estado === false){
            this.estado = false
        }else {
            this.estado = true
        }
    }

    validarUsuario(e){
        let usuario = this.state.usuario
        if (usuario){
            bd.getInvocacion(`/users/validarUsuario/${usuario}`, dato =>{
                this.usuario.innerHTML = '* El Nombre de Usuario no esta Disponible'
                this.usuariobien = false
            }, error => {
                this.usuario.innerHTML = '* El Nombre de Usuario esta Disponible'
                this.usuariobien = true
            })
        }else {
            this.usuariobien = false
        }
    }
}

export default CrearCuenta;