import React from "react";
import './tabla.css';
import { FormattedDate, FormattedMessage } from "react-intl";


export default function Cafes() {
    const [coffees, setCoffees] = React.useState([]);
    const [cafe, setCoffee] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:3001/cafes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setCoffees(data));
    });

    const handleCoffeeSelection = (cafe) => {
        fetch(`http://localhost:3001/cafes/${cafe.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setCoffee(data))
    }

    const tableRows = coffees.map((cafe) => {

        return (
            
            <tr id="tablaHover"key={cafe.id} onClick={() => handleCoffeeSelection(cafe)}>
                <th scope="row">{cafe.id}</th>
                <td>{cafe.nombre}</td>
                <td>{cafe.tipo}</td>
                <td>{cafe.region}</td>
            </tr >
        );
    });

    function descripcion(cafe) {
        return (
            <div id="cardCafe">
                <p id="nombreCafe">{cafe.nombre}</p>
                <p id="fecha">{cafe.fecha_cultivo && <FormattedDate
                    value={new Date(cafe.fecha_cultivo)}
                    year="numeric"
                    day="numeric"
                    month="numeric"
                    
                    
                    />}
                </p>
                <img id="imagenCafe" src={cafe.imagen} alt="cafe"/>
                <p id="notas"><FormattedMessage id="Notes" /></p>
                <p id="textAdicional">{cafe.notas}</p>
                <p id="alturaCafe"><FormattedMessage id="Grown at height of" /> {cafe.altura} <FormattedMessage id="masl" /></p>
            </div>
        )
    }

    function mTable() {
        return (
       
            <div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr id="TablaPersonalizada">
                        <th scope="col" >#</th>
                        <th scope="col" ><FormattedMessage id="Name" /></th>
                        <th scope="col" ><FormattedMessage id="Type" /></th>
                        <th scope="col" ><FormattedMessage id="Region" /></th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {tableRows}
                        </tbody>

                </table>

            </div>
        )
    }

    

    return (
  
            <div className="container">
                <h1 id="titulo"><FormattedMessage id="The magical scent" /></h1>
                <hr class='linea'></hr>
                <div><img id="imagenInicio" src='images/imagen1.png' alt='Granos de cafes'/></div>
                <hr class='linea'></hr>
                <div id="tablaHecha">
                {mTable()}

                <div>
                    {cafe && descripcion(cafe)}
                </div>
                </div>
                <div className="divAbajo"><p className="abajo">Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p></div>
            </div>
   

  );
}