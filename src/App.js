import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Components
// import ListaProducto from './components/ListaProducto';
import MenuNav from './components/MenuNav';
import { Producto, Proveedor } from './components/Modelos';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      productos: [],
      proveedores: []
    }
  }

  componentDidMount(){
    let proveedores = [
      new Proveedor(1, 'Ramón', 'Las Américas', '8098988989'),
      new Proveedor(2, 'Alan', 'Boca Chica', '5813592741'),
      new Proveedor(3, 'Pedro', 'La Caleta', '2584493258'),
    ];
    let productos = [
      new Producto(1, 'Salami', 'Salchichón de carne', '27-9-2018', proveedores[0]),
      new Producto(2, 'Queso', 'Queso de leche', '27-9-2018', proveedores[1]),
      new Producto(3, 'Piña', 'Piña de Mao', '27-9-2018', proveedores[2]),
    ];

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
          <MenuNav productos={this.state.productos} proveedores={this.state.proveedores} />
          
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
