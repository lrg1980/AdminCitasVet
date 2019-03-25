import React, { Component } from 'react';

class ListaCitas extends Component {
     
     render() {
          const citas = this.props.citas;

          const mensaje = Object.keys(citas).length === 0 ? 'No hay visitas hoy' : 'Administra tus visitas aquí'
          //console.log(Object.keys(citas).length)

          return (
               <div className="card mt-5">
                    <div className="card-body">
                         <h2 className="card-title text-center">
                              {mensaje}
                         </h2>
                    </div>
               </div>
          );
     }
}

export default ListaCitas;