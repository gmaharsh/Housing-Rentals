import React from 'react';
import './Home.css';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/SearchOutlined';


function Home() {
    return (
        <div className="home">
            <div className="home__logo">
                <img
                    src="http://uploads.webflow.com/57c6315d5410317a109bcf7b/57c6357c23bf505b1929160d_Offer1-color-logo.png"
                    alt=""
                />
            </div>
            <div className="home__search">
                <input className="home__searchText" type="text" placeholder="Enter Location" />
                <SearchIcon className="home__searchIcon" />
            </div>
            <div className="home__options">
                <h4>Post a Property</h4>
                <Avatar alt="Maharsh Hetal Gheewala" src="https://lh3.googleusercontent.com/ogw/ADGmqu8euMh8_2GTsY4OUVzSGnLlH9dmcpj9ctSBN4abUYY=s83-c-mo" />
            </div>
        </div>
    )
}

export default Home
