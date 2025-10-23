import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

class Details extends Component {

    state = {
        coche: null
    }

    url = Global.apiCoches;

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

    componentDidMount = () => {
        this.getInfoCoche();
    }

    render() {
        return (
            <div>
                <h3>Detalles</h3>
                <hr />
                {
                    this.state.coche !== null &&
                    <div className="card w-25">
                        <div className="card-body">
                            <h5 className="card-title">Detalles del Coche</h5>
                            <p className="card-text"><strong>ID:</strong> {this.state.coche.idCoche}</p>
                            <p className="card-text"><strong>Marca:</strong> {this.state.coche.marca}</p>
                            <p className="card-text"><strong>Modelo:</strong> {this.state.coche.modelo}</p>
                            <p className="card-text"><strong>Conductor: </strong> {this.state.coche.conductor}</p>
                            <img src={this.state.coche.imagen} className="card-img-top w-25" alt="Coche" />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Details