import React from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
                <div className="header__logo">
                        <img
                            src="http://uploads.webflow.com/57c6315d5410317a109bcf7b/57c6357c23bf505b1929160d_Offer1-color-logo.png"
                            alt=""
                        />
                </div>
            <div className="header__services">
                <h3>Buy</h3>
                <h3>Rent</h3>
                <h3>Mortgage</h3>
            </div>
            <div className="header__options">
                <h4>Post a Property</h4>
                <Avatar alt="Maharsh Hetal Gheewala" src="https://lh3.googleusercontent.com/ogw/ADGmqu8euMh8_2GTsY4OUVzSGnLlH9dmcpj9ctSBN4abUYY=s83-c-mo" />
            </div>
        </div>
    )
}

export default Header
