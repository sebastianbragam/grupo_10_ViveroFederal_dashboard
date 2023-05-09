import { useState, useEffect } from "react";

function LastProductInDb(props) {

    // Creamos estados 
    const [product, setProduct] = useState([]);

    // API call
    const apiCall = (url, callback) => {

        fetch(url)
            .then(result => result.json())
            .then(data => callback(data))
            .catch(error => console.log(error));

    }

    // Cuando obtenemos la URL del detalle desde el componente Content, obtenemos los datos de la API
    useEffect(() => {

        if (props.productDetail) {

            apiCall('http://localhost:3002' + props.productDetail, (data) => {

                setProduct(data.product);

            });

        }


    }, [props.productDetail]);

    return (

        <div className="col-lg-6 mb-4">

            <div className="card shadow mb-4">

                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto: {product.name}</h5>
                </div>

                <div className="card-body">

                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={"http://localhost:3002" + product.imageUrl} style={{ width: "40rem" }} alt={"Imagen de " + product.name} />
                    </div>

                    <p>{product.description}</p>
                    
                </div>

            </div>

        </div>

    )

}

export default LastProductInDb;