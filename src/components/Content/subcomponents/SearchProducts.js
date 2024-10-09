import React from 'react';
import { useState, useEffect, useRef } from 'react';

function SearchProducts() {

    // Creamos estados para movies y keyword
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState([]);
    const [loading, setLoading] = useState([false]);

    // Recuperamos elementos del DOM
    const keywordInput = useRef();

    // API call
    const apiCall = (url, callback) => {

        fetch(url)
            .then(result => result.json())
            .then(data => callback(data))
            .catch(error => console.log(error));

    }

    // Llamado a la API cuando se actualiza el componente keyword
    useEffect(() => {

        setLoading([true]);

        apiCall('https://viverofederal.sebastianbraga.com.ar/api/products?search=' + keyword, (data) => {

            setProducts(data.products);
            setLoading([false]);

        });

    }, [keyword]);

    // Lógica al enviar el formulario
    const buscarProductos = e => {

        // Prevenimos submit
        e.preventDefault();

        // Actualizamos keyword para que se ejecute el useEffect de arriba
        setKeyword([keywordInput.current.value]);

    }

    return (

        <div className="col-lg-6 mb-4">

            <div className="card shadow mb-4">

                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold">Buscar productos</h5>
                </div>

                <div className="card-body genre-card">

                    <div className="container-fluid">

                        <div className="row my-4">

                            <div className="col-12 col-md-6">

                                {/* Buscador */}
                                <form method="GET" onSubmit={buscarProductos}>

                                    <div className="form-group">
                                        <label htmlFor="">Buscar por nombre o descripción:</label>
                                        <input type="text" className="form-control" ref={keywordInput} />
                                    </div>

                                    <button className="btn btn-info">Search</button>

                                </form>

                            </div>

                        </div>

                        {keyword.toString() !== '' ?

                            !loading[0] ?

                                <>

                                    {loading[0] && <div> Cargando... </div>}

                                    < div className="row">

                                        <div className="col-12">
                                            <h2>Productos para la palabra: {keyword}</h2>
                                        </div>

                                        {/* Listado de productos */}
                                        {
                                            products && products.map((product, i) => {

                                                return (

                                                    <div className="col-sm-6 col-md-3 my-4" key={i}>

                                                        <div className="card shadow mb-4">

                                                            <div className="card-header py-3">
                                                                <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
                                                            </div>

                                                            <div className="card-body">

                                                                <p>{product.description}</p>

                                                            </div>

                                                        </div>

                                                    </div>

                                                )
                                            })
                                        }

                                    </div>

                                    {!loading[0] && products.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos.</div>}

                                </>

                                :

                                <div> Cargando... </div>

                            :

                            <div> Inserte el término a buscar </div>

                        }

                    </div >

                </div>

            </div>

        </div>

    )

}

export default SearchProducts;
