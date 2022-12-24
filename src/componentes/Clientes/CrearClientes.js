import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL = 'http://150.136.33.165:5000/api/clientes/'

const CompAgregarClientes = () => {

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [documento, setDocumento] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const navigate = useNavigate();

    //Funcion guardar proveedores

    const GuardarClientes = async (g) => {
    g.preventDefault()
        await axios.post(URL, {
            nombres: nombres, apellidos: apellidos, documento: documento, correo: correo,
            telefono: telefono, direccion: direccion, ciudad: ciudad})

        navigate('/clientes');

    }

    return (
        <div>
            <h3>Modulo Agregar Clientes</h3>
            <form onSubmit={GuardarClientes}>
                <div className='mb -3'>
                    <label className='form-label'> Nombres </label>
                    <input value={nombres} onChange={(g) => setNombres(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Apellidos </label>
                    <input value={apellidos} onChange={(g) => setApellidos(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Documento </label>
                    <input value={documento} onChange={(g) => setDocumento(g.target.value)}
                        type='number' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Correo </label>
                    <input value={correo} onChange={(g) => setCorreo(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Telefono </label>
                    <input value={telefono} onChange={(g) => setTelefono(g.target.value)}
                        type='number' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Direccion </label>
                    <input value={direccion} onChange={(g) => setDireccion(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Ciudad </label>
                    <input value={ciudad} onChange={(g) => setCiudad(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'><i className="fa-solid fa-address-card"></i></button>

            </form>

        </div>
    )

}
export default CompAgregarClientes;