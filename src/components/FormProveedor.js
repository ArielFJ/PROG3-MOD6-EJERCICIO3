import React, { Component } from 'react'
import { Proveedor } from './Modelos';

export class FormProveedor extends Component {

    constructor(){
        super();
        this.state = {
            nombre: '',
            direccion: '',
            telefono: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const {nombre, direccion, telefono} = this.state;
        const proveedor = new Proveedor(1, nombre, direccion, telefono);
        console.log(proveedor);
        // push local storage
    }

    render() {
        return (
            <div className="text-center align-items-center">
                <h1 className="display-4">Agregar Proveedor</h1>

                <h3 className="text-info mt-4">Llene el formulario y pulse Guardar para agregar nuevo proveedor.</h3>
                <br />
                <form className="mt-4" onSubmit={this.onSubmit}>
                    <div className="text-center row">

                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="control-label">Nombre</label>
                                <input name="nombre" type="text" className="form-control" onChange={this.onChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="control-label">Dirección</label>
                                <input name="direccion" type="text" className="form-control" onChange={this.onChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="control-label" title="Debe introducir 10 dígitos">Teléfono</label>
                                <input name="telefono" type="tel" pattern="[0-9]{10}" className="form-control" onChange={this.onChange} required/>
                                <small className="text-info">Debe introducir 10 dígitos</small>
                            </div>
                        </div>
                    
                        <div className="form-group">
                            <div className="col-md-5">
                                <button type="submit" className="btn btn-success mt-4">Guardar</button>
                            </div>
                        </div>
                    </div>   
                </form>

            </div>
        )
    }
}

export default FormProveedor
