import React from 'react';
import './Footer.scss';

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='footer'>
            <div>Movie App</div>
            <div>©{year}, Movie, Inc.</div>
        </div>
    );
};