import React from 'react';
import './Home.css';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import About from './About/About';

function Home() {
    return (
        <div className="home">
            <div className="home__banner">
                <img
                    className="home__bannerImage"
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                />
                <div className="home__search">
                    <div className="home__searchInput">
                        <input className="" type="text" placeholder="Search for you Neightbourhood or City?" />
                    </div>
                    <div className="home__searchIcon">
                        <SearchIcon fontSize="medium" />
                    </div>  
                </div>
            </div>
            <div className="home__about">
                <About />
            </div>
            <div className="home__suggestion">
                <div className="home__suggestionTitle">

                </div>
            </div>
        </div>
    )
}

export default Home
