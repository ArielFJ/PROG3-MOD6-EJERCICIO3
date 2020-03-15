import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ListaProducto extends Component {
    
    constructor(){
        super();
        this.state = {
            productos: []
        }
        this.handleEliminar = this.handleEliminar.bind(this);
    }

    componentDidMount(){
        let productos = this.props.getLS('productos');

        if(productos === null) productos = [];

        this.setState({
            productos
        })
    }

    handleEliminar(id){
        const productos = this.state.productos;
        for(let i = 0; i < productos.length; i++){
            if(productos[i].id === id){
                productos.splice(i, 1);
            }
        }
        this.setState({
            productos
        })
        window.location = '/Productos';
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    render() {

        if(this.state.productos.length > 0){
            return <div>
                    <Link to="/Agregar/Producto" className="btn btn-primary mt-4">Agregar</Link>
                    <table className="table mt-4" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Vencimiento</th>
                            <th>Proveedor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.productos.map(prod => {
                                return <tr key={prod.id}>
                                    <td>{prod.id}</td>
                                    <td>{prod.nombre}</td>
                                    <td>{prod.descripcion}</td>
                                    <td>{prod.vencimiento}</td>
                                    <td>{prod.proveedor.nombre}</td>
                                    <td><button className="btn btn-danger" onClick={() => this.handleEliminar(prod.id)} >Eliminar</button></td>
                                    <td><Link to={`/Actualizar/Producto/${prod.id}`} className="btn btn-warning"  >Actualizar</Link></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        }else {
            return(
                <div>
                    <h3 className="alert alert-info mt-4" >No hay productos agregados</h3>
                    <Link to="/Agregar/Producto" className="btn btn-primary mt-4">Agregar</Link>
                </div>
            )
        }
    }
}

export default ListaProducto
