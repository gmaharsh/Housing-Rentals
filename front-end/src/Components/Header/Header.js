import React from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';


function Header() {

    const [{user}, dispatch] = useStateValue();


    return (
        <div className="header">
            <Link to="/">
                <div className="header__logo">
                    <img
                        src="http://uploads.webflow.com/57c6315d5410317a109bcf7b/57c6357c23bf505b1929160d_Offer1-color-logo.png"
                        alt=""
                    />
                </div>
            </Link>
            <Link to="/property">
                <div className="header__services">
                    <h3>Buy</h3>
                    <h3>Rent</h3>
                    <h3>Mortgage</h3>
                </div>
            </Link>
            <div className="header__options">
                <h4>Post a Property</h4>
                <Link to="/login">
                    <Avatar src={user?.photoURL} />
                </Link>
            </div>
        </div>
    )
}

export default Header
