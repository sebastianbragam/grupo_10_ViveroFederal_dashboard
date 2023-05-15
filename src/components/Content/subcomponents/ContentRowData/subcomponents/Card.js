import PropTypes from "prop-types";

function Card(props) {

    return (

        <div className="col-md-4 mb-4">
            <div className={"card border-left shadow h-100 py-2"}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={"text-xs font-weight-bold text-uppercase mb-1"}>{props.titulo}</div>
                            <div className="h5 mb-0 font-weight-bold">{props.cifra}</div>
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
    cifra: PropTypes.string.isRequired
};

export default Card;