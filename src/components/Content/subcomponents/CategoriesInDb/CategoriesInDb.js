import Category from './subcomponents/Category';
import { useEffect, useState } from 'react';

function CategoriesInDb(props) {

    // Creamos estados
    const [categories, setCategories] = useState([]);

    // Seteamos las categorías a pasar al componente Category una vez que estén listos los datos
    useEffect(() => {

        setCategories(props.categories);

    }, [props.categories]);

    return (

        <div className="col-lg-6 mb-4" >

            <div className="card shadow mb-4">

                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold">Productos por categoría</h5>
                </div>

                <div className="card-body genre-card">

                    <div className="row">

                        { categories.map((category, index) => <Category key={index} {...category} />)}

                    </div>

                </div>

            </div>

        </div>

    )

}

export default CategoriesInDb;