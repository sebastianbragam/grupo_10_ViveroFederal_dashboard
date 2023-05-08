import React, { Component } from 'react';
import Genre from './subcomponents/Genre';

class GenresInDb extends Component {

    constructor() {

        super();
        this.state = {
            genresList: []
        };

    }

    render() {

        return (

            <div className="col-lg-6 mb-4">

                <div className="card shadow mb-4">

                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={() => this.cambiarFondoCard()} onMouseLeave={() => this.cambiarFondoCard()} >Genres in Database</h5>
                    </div>
                    
                    <div className="card-body genre-card">

                        <div className="row">

                            {this.state.genresList.map((genre, index) => <Genre key={index} {...genre} />) /* acá usamos destructuring para enviar todas las props del género al componente */ } 

                        </div>

                    </div>

                </div>

            </div>

        );

    }

    apiCall(url, callback) {

        fetch(url)
            .then(result => result.json())
            .then(data => callback(data))
            .catch(error => console.log(error));

    }

    obtenerGeneros = (data) => {
        this.setState({genresList: data.data});
    }

    componentDidMount() {
        this.apiCall('http://localhost:3001/api/genres', this.obtenerGeneros);
    }

    cambiarFondoCard() {

        document.querySelector('.genre-card').classList.toggle('bg-secondary');

    }

}

export default GenresInDb;