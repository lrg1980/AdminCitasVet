import React, { Component } from 'react';
import AgregarCita from './componentes/AgregarCita';
import Header from './componentes/Header';


class App extends Component {
  
  state = {
    citas : []
  }
  crearCita = (nuevaCita) => {
    //console.log(cita)
    const citas = [...this.state.citas, nuevaCita];
    
    console.log(citas);

    this.setState({
      citas
    });
  }
  
  render() {
    return (
      <div className="container">
        <Header 
          titulo={'Administrador de visitas de Mascotas'} />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita
              crearCita={this.crearCita}
            />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
