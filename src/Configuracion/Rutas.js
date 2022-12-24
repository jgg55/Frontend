//importar componentes

import CompInicio from './Inicio';
import CompMostrarProveedores from '../componentes/Proveedores/MostrarProveedores';
import CompAgregarProveedores from '../componentes/Proveedores/CrearProveedores';
import CompEditarProveedores from '../componentes/Proveedores/EditarProveedores';
import CompMostrarClientes from '../componentes/Clientes/MostrarClientes';
import CompAgregarClientes from '../componentes/Clientes/CrearClientes'
import CompEditarClientes from '../componentes/Clientes/EditarClientes';
import CompMostrarCitas from '../componentes/Citas/MostrarCitas';
import CompAgregarCitas from '../componentes/Citas/CrearCitas'
import CompEditarCitas from '../componentes/Citas/EditarCitas';
import CompMostrarProductos from '../componentes/Productos/MostrarProductos';
import CompAgregarProductos from '../componentes/Productos/CrearProductos'
import CompEditarProductos from '../componentes/Productos/EditarProductos';



// importar routers (librerias)

import { Route, Routes } from 'react-router-dom'

const CompRutas = () => {

    return (

        <Routes>
            <Route path='/' element={<CompInicio />} />
            <Route path='/proveedores' element={<CompMostrarProveedores />} />
            <Route path='/proveedores/agregar' element={<CompAgregarProveedores />} />
            <Route path='/proveedores/editar/:id' element={<CompEditarProveedores />} />

            <Route path='/clientes' element={<CompMostrarClientes />} />
            <Route path='/clientes/agregar' element={<CompAgregarClientes />} />
            <Route path='/clientes/editar/:id' element={<CompEditarClientes />} />

            <Route path='/citas' element={<CompMostrarCitas />} />
            <Route path='/citas/agregar' element={<CompAgregarCitas />} />
            <Route path='/citas/editar/:id' element={<CompEditarCitas />} />

            <Route path='/productos' element={<CompMostrarProductos />} />
            <Route path='/productos/agregar' element={<CompAgregarProductos />} />
            <Route path='/productos/editar/:id' element={<CompEditarProductos />} />

        </Routes>


    )

}

export default CompRutas;