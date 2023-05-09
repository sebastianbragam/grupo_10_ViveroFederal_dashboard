import React, { Component } from 'react';
import Row from "./subcomponents/Row";

class Products extends Component {

    constructor() {

        super();
        this.state = {
            moviesList: []
        };

    }

    render(props) {

        return (

            <div className="col-lg-6 mb-4">

                <div className="card shadow mb-4">

                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Todos los productos</h5>
                    </div>

                    <div className="card-body">

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Duración</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Género</th>
                                    <th scope="col">Premios</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.moviesList.map((movie, index) =>
                                        <Row key={index} title={movie.title} length={movie.length} rating={movie.rating} genre={movie.genre} awards={movie.awards} />
                                    )
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
                
            </div>

        )

    }


    apiCall(url, callback) {

        fetch(url)
            .then(result => result.json())
            .then(data => callback(data))
            .catch(error => console.log(error));

    }

    obtenerPeliculas = (data) => {

        let moviesList = data.data;

        // Convierto el género de objeto a string, para que lo acepte el traspaso entre componentes
        moviesList.forEach(movie => {
            if (movie.genre) {
                movie.genre = movie.genre.name
            } else {
                movie.genre = "Sin datos"
            }
        });

        this.setState({ moviesList: moviesList });

    }

    componentDidMount() {
        this.apiCall('http://localhost:3001/api/movies', this.obtenerPeliculas);
    }


}

export default Products;