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
            proveedor: null,
            actualizando: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        if(this.props.match !== null && this.props.match !== undefined){
            const producto = this.props.obtenerValorPorId('productos', Number(this.props.match.params.prodId));
            if(producto !== null){
                this.setState({
                    nombre: producto.nombre,
                    descripcion: producto.descripcion,
                    vencimiento: producto.vencimiento,
                    proveedor: producto.proveedor,
                    actualizando: true
                });
            }
        }
        
    }

    onChange(e){
        if(e.target.name !== 'proveedor'){
            this.setState({
                [e.target.name]: e.target.value
            })
        }else {
            this.setState({
                [e.target.name]: this.props.obtenerValorPorId('proveedores', Number(e.target.value))
            })
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const {nombre, descripcion, vencimiento, proveedor} = this.state;
        console.log(this.state)
        const productosActuales = this.props.getLS('productos');
        if(!this.state.actualizando){
            const id = this.props.obtenerNuevoId(productosActuales);
            const producto = new Producto(id, nombre, descripcion, vencimiento, proveedor);
            this.props.postLS('productos', producto);
        }
        else{
            for(let item of productosActuales){
                if(item.id === Number(this.props.match.params.prodId)){
                    item.nombre = this.state.nombre;
                    item.descripcion = this.state.descripcion;
                    item.vencimiento = this.state.vencimiento;
                    item.proveedor = this.state.proveedor;
                }              
            }
            localStorage.setItem('productos', JSON.stringify(productosActuales));       
        }
        window.location = '/Productos';
    }

    render() {
        return (
            <div className="text-center align-items-center">
                <h1 className="display-4">Agregar Producto</h1>

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
                                    value={this.state.nombre}
                                    onChange={this.onChange} 
                                    required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="control-label">Descripción</label>
                                <input 
                                    name="descripcion" 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.descripcion }
                                    onChange={this.onChange} 
                                    required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="control-label" >Fecha de vencimiento</label>
                                <input 
                                    name="vencimiento"
                                    type="date" 
                                    className="form-control" 
                                    value={this.state.vencimiento }
                                    onChange={this.onChange} 
                                    required/>
                            </div>
                        </div>
                    
                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="control-label">Proveedor</label>
                                <select 
                                    name="proveedor" 
                                    type="text" 
                                    className="form-control" 
                                    onChange={this.onChange}
                                    required >
                                        {this.state.proveedor === null && <option value='' disabled selected hidden>Elija proveedor...</option>}
                                    {
                                        this.props.proveedores.map(prov => {
                                            if(this.state.proveedor !== null){
                                                if(this.state.proveedor.id === prov.id){
                                                return <option value={prov.id} key={prov.id} selected >{prov.nombre}</option>
                                                }
                                            }
                                            return <option value={prov.id} key={prov.id} >{prov.nombre}</option>
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
