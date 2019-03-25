import React, { Component } from 'react';

class Cita extends Component {
   
     render() {
          return (
               <div className="media mt-3">
                    <div className="media-body">
                         <h4 className="mt-0">Nombre de la Mascota: </h4>
                         <p className="card-text">
                              <span>
                                   Nombre del dueño: 
                              </span>
                         </p>
                         <p className="card-text">
                              <span>
                                   Fecha
                              </span>
                         </p>
                         <p className="card-text">
                              <span>
                                   Hora:
                              </span>
                         </p>
                         < p className = "card-text" >
                              <span>
                                   Síntomas:
                              </span>
                         </p>
                         <p className = "card-text">
                             
                         </p>
                    </div>
               </div>
          );
     }
}

export default Cita;