import PropTypes from "prop-types";

function Card(props) {

    return (

        <div className="col-md-4 mb-4">
            <div className={"card border-left-" + props.color + " shadow h-100 py-2"}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={"text-xs font-weight-bold text-" + props.color + " text-uppercase mb-1"}>{props.titulo}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                        </div>
                        <div className="col-auto">
                            <i className={props.icono}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    cifra: PropTypes.string.isRequired,
    icono: PropTypes.oneOf(["fas fa-film fa-2x text-gray-300", "fas fa-award fa-2x text-gray-300", "fas fa-user fa-2x text-gray-300"]).isRequired
};

export default Card;