import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URL = 'http://150.136.33.165:5000/api/citas/'

const CompMostrarCitas = () => {

    const [citas, setCita] = useState([]);
    useEffect(() => {
        getCitas()

    },[])

    //creamos una funcion para mostrar las Citas

    const getCitas = async () => {

        const res = await axios.get(URL);
        setCita(res.data);
    }

    // funcion para eliminar Citas

    const eliminarCitas = async (id) => {

        await axios.delete(`${URL}${id}`)
        getCitas();
    }

    return (

        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/citas/agregar' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-address-card"></i></Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>Fecha Cita</th>
                                <th>Hora Cita</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Documento</th>
                                <th>Area Visitante</th>
                                <th>Telefono</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {citas.map((cita, index) => (
                                <tr key={index}>
                                    <td>{cita.fecha_cita}</td>
                                    <td>{cita.hora_cita}</td>
                                    <td>{cita.nombres}</td>
                                    <td>{cita.apellidos}</td>
                                    <td>{cita.documento}</td>
                                    <td>{cita.area_visita}</td>
                                    <td>{cita.telefono}</td>
                                    <td>
                                        <Link to = {`/citas/editar/${cita._id}`} className='btn btn-info'> <i className="fa-sharp fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() => eliminarCitas(cita._id)} className='btn btn-danger'> <i className="fa-sharp fa-solid fa-trash"></i> </button>

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
export default CompMostrarCitas;