import React from 'react';
import Card from '../Card/Card';
import './About.css';
function About() {
    return (
        <div className="about">
            <div className="about__heading">
                <h3>How we can help you</h3>
            </div>
            <div className="about__cards">
                <Card
                    title="Buy"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                    button={true}
                />
                <Card
                    title="Rent"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                    button={true}
                />
                <Card
                    title="Mortgage"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                    button={true}
                />
            </div>
        </div>
    )
}

export default About
