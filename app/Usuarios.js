import React from "react";
import Header from "../recursos/Header";

class Usuarios extends React.Component {


    constructor() {
        super();
        this.state = {
            arrayL: [{id: "1", name: "Daniel", edad: "20"},
                {id: "2", name: "Mauro", edad: "19"},
                {id: "3", name: "Gabriel", edad: "22"}]
        }
    }


    render() {
        return(

            <>
                <Header/>
                <table className="table table-responsive-xl">
                    <thead>
                    <tr>
                        <th className="text-center">id</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Age</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <For each="item" index="idx" of={this.state.arrayL}>
                        <tr>
                            <td className="text-center">{item.id}</td>
                            <td className="text-center">{item.name}</td>
                            <td className="text-center">{item.edad}</td>
                            <td className="text-center">{"Correo"}</td>
                            <td className="fila text-center">
                                <button className="btn btn-outline-primary">Edit</button>
                                <button className="btn btn-outline-danger">Delete</button>
                            </td>
                        </tr>
                    </For>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Usuarios;