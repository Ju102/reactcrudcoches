import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class EditCoche extends Component {

  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  url = Global.apiCoches;

  state = {
    coche: null
  }

  getInfoCoche = () => {
    var idCoche = this.props.id;

    var request = "api/coches/findcoche/" + idCoche;

    console.log("Leyendo datos de coche...");

    axios.get(this.url + request).then(response => {
      console.log("Datos de coche recuperados");
      this.setState({
        coche: response.data
      })
    })
  }

  updateDatosCoche = (event) => {
    event.preventDefault();

    var idCoche = parseInt(this.cajaId.current.value);
    var marca = this.cajaMarca.current.value;
    var modelo = this.cajaModelo.current.value;
    var conductor = this.cajaConductor.current.value;
    var imagen = this.cajaImagen.current.value;

    var request = "api/coches/updatecoche/";

    var coche = {
      idCoche: idCoche,
      marca: marca,
      modelo: modelo,
      conductor: conductor,
      imagen: imagen
    };

    axios.put(this.url + request, coche).then(response => {
      console.log("Datos actualizados con exito...");
      <Navigate to="/" />
    })

  }

  componentDidMount = () => {
    this.getInfoCoche();
  }

  render() {
    return (
      <div>
        <h3>Editar Coche</h3>

        <div className='container mt-4'>
          <h3>Cambiar datos</h3>
          {
            this.state.coche !== null &&
            <form onSubmit={this.updateDatosCoche}>
              <label className='form-label'>ID</label>
              <input className='form-control' type='text' defaultValue={this.state.coche.idCoche} ref={this.cajaId} disabled />
              <label className='form-label'>Marca</label>
              <input className='form-control' type='text' defaultValue={this.state.coche.marca} ref={this.cajaMarca} />
              <label className='form-label'>Modelo</label>
              <input className='form-control' type='text' defaultValue={this.state.coche.modelo} ref={this.cajaModelo} />
              <label className='form-label'>Conductor</label>
              <input className='form-control' type='text' defaultValue={this.state.coche.conductor} ref={this.cajaConductor} />
              <label className='form-label'>Imagen</label>
              <input className='form-control' type='text' defaultValue={this.state.coche.imagen} ref={this.cajaImagen} />

              <button className='btn btn-success mt-4'>Actualizar</button>
            </form>
          }
        </div>
      </div>
    )
  }
}

export default EditCoche;