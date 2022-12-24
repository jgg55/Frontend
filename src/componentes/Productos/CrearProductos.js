import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const URL = 'http://150.136.33.165:5000/api/productos/'

const CompAgregarProductos = () => {

    const [nombre_producto, setNombre_producto] = useState('');
    const [imagen, setImagen] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const navigate = useNavigate();

    //Funcion guardar productos

    const GuardarProductos = async (g) => {
    g.preventDefault()
        await axios.post(URL, {

            nombre_producto: nombre_producto, imagen: imagen, cantidad: cantidad, precio: precio})

        navigate('/productos');

    }

    return (
        <div>
            <h3>Modulo Agregar Productos</h3>
            <form onSubmit={GuardarProductos}>
            <div className='mb -3'>
                    <label className='form-label'> Nombre del Producto </label>
                    <input value={nombre_producto} onChange={(e) => setNombre_producto(e.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Inserte link Imagen </label>
                    <input value={imagen} onChange={(e) => setImagen(e.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Cantidad </label>
                    <input value={cantidad} onChange={(e) => setCantidad(e.target.value)}
                        type='number' className='form-control' />
                </div>

                <div className='mb -3'>
                    <label className='form-label'> Precio </label>
                    <input value={precio} onChange={(e) => setPrecio(e.target.value)}
                        type='number' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'><i className="fa-solid fa-address-card"></i></button>

            </form>

        </div>
    )

}
export default CompAgregarProductos;