import React from "react";
// eslint-disable-next-line
import inicio from '../img/inicio.png'
import robot from '../img/robot.png'
import mision from '../img/mision.png'
import valor from '../img/valor.png'

const CompInicio = () =>{

    return(


<div class="card-group">
  <div class="card">
    <img src={robot} className="app-log2" alt="logo"/>
    <div class="card-body">
      <h5 class="card-title">Mision</h5>
      <p class="card-text">Aportar al mundo tecnologías, productos y diseños innovadores que enriquezcan la vida de las personas y contribuyan a un futuro sustentable y socialmente responsable.</p>
      <p class="card-text"><small class="text-muted">Mision</small></p>
    </div>
  </div>
  <div class="card">
  <img src={mision} className="app-log3" alt="logo"/>
    <div class="card-body">
      <h5 class="card-title">Vision</h5>
      <p class="card-text">Inspirar al mundo para crear el futuro.</p>
      <p class="card-text"><small class="text-muted">Vision</small></p>
    </div>
  </div>
  <div class="card">
  <img src={valor} className="app-log4" alt="logo"/>
    <div class="card-body">
      <h5 class="card-title">Valores</h5>
      <p class="card-text">excelencia, cambio, integridad y prosperidad.</p>
      <p class="card-text"><small class="text-muted">Valores</small></p>
    </div>
  </div>
</div>



    )

}
export default CompInicio;