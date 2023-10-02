import './login.css';
import React, { useState } from 'react';
import { FormattedMessage } from "react-intl";


export default function Login() {

    const [user, setUser] = React.useState();
    const [password, setPassword] = React.useState();
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const datos = {
            "login": user,
            "password": password
        };

        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
    
            .then(response => response.json())
            .then(data => data.status === 'success' ? window.location.href = '/cafes' : setError(<FormattedMessage id="Authentication error" />))
    }

    function handleSubmit2(e) {
        e.preventDefault();
        setError(<FormattedMessage id="Action cancel" />)
    }

    // return a component for a login form
    return (
    <div className="container">

        <div className="row">
            <div className="col-sm">
                <h1 id="titulo"><FormattedMessage id="The magical scent" /></h1>
                <hr class='linea'></hr>
                <div><img id="imagenInicio" src='images/imagen1.png' alt='Granos de cafes'/></div>
                <hr class='linea'></hr>
                <form id="formCompleto">
                <p><FormattedMessage id="Login" /></p>
                    <div id='formDentro'>
                    
                    <div className="form-group">
                        <p id="nombre"><FormattedMessage id="User" /> </p>
                        <input className="inputLogin" type="text" id="login" onChange={data => setUser(data.target.value)} />
                    </div>
                    <div className="form-group">
                        <p id="contraseña"><FormattedMessage id="Password" /> </p>
                        <input className="inputLogin" type="password"  onChange={data => setPassword(data.target.value)} />
                    </div>
                    <button id="aceptar" className="boton" type="submit"onClick={handleSubmit}><FormattedMessage id="Submit" /></button>
                    <button id="cancelar" className="boton" type="submit" onClick={handleSubmit2}><FormattedMessage id="Cancel" /></button>
                    <p id='error'>{error}</p>
                </div>

                </form>
            </div>
        </div>
        <div className="divAbajo"><p className="abajo">Contact us: +57 3005207537 - info@elaromamagico.com - @elaromamagico</p></div>
        
    </div>
    )
}