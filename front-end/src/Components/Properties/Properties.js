import React, { useEffect, useState } from 'react';
import './Properties.css';
import PropertyCard from './Card/PropertyCard';
import { useStateValue } from './../../StateProvider';
import Auth from '../../Auth';


function Properties() {

    const [{ user }, dispatch] = useStateValue();

    console.log(user)

    const [data, setData] = useState([]);
    const [dataCopy, setDataCopy] = useState([])
    const [bedrooms, setBedrooms] = useState();
    const [location, setLocation] = useState();

    console.log("data", data);
    const getData = () => {
        fetch('homes.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
                setDataCopy(myJson)
            });
    }

    useEffect(() => {
        getData()
    }, []);
    
    const handleChange = (event) => {
        event.preventDefault()
        if (event.target.name == "bedrooms") {
            console.log("bedroom if>>>", event.target.value)
            setBedrooms(event.target.value);
            filter();
        }
        if (event.target.name == "location") {
            console.log("Location if>>>", event.target.value)
            setLocation(event.target.value);
            filter();
        }
        
  
    }
    const filter = () => {
        let listings = dataCopy
        let filtered = [];

        for (let i = 0; i < listings.length; i++) {
            if (bedrooms || location) {
                if (
                    (bedrooms ? (listings[i].property.numberBedrooms - 1) >= bedrooms : true) &&
                    (location ? listings[i].property.address.city.toLowerCase() === location.toLowerCase() : true)
                ) {
                    filtered.push(listings[i]);
                }
            } else {
                filtered.push(listings[i]);
            }
        }

        setData(filtered);
    }
    
    return (
        <div className="properties">
            {!user ? (
                <Auth />
            ) : (
                <>
                    <div className="properties__title">
                        <h3>Find the properties which suits you the best:- </h3>
                    </div>
                    <div className="properties__filter">
                        <form className="properties__filter">
                            <h4>Filter:-</h4>
                            <div className="properties__filter_bedrooms">
                                <select name="bedrooms" onChange={handleChange} value={bedrooms}>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="properties__filter_location">
                                <input
                                    name="location"
                                    type="text"
                                    onChange={(event) => handleChange(event)}
                                    value={location}
                                    placeholder="Enter City" />
                                    
                            </div>
                            <div className="properties__filter_submit">
                                
                            </div>
                        </form>
                    </div>
                    <div className="properties__suggestions">
                        {data.map((d) => {
                            return (<PropertyCard
                                id={d.id}
                                title={d.property.description}
                                image={d.property.primaryImageUrl}
                                address1={d.property.address.addressLine1}
                                city={d.property.address.city}
                                state={d.property.state}
                                price={d.price}
                                bedrooms={d.property.numberBaths}
                                baths={d.property.numberBaths}
                                propertyType={d.property.propertyType}
                            />)
                        })}
                    </div>
                   
                </>
                
            )}
        </div>
    )
}

export default Properties;

{/* 
<div className="properties__title">
                <h3>Find the properties which suits you the best:- </h3>
            </div>
            <div className="properties__filter">
                <form className="properties__filter">
                    <h4>Filter:-</h4>
                    <div className="properties__filter_bedrooms">
                        <select name="bedrooms" onChange={handleChange} value={bedrooms}>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="properties__filter_location">
                        <input
                            name="location"
                            type="text"
                            onChange={(event) => handleChange(event)}
                            value={location}
                            placeholder="Enter City" />
                            
                    </div>
                    <div className="properties__filter_submit">
                        
                    </div>
                </form>
            </div>
            <>
            <div className="properties__suggestions">
                {data.map((d) => {
                    return (<PropertyCard
                        id={d.id}
                        title={d.property.description}
                        image={d.property.primaryImageUrl}
                        address1={d.property.address.addressLine1}
                        city={d.property.address.city}
                        state={d.property.state}
                        price={d.price}
                        bedrooms={d.property.numberBaths}
                        baths={d.property.numberBaths}
                        propertyType={d.property.propertyType}
                    />)
                })}
            </div>
            </>
        </div> */}