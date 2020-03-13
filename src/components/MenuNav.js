import React, { Component } from 'react'
import {Route , Link} from 'react-router-dom';

import ListaProducto from './ListaProducto';
import ListaProveedor from './ListaProveedor';

export class MenuNav extends Component {
    render() {
        return (
            <div >
                <Link to="/Productos" className="btn btn-success mr-xl-4" >Productos</Link>
                <Link to="/Proveedores" className="btn btn-success">Proveedores</Link>

                <Route exact path="/Productos" render={() => {return <ListaProducto productos={this.props.productos} />}} />
                <Route exact path="/Proveedores" render={() => {return <ListaProveedor proveedores={this.props.proveedores} />}} />
            </div>
        )
    }
}

export default MenuNav
