import React, { Component } from 'react'
import { Producto } from './Modelos';
import { Link } from 'react-router-dom';

export class FormProducto extends Component {

    constructor(){
        super();
        this.state = {
            nombre: '',
            descripcion: '',
            vencimiento: '',
            proveedor: null
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
        const {nombre, descripcion, vencimiento, proveedor} = this.state;
        const producto = new Producto(1, nombre, descripcion, vencimiento, proveedor);
        console.log(producto);
        // push local storage
    }

    render() {
        return (
            <div className="text-center align-items-center">
                <h1 className="display-4">Agregar Proveedor</h1>

                <h3 className="text-info mt-4">Llene el formulario y pulse Guardar para agregar nuevo producto.</h3>
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
                                    onChange={this.onChange} 
                                    value={this.props.nombre} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="control-label">Descripción</label>
                                <input 
                                    name="descripcion" 
                                    type="text" 
                                    className="form-control" 
                                    onChange={this.onChange} 
                                    value={this.props.descripcion} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="control-label" >Fecha de vencimiento</label>
                                <input 
                                    name="vencimiento"
                                    type="date" 
                                    className="form-control" 
                                    onChange={this.onChange} 
                                    value={this.props.vencimiento} required/>
                            </div>
                        </div>
                    
                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="control-label">Proveedor</label>
                                <select 
                                    name="descripcion" 
                                    type="text" 
                                    className="form-control" 
                                    onChange={this.onChange} 
                                    required >
                                    {
                                        this.props.proveedores.map(prov => {
                                        return <option key={prov.id} >{prov.nombre}</option>
                                        })
                                    }
                                </select>
                                {this.props.proveedores.length === 0 && <small className="text-danger">Debe agregar proveedores</small>}
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-5">
                                <button type="submit" className="btn btn-success mt-4">Guardar</button>
                            </div>
                        </div>
                        {this.props.proveedores.length === 0 && (
                            <div className="col-md-5" style={{marginRight:"auto", marginLeft:"auto"}} >
                                <Link to="/Agregar/Proveedor" className="btn btn-primary mt-4">Agregar Proveedor</Link>

                        </div>)}
                    </div>   
                </form>

            </div>
        )
    }
}

export default FormProducto
