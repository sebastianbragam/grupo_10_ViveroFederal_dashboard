import PropTypes from "prop-types";

function Row(props) {

    return (

        <tr>
            <th scope="row">{props.title}</th>
            <td>{props.length}</td>
            <td>{props.rating}</td>
            <td>{props.genre}</td>
            <td>{props.awards}</td>
        </tr>

    )

}

Row.propTypes = {
    title: PropTypes.string.isRequired,
    length: PropTypes.number,
    rating: PropTypes.string,
    genre: PropTypes.string,
    awards: PropTypes.number
}

Row.defaultProps = {
    length: "-",
    rating: "-",
    genre: "-",
    awards: "-"
}

export default Row;