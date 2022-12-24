import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URL = 'http://150.136.33.165:5000/api/clientes/'

const CompMostrarClientes = () => {

    const [clientes, setCliente] = useState([]);
    useEffect(() => {
        getClientes()

    },[])

    //creamos una funcion para mostrar los proveedores

    const getClientes = async () => {

        const res = await axios.get(URL);
        setCliente(res.data);
    }

    // funcion para eliminar proveedores

    const eliminarClientes = async (id) => {

        await axios.delete(`${URL}${id}`)
        getClientes();
    }

    return (

        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/clientes/agregar' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-address-card"></i></Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>Nombres</th>
                                <th>Apeliidos</th>
                                <th>Documento</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Ciudad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente, index) => (
                                <tr key={index}>
                                    <td>{cliente.nombres}</td>
                                    <td>{cliente.apellidos}</td>
                                    <td>{cliente.documento}</td>
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>{cliente.ciudad}</td>
                                    <td>
                                        <Link to = {`/clientes/editar/${cliente._id}`} className='btn btn-info'> <i className="fa-sharp fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() => eliminarClientes(cliente._id)} className='btn btn-danger'> <i className="fa-sharp fa-solid fa-trash"></i> </button>

                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>


                </div>

            </div>


        </div>
    )
}
export default CompMostrarClientes;