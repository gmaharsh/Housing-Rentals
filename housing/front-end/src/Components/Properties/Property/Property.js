import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Property.css';
import { FacebookButton } from "react-social";
import { useStateValue } from '../../../StateProvider';
import Auth from '../../../Auth';
import { Link } from 'react-router-dom';


function Property() {

    let url = "https://housing-rentals.web.app/"
    let location = useLocation();
    const urlLocation = location.pathname.split('/detailProperty/');
    const id = (urlLocation[1] - 1);

    const [{ user }, dispatch] = useStateValue();

    const [data, setData] = useState("");
    const [titleCompany, setTitleCompany] = useState("");
    const [escrowCompany, setEscrowCompany] = useState("")
    const [includedItems, setIncludedItems] = useState("");
    const [listingAgent, setListingAgent] = useState("");
    const [property, setProperty] = useState("");
    const [owner, setOwner] = useState("");
    const [address, setAddress] = useState("");

    console.log(user)
    
    const getData = (id) => {
        fetch('./../homes.json'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson[id])
            setTitleCompany(myJson[id].titleCompany)
            setEscrowCompany(myJson[id].escrowCompany)
            setIncludedItems(myJson[id].includedItems[0])
            setListingAgent(myJson[id].listingAgent.user)
            setProperty(myJson[id].property)
            setOwner(myJson[id].property.primaryOwner.user)
            setAddress(myJson[id].property.address)
        });
    }

    useEffect(() => {
        getData(id)
    }, [id]);



    return (
        // <div className="property__detail">
        //     {!user ? (
        //         <Auth />
        //     ) : (
                    
                        
        //         )
        // </div>

        <div className="property__details">
            { !user ? (
                <Auth />
            ) : (
                    <div className="property">
                        <div className="propety__image">
                            <img
                                src={property.primaryImageUrl}
                                alt=""
                            />
                            <div className="property__contact">
                                <FacebookButton url={url} appId={334455380307165}>
                                    {" Share on Facebook "}
                                </FacebookButton>
                                <div className="send__message">
                                    <Link to= "/message" >
                                        <button>Send Message to Listing Agent</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="property__details">
                            <div className="property__row">
                                <div className="property__items">
                                    <h3>Status:-</h3>
                                    <p>{data.state}</p>
                                </div>
                                <div className="property__items">
                                    <h3>Owner:-</h3>
                                    <p>{owner.firstName} {owner.lastName}</p>
                                </div>
                                <div className="property__items">
                                    <h3>Owner Contact:-</h3>     
                                    <p>{owner.email}</p>
                                </div>
                            </div>
                            <div className="property__row">
                                <div className="property__items">
                                    <h3>Address:-</h3>
                                    <p>{address.addressLine1}</p>
                                </div>
                                <div className="property__items">
                                    <h3>City:-</h3>
                                    <p>{address.city}</p>
                                </div>
                                <div className="property__items">
                                    <h3>State:-</h3>     
                                    <p>{address.state}</p>
                                </div>
                            </div>
                            <div className="property__row">
                                <div className="property__items">
                                    <h3>Price:-</h3>
                                    <p>$ {data.price}</p>
                                </div>
                                <div className="property__items">
                                    <h3>Bathrooms:-</h3>
                                    <p>{property.numberBaths}</p>
                                </div>
                                <div className="property__items">
                                    <h3>Bedrooms:-</h3>     
                                    <p>{property.numberBedrooms}</p>
                                </div>
                            </div>
                            <div className="property__row">
                                <div className="property__items">
                                    <h3>Property Type:-</h3>
                                    <p>{property.propertyType}</p>
                                </div>
                                <div className="property__items">
                                    <h3>Owner Type:-</h3>
                                    <p>{property.ownerType}</p>
                                </div>
                                <div className="property__items">
                                    <h3>Size:-</h3>     
                                    <p>{property.squareFeet}</p>
                                </div>
                            </div>
                            <div className="property__row">
                                <div className="property__items">
                                    <h3>Included Items:-</h3>
                                    <p>{includedItems ? includedItems.name : null}</p>
                                </div>
                                <div className="property__items">
                                    <h3>Listing Agent:-</h3>
                                    <p>{listingAgent.firstName}</p>
                                </div>
                                <div className="property__items">
                                    <h3>Conatact Listing Agent:-</h3>     
                                    <p>{listingAgent.email}</p>
                                </div>
                            </div>
                            <div className="property__row">
                                <div className="property__items">
                                    <h3>Title Company:-</h3>
                                    <p>{titleCompany.name}</p>
                                </div>
                                <div className="property__items">
                                    <h3>Officer Name:-</h3>
                                    <p>{titleCompany.officerName}</p>
                                </div>
                                <div className="property__items">
                                    <h3>Escrow Company:-</h3>     
                                    <p>{escrowCompany.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>    
            )
        }
        </div>
    )
}

export default Property;
