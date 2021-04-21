import React from "react";

class AltaProductos extends React.Component{
    render() {
        return(
            <>
                <br/>
                <div className={"col-md-4 container-fluid border border-secondary"}>
                    <img src="../recursos/images/add.png" width="50" height="50"
                    className="d-inline-block align-top"/>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Nombre de producto</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Descripcion</label>
                            <input type="email" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Precio</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Marca</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                   value="option1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">XL</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                   value="option2"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">L</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                   value="option3"/>
                                <label className="form-check-label" htmlFor="inlineRadio3">M</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                   value="option4"/>
                                <label className="form-check-label" htmlFor="inlineRadio3">S</label>
                        </div>
                        <br/>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Selecciona el color</option>
                            <option value="1">Azul</option>
                            <option value="2">Rojo</option>
                            <option value="3">Amarillo</option>
                            <option value="4">Verde</option>
                            <option value="5">Cafe</option>
                            <option value="6">Negro</option>
                            <option value="6">Blanco</option>
                            <option value="7">Multicolor</option>
                        </select>
                        <br/>
                        <button type="button" className="btn btn-outline-success">Agregar</button>
                    </form>
                </div>
            </>
        )
    }
}
export default AltaProductos;