import React from "react";
import redes from '../img/redes.png'

const CompFooter = () => {

    return (

        <div class="card">

            <div class="card-body">
                <h5 class="card-title">Nos puedes Contactar</h5>
                <p class="card-text">Correo: info.systemas@gsystem.com </p>
                <p class="card-text">Telefono 111111 - 31011111</p>
                <img src={redes} className = "app-logo1" alt = "logo"/>
                </div>
                <div class = "card-footer text-muted">
                    Lunes a Viernes de 8 am a 5 pm -
                    Sabados de 8 am a 12 pm

                </div>
        </div>

    )

}
export default CompFooter;