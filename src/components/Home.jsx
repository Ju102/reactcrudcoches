import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { Navigate, NavLink } from 'react-router-dom';

class Home extends Component {

    state = {
        coches: []
    }

    url = Global.apiCoches;

    getCoches = () => {
        var request = "api/coches/";

        axios.get(this.url + request).then(response => {
            console.log("Cargando info. de coches...");
            this.setState({
                coches: response.data
            })
        })
    }

    deleteCoche = (id) => {
        console.log("Eliminando coche con id " + id + "...");
        var request = "api/coches/deletecoche/" + id;

        
        axios.delete(this.url + request).then(response => {
            console.log("Coche con id " + id + "eliminado con exito");
            this.getCoches();
        });
        
    }

    componentDidMount = () => {
        this.getCoches();
    }

    render() {
        return (
            <div className='container mt-4'>
                <h3>Home</h3>
                {
                    this.state.coches.length !== 0 &&
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.coches.map((coche, index) => {
                                    return <tr key={index}>
                                        <td>{coche.marca}</td>
                                        <td>{coche.modelo}</td>
                                        <td>
                                            <NavLink className='btn btn-warning' to={"/edit/" + coche.idCoche} >Editar</NavLink>
                                            <NavLink className="btn btn-info" to={"/details/" + coche.idCoche} >Detalles</NavLink>
                                            <button className='btn btn-danger' onClick={() => { this.deleteCoche(coche.idCoche)}}>Eliminar</button>

                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table >
                }
            </div>
        )
    }
}

export default Home