import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CafeDetail = ({ cafeId, onBack }) => {
    const [cafeDetail, setCafeDetail] = useState(null);

    useEffect(() => {
        const fetchCafeDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/cafes/${cafeId}`);
                setCafeDetail(response.data);
            } catch (error) {
                console.error("Error fetching the cafe detail:", error);
            }
        };

        fetchCafeDetail();
    }, [cafeId]);

    if (!cafeDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <button className="btn btn-secondary mb-3" onClick={onBack}>Volver a la lista</button>
            <h2>{cafeDetail.nombre}</h2>
            <img src={cafeDetail.imagen} alt={cafeDetail.nombre} className="img-fluid mb-3"/>
            <p><strong>Fecha de Cultivo:</strong> {cafeDetail.fecha_cultivo}</p>
            <p><strong>Notas:</strong> {cafeDetail.notas}</p>
            <p><strong>Altura:</strong> {cafeDetail.altura} m</p>
        </div>
    );
}

export default CafeDetail;