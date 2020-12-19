import React, { useEffect, useState } from 'react';
import './Home.css';
import About from './About/About';
import Card from './Card/Card';
import { useStateValue } from '../../StateProvider';


function Home() {

    const [data, setData] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    console.log(user)

    const getData=()=>{
        fetch('homes.json'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }
        )
        .then(function(response){
            
            return response.json();
        })
        .then(function(myJson) {
            
            setData(myJson)
        });
    }
    useEffect(()=>{
        getData()
    },[])

    

    return (
        <div className="home">
            <div className="home__banner">
                <img
                    className="home__bannerImage"
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                />
                {/* <div className="home__search">
                    <div className="home__searchInput">
                        <input className="" type="text" placeholder="Search for you Neightbourhood or City?" />
                    </div>
                    <div className="home__searchIcon">
                        <SearchIcon fontSize="medium" />
                    </div>  
                </div> */}
            </div>
            <div className="home__about">
                <About />
            </div>
            <div className="home__suggestion">
                <div className="home__suggestionTitle">
                    <h3>Look at some of our properties</h3>
                </div>
                <div className="home__suggestionCards">
                    {data.map((d) => (
                        <Card
                            image={d.property.primaryImageUrl}
                            address={d.property.address.addressLine1}
                            city={d.property.address.city}
                            state={d.property.state}
                            button={true}
                        />
                    ))}
                </div>
            </div>
            
            <div className="home__contact">
                <div className="home__ContactTitle">
                    <h3>Contact Us</h3>
                </div>
                <div className="home__ContactInfo">
                    <Card
                        emailId="steve@offer1.com"
                        contactNumber="+1 (312)-937-4488"
                        address="9th Ave San Diego, CA 92101"
                        button={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
