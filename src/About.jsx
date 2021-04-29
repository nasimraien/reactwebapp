import React from 'react';
import Common from './Common';
import Image from './about.png';

const About = () =>{
    return(<>
    <Common name="Welcome to About page"
        imgsrc={Image}
        visit="./contact"
        btname="Contact Now"
    />
    </>);
};

export default About; 