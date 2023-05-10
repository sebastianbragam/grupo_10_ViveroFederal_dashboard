import PropTypes from "prop-types";

function Row(props) {

    return (

        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.category.name}</td>
        </tr>

    )

}

Row.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

Row.defaultProps = {
    id: "-",
    name: "-",
    description: "-"
}

export default Row;