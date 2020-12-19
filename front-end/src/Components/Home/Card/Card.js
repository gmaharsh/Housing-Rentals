import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ title, price, description, button, emailId, city, address, state, image, contactNumber }) {

    

    return (
        <div className="Card">
            {title && (
                    <div className="card__title">
                        <h1>{title}</h1>
                    </div>
                )
            }

            {image && (<div className="card__image">
            <img src={image} alt=""/>
            </div>) }
            
            {description && (
                    <div className="card__description">
                        <p>{description}</p>
                    </div>
                )
            }

            {emailId && (
                    <div className="card__description">
                        <p>{emailId}</p>
                    </div>
                )
            }

            {address && (
                    <div className="card__description">
                        <p>{address}</p>
                    </div>
                )
            }

            {state && (
                    <div className="card__description">
                        <p>{state}</p>
                    </div>
                )
            }

            {city && (
                    <div className="card__description">
                        <p>{city}</p>
                    </div>
                )
            }

            {price && (
                    <div className="card__description">
                        <p>{price}</p>
                    </div>
                )
            }

            {contactNumber && (
                    <div className="card__description">
                        <p>{contactNumber}</p>
                    </div>
                )
            }

            
            <div className="card__button">
                {button ? (
                    <Link to="/property">
                        <button onClick>Explore</button>
                    </Link>
                ) : null}
            </div>
            
        </div>
    )
}

export default Card
