import Card from "./subcomponents/Card";

function ContentRowData(props) {

    return (

        <div className="row">

            {props.data.map((data, i) => <Card key={data.titulo + i} titulo={data.titulo} cifra={data.cifra} color={data.color} icono={data.icono} />)}

        </div>

    )

}

export default ContentRowData;