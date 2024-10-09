import { useEffect, useState } from "react";
import Row from "./subcomponents/Row";

function Products(props) {

    // Creamos estados
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState([1]);
    const [morePages, setMorePages] = useState([]);

    // API call
    const apiCall = (url, callback) => {

        fetch(url)
            .then(result => result.json())
            .then(data => callback(data))
            .catch(error => console.log(error));

    }

    // Obtenemos los datos de los productos a pasar al componente Row una vez que estén listos
    useEffect(() => {

        apiCall('https://viverofederal.sebastianbraga.com.ar/api/products', (data) => {

            setProducts(data.products);

            // Seteamos esta variable para saber si existen más páginas
            if (data.meta.next) {
                setMorePages(true);
            }
            else {
                setMorePages(false);
            }

        });

    }, []);

    // Actualizamos los datos cuando cambia el número de página
    useEffect(() => {

        apiCall('https://viverofederal.sebastianbraga.com.ar/api/products?page=' + page, (data) => {

            setProducts(data.products);

            // Seteamos esta variable para saber si existen más páginas
            if (data.meta.next) {
                setMorePages(true);
            }
            else {
                setMorePages(false);
            }

        });

    }, [page]);

    // Función que pasa a la página siguiente
    const nextPage = () => {

        setPage([parseInt(page) + 1]);

    }

    // Función que pasa a la página anterior
    const prevPage = () => {

        setPage([parseInt(page) - 1]);

    }

    return (

        <div className="col-lg-6 mb-4">

            <div className="card shadow mb-4">

                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold">Todos los productos</h5>
                </div>

                <div className="card-body">

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Categoría</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) =>
                                    <Row key={index} {...product} />
                                )
                            }
                        </tbody>
                    </table>

                    <div className="button-section">

                        {/*<!-- Botón página anterior -->*/}
                        {page[0] !== 1 && <button className="btn btn-outline-secondary btn-sm" onClick={prevPage}>Página anterior</button>}

                        {/*<!-- Botón página siguiente -->*/}
                        {morePages && <button className="btn btn-outline-secondary btn-sm" onClick={nextPage}>Página siguiente</button>}

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Products;