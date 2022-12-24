import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URL = 'http://150.136.33.165:5000/api/citas/'

const CompEditarCitas = () => {

    const [fecha_cita, setFecha_cita] = useState('');
    const [hora_cita, setHora_cita] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [documento, setDocumento] = useState('');
    const [area_visita, setArea_visita] = useState('');
    const [telefono, setTelefono] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Funcion actulizar proveedor

    const ActualizarCitas = async (e) => {
        e.preventDefault()
        await axios.put(`${URL}${id}`,
            {
                fecha_cita: fecha_cita, hora_cita: hora_cita, nombres: nombres, apellidos: apellidos,
                documento: documento, area_visita: area_visita, telefono: telefono
            })
        navigate('/citas');

    }
    
    useEffect(() => {
        getCitasById()
// eslint-disable-next-line
    }, [])

    const getCitasById = async () => {
        const res = await axios.get(`${URL}${id}`)
        setFecha_cita(res.data.fecha_cita)
        setHora_cita(res.data.hora_cita)
        setNombres(res.data.nombres)
        setApellidos(res.data.apellidos)
        setDocumento(res.data.documento)
        setArea_visita(res.data.area_visita)
        setTelefono(res.data.telefono)

    }
    return (
        <div>
            <h3>Modulo Actulizar Citas</h3>
            <form onSubmit={ActualizarCitas}>
                <div className='mb -3'>
                    <label className='form-label'> Fecha de la Cita </label>
                    <input value={fecha_cita} onChange={(e) => setFecha_cita(e.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Hora de la Cita </label>
                    <input value={hora_cita} onChange={(e) => setHora_cita(e.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Nombres </label>
                    <input value={nombres} onChange={(e) => setNombres(e.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Apellidos </label>
                    <input value={apellidos} onChange={(e) => setApellidos(e.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Documento </label>
                    <input value={documento} onChange={(e) => setDocumento(e.target.value)}
                        type='number' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Area a Visitar </label>
                    <input value={area_visita} onChange={(e) => setArea_visita(e.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Telefono </label>
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)}
                        type='number' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'><i className="fa-sharp fa-solid fa-pen-to-square"></i></button>

            </form>

        </div>
    )

}
export default CompEditarCitas;