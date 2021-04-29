import React from 'react';
import Image from './webbgg.png';
import Common from './Common';


const Home = () =>{
    return(<>
    <Common name="Grow your  business with"
        imgsrc={Image}
        visit="./service"
        btname="Get Started"
    />
    </>);
};

export default Home;