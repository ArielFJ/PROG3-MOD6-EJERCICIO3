import React, { Component } from 'react'
import {Route , Link} from 'react-router-dom';

import ListaProducto from './ListaProducto';
import ListaProveedor from './ListaProveedor';
import FormProveedor from './FormProveedor';
import FormProducto from './FormProducto';

export class MenuNav extends Component {

    render() {
        return (
            <div>
                <Link to="/Productos" className="btn btn-success mr-xl-4" >Productos</Link>
                <Link to="/Proveedores" className="btn btn-success">Proveedores</Link>

                <Route exact path="/Productos" 
                    render={() => {return <ListaProducto 
                                            productos={this.props.productos} 
                                            getLS={this.props.getLS} />}} />
                <Route exact path="/Proveedores" 
                    render={() => {return <ListaProveedor 
                                            proveedores={this.props.proveedores} 
                                            getLS={this.props.getLS} />}} />
                <Route exact path="/Agregar/Proveedor" 
                    render={() => { return <FormProveedor 
                                            postLS={this.props.postLS} 
                                            getLS={this.props.getLS} 
                                            obtenerNuevoId={this.props.obtenerNuevoId} />}} />
                <Route exact path="/Agregar/Producto" 
                    render={() => { return <FormProducto 
                                            proveedores={this.props.proveedores} 
                                            postLS={this.props.postLS} 
                                            getLS={this.props.getLS} 
                                            obtenerNuevoId={this.props.obtenerNuevoId} />}}  />
            </div>
        )
    }
}

export default MenuNav
