import ContentRowMovies from './subcomponents/ContentRowMovies/ContentRowMovies';
import LastMovieInDb from './subcomponents/LastMovieInDb';
import GenresInDb from './subcomponents/GenresInDb/GenresInDb';
import Movies from './subcomponents/Movies/Movies';
import SearchMovies from './subcomponents/SearchMovies';
import NotFound from './subcomponents/NotFound';
import { Routes, Route } from 'react-router-dom';

let moviesData = [ // Datos inventados para mostrar nomás
    {
        titulo: "Movies in Database",
        cifra: "21",
        icono: "fas fa-film fa-2x text-gray-300",
        color: "primary"
    },
    {
        titulo: "Total Awards",
        cifra: "79",
        icono: "fas fa-award fa-2x text-gray-300",
        color: "success"
    },
    {
        titulo: "Actors Quantity",
        cifra: "49",
        icono: "fas fa-user fa-2x text-gray-300",
        color: "warning"
    }
];

function Content() {

    return (

        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <ContentRowMovies moviesData={moviesData} />

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

                    </div>

                } />

                <Route path='*' element />

            </Routes>

        </div>

    )

}

export default Content;