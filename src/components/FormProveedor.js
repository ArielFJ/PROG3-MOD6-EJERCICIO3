import React, { Component } from 'react'
import { Proveedor } from './Modelos';

export class FormProveedor extends Component {

    constructor(match, location){
        super();
        this.state = {
            nombre: '',
            direccion: '',
            telefono: '',
            actualizando: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        if(this.props.match !== null && this.props.match !== undefined){

            const proveedor = this.props.obtenerValorPorId('proveedores', Number(this.props.match.params.provId));
            console.log(proveedor);
            if(proveedor !== null){
                this.setState({
                    nombre: proveedor.nombre,
                    direccion: proveedor.direccion,
                    telefono: proveedor.telefono,
                    actualizando: true
                });
            }
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const proveedoresActuales = this.props.getLS('proveedores');
        const {nombre, direccion, telefono} = this.state;
        if(!this.state.actualizando){
            const id = this.props.obtenerNuevoId(proveedoresActuales);
            const proveedor = new Proveedor(id, nombre, direccion, telefono);
            this.props.postLS('proveedores', proveedor);
        }else{
            for(let item of proveedoresActuales){
                if(item.id === Number(this.props.match.params.provId)){
                    item.nombre = nombre;
                    item.direccion = direccion;
                    item.telefono = telefono;
                }              
            }
            localStorage.setItem('proveedores', JSON.stringify(proveedoresActuales));
        }
        window.location = '/Proveedores';
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
                                <input 
                                    name="nombre" 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.nombre } 
                                    onChange={this.onChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="control-label">Dirección</label>
                                <input 
                                    name="direccion" 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.direccion }
                                    onChange={this.onChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="control-label" title="Debe introducir 10 dígitos">Teléfono</label>
                                <input 
                                    name="telefono" 
                                    type="tel" 
                                    pattern="[0-9]{10}" 
                                    className="form-control" 
                                    value={this.state.telefono}
                                    onChange={this.onChange} required/>
                                <small className="text-info">Debe introducir 10 dígitos</small>
                            </div>
                        </div>
                    
                        <div className="form-group">
                            <div className="col-md-5">
                                <input type="submit" className="btn btn-success mt-4" value="Guardar" />
                            </div>
                        </div>
                    </div>   
                </form>

            </div>
        )
    }
}

export default FormProveedor
