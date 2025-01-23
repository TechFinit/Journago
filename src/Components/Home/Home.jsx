import React, {useEffect, useState} from 'react';
import './home.css';
import video from '../../Asset/video.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    //Creae a react Hook to add a Scroll Animation....
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    const [destination, setDestination] = useState("");
    const handleInputChange = (e) => {
        setDestination(e.target.value);
    };

    const [price, setPrice] = useState(10000);
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
      };

    return (
        <section className='home'>
            <div className='overlay'></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent Container">
               <div className="textDiv">


                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        Search your Holidays
                    </h1>


                </div> 

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter name here....' value={destination} onChange={handleInputChange}/>
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select your date:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price:</label>
                            <h3 className="total">₹{price}</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="200000" min="3000" value={price} onChange = {handlePriceChange}/>
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className="icon"/>
                        <span>MORE FILTERS</span>
                    </div>
                </div>  

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <AiOutlineInstagram className="icon"/>
                        <SiTripadvisor className="icon"/>
                    </div>

                    <div className="leftIcons">
                    <BsListTask className="icon"/>
                    <TbApps className="icon"/>
                    </div>  
                </div>
            </div>

        </section>
    );
};

export default Home;