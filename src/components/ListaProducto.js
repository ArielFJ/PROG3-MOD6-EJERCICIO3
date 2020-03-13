import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ListaProducto extends Component {
    

    render() {

        if(this.props.productos.length > 0){
            return <table className="table mt-4" >
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
                            return <tr>
                                <td>{prod.id}</td>
                                <td>{prod.nombre}</td>
                                <td>{prod.descripcion}</td>
                                <td>{prod.vencimiento}</td>
                                <td>{prod.proveedor.nombre}</td>
                                <td><button className="btn btn-danger" onClick={() => alert('eliminando...')} >Eliminar</button></td>
                                <td><button className="btn btn-warning" onClick={() => alert('actualizando...')} >Actualizar</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
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
