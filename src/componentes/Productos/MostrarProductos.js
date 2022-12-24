import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URL = 'http://150.136.33.165:5000/api/productos/'

const CompMostrarProductos = () => {

    const [productos, setProducto] = useState([]);
    useEffect(() => {
        getProductos()

    },[])

    //creamos una funcion para mostrar los productos

    const getProductos = async () => {

        const res = await axios.get(URL);
        setProducto(res.data);
    }

    // funcion para eliminar producto

    const eliminarProductos = async (id) => {

        await axios.delete(`${URL}${id}`)
        getProductos();
    }

    return (

        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/productos/agregar' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-address-card"></i></Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>Nombre Producto</th>
                                <th>Imagen</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto, index) => (
                                <tr key={index}>
                                    <td>{producto.nombre_producto}</td>
                                    <td>{producto.imagen}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>{producto.precio}</td>
                                    <td>
                                        <Link to = {`/productos/editar/${producto._id}`} className='btn btn-info'> <i className="fa-sharp fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() => eliminarProductos(producto._id)} className='btn btn-danger'> <i className="fa-sharp fa-solid fa-trash"></i> </button>

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
export default CompMostrarProductos;