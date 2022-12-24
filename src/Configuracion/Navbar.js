import React from "react";
import banner3 from '../img/banner3.png'



const CompNavbar = () => {
    return (
        <div className="App">
            <header className="container">

                <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">

                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">

                        <img src="https://misiontic2022.mintic.gov.co/mt2022/assets/assets/images/logo-mision.png" style={{ height: 32 }} alt='logo' />

                        <span className="fs-4">Website</span>

                    </a>

                    <ul className="nav nav-pills">

                        <li className="nav-item"><a href="/" className="nav-link ">Inicio</a></li>

                        <li className="nav-item"><a href="/proveedores" className="nav-link ">Proveedores</a></li>

                        <li className="nav-item"><a href="/clientes" className="nav-link ">Clientes</a></li>

                        <li className="nav-item"><a href="/citas" className="nav-link">Citas</a></li>

                        <li className="nav-item"><a href="/productos" className="nav-link">Productos</a></li>

                    </ul>

                </nav>
                <img src={banner3} className="app-logo" alt="logo" />

            </header>

        </div>

    )
}

export default CompNavbar;