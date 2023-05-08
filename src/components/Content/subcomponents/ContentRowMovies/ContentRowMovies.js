import Card from "./subcomponents/Card";

function ContentRowMovies(props) {

    return (

        <div className="row">

            {props.moviesData.map((movie, i) => <Card key={movie.titulo + i} titulo={movie.titulo} cifra={movie.cifra} color={movie.color} icono={movie.icono} />)}

        </div>

    )

}

export default ContentRowMovies;