import React, { Component } from 'react';

class Cita extends Component {
   
     render() {
          const { fecha, hora, mascota, propietario, sintomas, id } = this.props.info;

          return (
               <div className="media mt-3">
                    <div className="media-body">
                         <h4 className = "mt-0" > {mascota} </h4>
                         <p className="card-text">
                              <span>
                                   Nombre del dueño: 
                              </span> {propietario}
                         </p>
                         <p className="card-text">
                              <span>
                                   Fecha: 
                              </span> {fecha}
                         </p>
                         <p className="card-text">
                              <span>
                                   Hora: 
                              </span> {hora}
                         </p>
                         < p className = "card-text" >
                              <span>
                                   Síntomas: 
                              </span>
                         </p>
                         <p className = "card-text">
                             {sintomas}
                         </p>

                         <button>
                              
                         </button>
                    </div>
               </div>
          );
     }
}

export default Cita;