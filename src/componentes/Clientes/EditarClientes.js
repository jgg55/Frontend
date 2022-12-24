import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URL = 'http://150.136.33.165:5000/api/clientes/'

const CompEditarClientes = () => {

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [documento, setDocumento] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Funcion actulizar Clientes

    const ActualizarClientes = async (e) => {
        e.preventDefault()
        await axios.put(`${URL}${id}`,
            {
                nombres: nombres, apellidos: apellidos, documento: documento, correo: correo,
                telefono: telefono, direccion: direccion, ciudad: ciudad
            })
        navigate('/clientes');

    }
    
    useEffect(() => {
        getClientesById()
// eslint-disable-next-line
    }, [])

    const getClientesById = async () => {
        const res = await axios.get(`${URL}${id}`)
        setNombres(res.data.nombres)
        setApellidos(res.data.apellidos)
        setDocumento(res.data.documento)
        setCorreo(res.data.correo)
        setTelefono(res.data.telefono)
        setDireccion(res.data.direccion)
        setCiudad(res.data.ciudad)

    }
    return (
        <div>
            <h3>Modulo Actulizar Clientes</h3>
            <form onSubmit={ActualizarClientes}>
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
                    <label className='form-label'> Correo </label>
                    <input value={correo} onChange={(e) => setCorreo(e.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Telefono </label>
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)}
                        type='number' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Direccion </label>
                    <input value={direccion} onChange={(e) => setDireccion(e.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Ciudad </label>
                    <input value={ciudad} onChange={(e) => setCiudad(e.target.value)}
                        type='text' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'><i className="fa-sharp fa-solid fa-pen-to-square"></i></button>

            </form>

        </div>
    )

}
export default CompEditarClientes;