import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL = 'http://150.136.33.165:5000/api/citas/'

const CompAgregarCitas = () => {

    const [fecha_cita, setFecha_cita] = useState('');
    const [hora_cita, setHora_cita] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [documento, setDocumento] = useState('');
    const [area_visita, setArea_visita] = useState('');
    const [telefono, setTelefono] = useState('');
    const navigate = useNavigate();

    //Funcion guardar Citas

    const GuardarCitas = async (g) => {
    g.preventDefault()
        await axios.post(URL, {
            fecha_cita: fecha_cita, hora_cita: hora_cita, nombres: nombres, apellidos: apellidos,
                documento: documento, area_visita: area_visita, telefono: telefono})

        navigate('/citas');

    }

    return (
        <div>
            <h3>Modulo Solicitar Cita</h3>
            <form onSubmit={GuardarCitas}>
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


                <button type='submit' className='btn btn-primary'><i className="fa-solid fa-address-card"></i></button>

            </form>

        </div>
    )

}
export default CompAgregarCitas;