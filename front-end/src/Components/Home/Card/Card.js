import { Button } from '@material-ui/core';
import React from 'react';
import './Card.css';

function Card({ title, description, button, email, contactNumber, address }) {
    
    return (
        <div className="Card">
            <div className="card__title">
                <h1>{title}</h1>
            </div>
            <div className="card__description">
                <p>{description}</p>
            </div>
            <div className="card__button">
                {button ? (<button>Explore</button> ):  null}
            </div>
            <div className="card__contact">
                <h1>{email}</h1>
            </div>
        </div>
    )
}

export default Card
