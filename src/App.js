import React, { Component } from 'react';
import AgregarCita from './componentes/AgregarCita';
import Header from './componentes/Header';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header 
          titulo={'Administrador de visitas de Mascotas'} />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
