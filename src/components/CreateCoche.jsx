import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class CreateCoche extends Component {
    url = Global.apiCoches;

    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    createCoche = (event) => {
        event.preventDefault();

        let request = "/api/coches/insertcoche/";

        console.log("Creando y enviando objeto...");

        var id = parseInt(this.cajaId.current.value);
        var marca = this.cajaMarca.current.value;
        var modelo = this.cajaModelo.current.value;
        var conductor = this.cajaConductor.current.value;
        var imagen = this.cajaImagen.current.value;

        var coche = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        axios.post(this.url + request, coche).then(response => {
            console.log("Insertando nuevo objeto...");
            <Navigate to="/" />
        })

    }

    render() {
        return (
            <div className='container mt-4'>
                <h3>Añadir Coche</h3>
                <form onSubmit={this.createCoche}>
                    <label className='form-label'>ID</label>
                    <input className='form-control' type='text' ref={this.cajaId} />
                    <label className='form-label'>Marca</label>
                    <input className='form-control' type='text' ref={this.cajaMarca} />
                    <label className='form-label'>Modelo</label>
                    <input className='form-control' type='text' ref={this.cajaModelo} />
                    <label className='form-label'>Conductor</label>
                    <input className='form-control' type='text' ref={this.cajaConductor} />
                    <label className='form-label'>Imagen</label>
                    <input className='form-control' type='text' ref={this.cajaImagen} />

                    <button className='btn btn-success mt-4'>Añadir</button>
                </form>
            </div>
        )
    }
}

export default CreateCoche;