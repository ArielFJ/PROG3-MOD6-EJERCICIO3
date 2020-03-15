import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Components
// import ListaProducto from './components/ListaProducto';
import MenuNav from './components/MenuNav';
// import { Producto, Proveedor } from './components/Modelos';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      productos: [],
      proveedores: []
    }
    this.getLS = this.getLS.bind(this);
    this.postLS = this.postLS.bind(this);
    this.obtenerNuevoId = this.obtenerNuevoId.bind(this);
    this.obtenerValorPorId = this.obtenerValorPorId.bind(this);
  }

  getLS(key){
    const data = localStorage.getItem(key);
    let value = [];
    if(data !== null){
      value = JSON.parse(data);
    }
    return value;
  }

  postLS(key, value){
      const data = this.getLS(key);
      data.push(value);
      localStorage.setItem(key, JSON.stringify(data));
  }

  obtenerNuevoId(lista){
    if(lista.length > 0){
      return lista[lista.length - 1].id + 1;
    }
    return 0;
  }

  obtenerValorPorId(key, id){
    const valores = this.getLS(key);
    for(let valor of valores){
        if(valor.id === id){
            return valor;
        }
    }
    return null;
 }

  componentDidMount(){
    let proveedores = this.getLS('proveedores');
    let productos = this.getLS('productos');

    if(productos === null) productos = [];
    if(proveedores === null) proveedores = [];

    this.setState({
      productos,
      proveedores
    })
  }

  render() {
    return (
      <div className="container text-center">
        
        <Router>
          <Link to="/" className="display-4" style={{color:"black", textDecoration:"none"}} ><h1>CRUD Almacén</h1></Link>
          <MenuNav 
            productos={this.state.productos} 
            proveedores={this.state.proveedores}
            postLS={this.postLS} 
            getLS={this.getLS}
            obtenerNuevoId={this.obtenerNuevoId} 
            obtenerValorPorId={this.obtenerValorPorId} />
          
          <Route exact path="/" render={() => {
            return <h3>Almacén de productos y proveedores</h3>
          }}/>
        </Router>
        {/* {this.state.productos.length > 0 ? <ListaProducto productos={this.state.productos} /> : <h3>No hay productos agregados</h3>} */}
      </div>
    );
  }
}

export default App;
