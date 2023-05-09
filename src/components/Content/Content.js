import ContentRowData from './subcomponents/ContentRowData/ContentRowData';
import LastMovieInDb from './subcomponents/LastMovieInDb';
import GenresInDb from './subcomponents/GenresInDb/GenresInDb';
import Movies from './subcomponents/Movies/Movies';
import SearchMovies from './subcomponents/SearchMovies';
import NotFound from './subcomponents/NotFound';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Content() {

    // Creamos estados para movies
    const [productsData, setProductsData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [allData, setAllData] = useState([]);

    // API call
    const apiCall = (url, callback) => {

        fetch(url)
            .then(result => result.json())
            .then(data => callback(data))
            .catch(error => console.log(error));

    }

    // Llamado a la API para recuperar los datos de los totales
    useEffect(() => {

        apiCall('http://localhost:3002/api/products', (data) => {

            setProductsData(data);

        });

        apiCall('http://localhost:3002/api/users', (data) => {

            setUsersData(data);

        });

    }, []);

    useEffect(() => {

        let info = [];

        if (productsData.length !== 0 && usersData.length !== 0) {

            let productsInfo = {
                titulo: "Productos totales",
                cifra: productsData.meta.count.toString(),
                icono: "fas fa-seedling fa-2x text-gray-300",
                color: "success"
            };
            info.push(productsInfo);
    
            let usersInfo = {
                titulo: "Usuarios totales",
                cifra: usersData.meta.count.toString(),
                icono: "fas fa-user fa-2x text-gray-300",
                color: "primary"
            };
            info.push(usersInfo);
    
            let categoriesInfo = {
                titulo: "Categorías totales",
                cifra: productsData.countByCategory.length.toString(),
                icono: "fas fa-bars fa-2x text-gray-300",
                color: "warning"
            };
            info.push(categoriesInfo);

            setAllData(info);

        }

    }, [productsData, usersData]);

    return (

        <div className="container-fluid">

            <ContentRowData data={allData} />

            <div className="row">

                {/* Para mostrar contenido específico, sino Home */}
                <Routes>

                    <Route path='/' element={

                        <>
                            <LastMovieInDb />
                            <GenresInDb />
                        </>

                    } />

                    <Route path='/last' Component={LastMovieInDb} />
                    <Route path='/genres' Component={GenresInDb} />
                    <Route path='/movies' Component={Movies} />
                    <Route path='/search' Component={SearchMovies} />
                    <Route path='*' Component={NotFound} />

                </Routes>

            </div>


            {/* Cuando estamos en Home, también renderizo una fila con el componente Movies, sino no renderizo nada */}
            <Routes>

                <Route path='/' element={

                    <div className="row">

                        <Movies />
                        <SearchMovies />

                    </div>

                } />

                <Route path='*' element />

            </Routes>

        </div>

    )

}

export default Content;