import React from 'react';
import { useState, useEffect, useRef } from 'react';

function SearchProducts() {

    // Creamos estados para movies y keyword
    const [movies, setMovies] = useState([]);
    const [keyword, setKeyword] = useState([]);
    const [loading, setLoading] = useState([false]);

    // Recuperamos elementos del DOM
    const keywordInput = useRef();

    // Credenciales de API
    const apiKey = '68c1fdda';

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

        apiCall('http://www.omdbapi.com/?s=' + keyword + '&apikey=' + apiKey, (data) => {

            setMovies(data.Search);
            setLoading([false]);

        });

    }, [keyword]);

    // Lógica al enviar el formulario
    const buscarPelicula = e => {

        // Prevenimos submit
        e.preventDefault();

        // Actualizamos keyword para que se ejecute el useEffect de arriba
        setKeyword([keywordInput.current.value]);

    }

    return (

        <div className="col-lg-6 mb-4">

            <div className="card shadow mb-4">

                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Buscar productos</h5>
                </div>

                <div className="card-body genre-card">

                    <div className="container-fluid">

                        {

                            apiKey !== '' ?

                                <>

                                    <div className="row my-4">

                                        <div className="col-12 col-md-6">

                                            {/* Buscador */}
                                            <form method="GET" onSubmit={buscarPelicula}>

                                                <div className="form-group">
                                                    <label htmlFor="">Buscar por título:</label>
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
                                                        <h2>Películas para la palabra: {keyword}</h2>
                                                    </div>

                                                    {/* Listado de películas */}
                                                    {
                                                        movies && movies.map((movie, i) => {

                                                            return (

                                                                <div className="col-sm-6 col-md-3 my-4" key={i}>

                                                                    <div className="card shadow mb-4">

                                                                        <div className="card-header py-3">
                                                                            <h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
                                                                        </div>

                                                                        <div className="card-body">

                                                                            <div className="text-center">
                                                                                <img
                                                                                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                                                                    src={movie.Poster}
                                                                                    alt={movie.Title}
                                                                                    style={{ width: '90%', height: '400px', objectFit: 'cover' }}
                                                                                />
                                                                            </div>

                                                                            <p>{movie.Year}</p>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            )
                                                        })
                                                    }

                                                </div>

                                                {!loading[0] && !movies && <div className="alert alert-warning text-center">No se encontraron películas.</div>}

                                            </>

                                            :

                                            <div> Cargando... </div>

                                        :

                                        <div> Inserte el término a buscar </div>

                                    }

                                </>

                                :

                                <div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>

                        }

                    </div >

                </div>

            </div>

        </div>

    )

}

export default SearchProducts;
