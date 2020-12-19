import React from 'react';
import './PropertyCard.css';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import { Link } from 'react-router-dom';


function PropertyCard({ id, image, address1, city, state, price, baths, bedrooms, propertyType, title }) {

    
    return (
        <div className="propertyCard">
            <div className="property">
                <div className="property__image">
                    <img
                        src={image}
                        alt=""
                    />
                </div>
                <div className="property__details">
                    <div className="property__title">
                        <h3>{title}</h3>
                    </div>
                    <div className="property__address">
                        <p>{address1}, {city}</p>
                    </div>
                    <div className="property__orientations">
                        <p><BathtubIcon />{baths}</p>
                        <p><HotelIcon />{bedrooms}</p>
                    </div>
                    <div className="property__type">
                        <h3>Property Type:-</h3><p>{propertyType}</p>
                    </div>
                    <div className="property__price">
                        <h5>Price:-{price}</h5>
                        <Link to={`/detailProperty/${id}`}>
                            <button className="propety__moreButton">Explore More</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;
