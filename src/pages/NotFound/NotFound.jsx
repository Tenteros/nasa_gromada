import React from 'react';
import Header from "../../components/Header/Header";
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="content">
                <h1>404</h1>
                <p>Ой, здається такої сторінки не існує</p>
                <button onClick={() => window.location.href = '/'}>Повернутись на головну</button>
            </div>
        </>
    );
};

export default NotFound;
