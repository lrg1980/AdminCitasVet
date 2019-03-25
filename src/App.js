import React, { Component } from 'react';
import AgregarCita from './componentes/AgregarCita';
import Header from './componentes/Header';
import ListaCitas from './componentes/ListaCitas';



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

  borrarCita = id => {

    console.log(id);
    // Obtener copia del state
    const citasActuales = [...this.state.citas];

    // borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);

    // Actualizar el state
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
          <div className="col-md-6">
            <ListaCitas
              citas={this.state.citas}
              borrarCita={this.borrarCita}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
