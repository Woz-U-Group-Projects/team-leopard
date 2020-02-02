import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <h1>Error page not found</h1>
            <h3><Link to="/home">Return home</Link></h3>
        </>
    );
}

export default NotFound