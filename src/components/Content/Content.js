import ContentRowData from './subcomponents/ContentRowData/ContentRowData';
import LastProductInDb from './subcomponents/LastProductInDb';
import CategoriesInDb from './subcomponents/CategoriesInDb/CategoriesInDb';
import Products from './subcomponents/Products/Products';
import SearchProducts from './subcomponents/SearchProducts';
import NotFound from './subcomponents/NotFound';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Content() {

    // Creamos estados 
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

        apiCall('https://viverofederal.sebastianbraga.com.ar/api/products', (data) => {

            setProductsData(data);

        });

        apiCall('https://viverofederal.sebastianbraga.com.ar/api/users', (data) => {

            setUsersData(data);

        });

    }, []);

    // Cuando tengo los datos de la API para productos y usuarios, actualizo los datos que utilizan los componentes
    useEffect(() => {

        let info = [];

        if (productsData.length !== 0 && usersData.length !== 0) {

            let productsInfo = {
                titulo: "Productos totales",
                cifra: productsData.meta.count.toString(),
                icono: "fas fa-seedling fa-2x"
            };
            info.push(productsInfo);

            let usersInfo = {
                titulo: "Usuarios totales",
                cifra: usersData.meta.count.toString(),
                icono: "fas fa-user fa-2x"
            };
            info.push(usersInfo);

            let categoriesInfo = {
                titulo: "Categorías totales",
                cifra: productsData.countByCategory.length.toString(),
                icono: "far fa-list-alt fa-2x"
            };
            info.push(categoriesInfo);

            setAllData(info);

        }

    }, [productsData, usersData]);

    return (

        <div className="container-fluid">

            {/* Para mostrar contenido específico, sino Home */}
            <Routes>

                <Route path='/' element={

                    <>

                        <div className="home-title">
                            <h5 className="m-0 font-weight-bold">Bienvenido al dashboard de Vivero Federal</h5>
                        </div>

                        <ContentRowData data={allData} />

                        <div className="home-indication">
                            <p className="m-0 font-weight-bold">Por favor, selecciona una opción en el menú lateral para verla en detalle.</p>
                        </div>

                    </>

                } />

                <Route path='/lastProduct' element={

                    <LastProductInDb productDetail={productsData.products ? productsData.products[0].detail : null} />

                } />
                <Route path='/categories' element={

                    <CategoriesInDb categories={productsData.countByCategory ? productsData.countByCategory : []} />

                } />
                <Route path='/allProducts' element={

                    <Products />

                } />
                <Route path='/search' Component={SearchProducts} />
                <Route path='*' Component={NotFound} />

            </Routes>

        </div>

    )

}

export default Content;