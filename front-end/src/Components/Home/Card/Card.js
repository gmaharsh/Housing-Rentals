import React from 'react';
import './Card.css';

function Card({ title, description}) {
    return (
        <div className="Card">
            <div className="card__title">
                <h1>{title}</h1>
            </div>
            <div className="card__description">
                <p>{description}</p>
            </div>
            <div className="card__button">
                <button>Find More</button>
            </div>
        </div>
    )
}

export default Card
