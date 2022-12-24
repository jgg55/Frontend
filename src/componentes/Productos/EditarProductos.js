import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URL = 'http://150.136.33.165:5000/api/productos/'

const CompEditarProductos = () => {

    const [nombre_producto, setNombre_producto] = useState('');
    const [imagen, setImagen] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Funcion actulizar producto

    const ActualizarProducto = async (e) => {
        e.preventDefault()
        await axios.put(`${URL}${id}`,
            {
                nombre_producto: nombre_producto, imagen: imagen, cantidad: cantidad, precio: precio
            })
        navigate('/productos');

    }
    
    useEffect(() => {
        getProductosById()
// eslint-disable-next-line
    }, [])

    const getProductosById = async () => {
        const res = await axios.get(`${URL}${id}`)
        setNombre_producto(res.data.nombre_producto)
        setImagen(res.data.imagen)
        setCantidad(res.data.cantidad)
        setPrecio(res.data.precio)

    }
    return (
        <div>
            <h3>Modulo Actulizar Productos</h3>
            <form onSubmit={ActualizarProducto}>
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

                <button type='submit' className='btn btn-primary'><i className="fa-sharp fa-solid fa-pen-to-square"></i></button>

            </form>

        </div>
    )

}
export default CompEditarProductos;