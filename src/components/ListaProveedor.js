import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ListaProveedor extends Component {

    constructor(){
        super();
        this.state = {
            proveedores: []
        }
        this.handleEliminar = this.handleEliminar.bind(this);
    }

    componentDidMount(){
        let proveedores = this.props.getLS('proveedores');

        if(proveedores === null) proveedores = [];

        this.setState({
            proveedores
        })
    }
    
    handleEliminar(id){
        const productos = this.props.getLS('productos');
        for(let prod of productos){
            if(prod.proveedor.id === id){
                alert('No puede eliminar este proveedor porque tiene productos que dependen de él');
                return;
            }
        }
        const proveedores = this.state.proveedores;
        for(let i = 0; i < proveedores.length; i++){
            if(proveedores[i].id === id){
                proveedores.splice(i, 1);
            }
        }
        this.setState({
            proveedores
        })
        window.location = '/Proveedores';
        localStorage.setItem('proveedores', JSON.stringify(proveedores));
    }

    render() {

        if(this.props.proveedores.length > 0){
            return <div>
                    <Link to="/Agregar/Proveedor" className="btn btn-primary mt-4">Agregar</Link>
                    <table className="table mt-4" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.proveedores.map(prov => {
                                return <tr key={prov.id} >
                                    <td>{prov.id}</td>
                                    <td>{prov.nombre}</td>
                                    <td>{prov.direccion}</td>
                                    <td>{prov.telefono}</td>
                                    <td><button className="btn btn-danger" onClick={() => this.handleEliminar(prov.id)} >Eliminar</button></td>
                                    <td><button className="btn btn-warning" onClick={() => alert('actualizando...')} >Actualizar</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        }else {
            return(
                <div>
                    <h3 className="alert alert-info mt-4" >No hay proveedores agregados</h3>
                    <Link to="/Agregar/Proveedor" className="btn btn-primary mt-4">Agregar</Link>
                </div>
            )
        }
    }
}

export default ListaProveedor
