import React, {useEffect} from 'react';
import './footer.css';
import video2 from '../../Asset/video (2).mp4'
import {FiChevronRight, FiSend} from "react-icons/fi"
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai"
import { AiFillYoutube} from 'react-icons/ai'
import {FaTripadvisor} from "react-icons/fa"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    //Creae a react Hook to add a Scroll Animation....
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section id="footer" className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up" className='btn flex' type='submit'>
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                            <MdOutlineTravelExplore className="icon"/>  
                            </a>  Journago
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                        Our Journago, we believe travel is more than just visiting new places—it's about creating memories, exploring cultures, and discovering the beauty of the world. Our mission is to turn your travel dreams into reality, offering personalized experiences tailored to your preferences.
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>
                    </div>
                    
                    <div className="footerLinks grid">

                        {/* Group One*/}
                        <div data-aos="fade-up" data-aos-duration="3000"
                        className="linkGroup">
                           <span className="groupTitle">
                            OUR AGENCY
                            </span> 

                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               Services
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               Insurance
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               Agency
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               Tourism
                            </li>
                            
                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               Payment
                            </li>

                        </div>

                        {/* Group Two*/}
                        <div data-aos="fade-up" data-aos-duration="4000"
                        className="linkGroup">
                           <span className="groupTitle">
                            PARTNERS
                            </span> 

                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               Bookings
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               Rentcars
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               HostelWorld
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               Trivago
                            </li>
                            
                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               TripAdvisor
                            </li>

                        </div>

                        {/* Group Three*/}
                        <div data-aos="fade-up" data-aos-duration="5000"
                        className="linkGroup">
                           <span className="groupTitle">
                            LAST MINUTE
                            </span> 

                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               London
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               California
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               Canada
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               Europe
                            </li>
                            
                            <li className="footerList flex">
                               <FiChevronRight className='icon'/> 
                               Japan
                            </li>

                        </div>
                    </div>

                    <div className="footerDiv flex">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;