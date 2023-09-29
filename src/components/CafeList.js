import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CafeList = () => {
    const [cafes, setCafes] = useState([]);

    useEffect(() => {
        const fetchCafes = async () => {
            try {
                const response = await axios.get('http://localhost:3001/cafes');
                setCafes(response.data);
            } catch (error) {
                console.error("Error fetching the cafes:", error);
            }
        };

        fetchCafes();
    }, []);

    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Región</th>
                    </tr>
                </thead>
                <tbody>
                    {cafes.map(cafe => (
                        <tr key={cafe.id} onClick={() => onSelectCafe(cafe.id)}>
                            <td>{cafe.nombre}</td>
                            <td>{cafe.tipo}</td>
                            <td>{cafe.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CafeList;