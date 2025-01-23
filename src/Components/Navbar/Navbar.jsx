import React,{useState} from 'react';
import './navbar.css';
import SignUp from '../Login/SignUp';
import {MdTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
    const[active, setActive] = useState('navBar')
    const[isModalVisible, setIsModalVisible] = useState(false);
    //Function to toggle navBar
    const showNav = ()=>{
        setActive('navBar activeNavBar')
    }
    //Function to remove navBar
    const removeNavbar = ()=>{
        setActive('navBar')
    }
    //Function to Login Form
    const handleOpenModal = () => {
        setIsModalVisible(true);
      };
    
      const handleCloseModal = () => {
        setIsModalVisible(true);
      };

    return (
        <section className='navBarSection'>
            <header className="header flex">

                <div className="logoDiv">
                   <a href="#" className="logo flex">
                    <h1><MdTravelExplore className='icon'/>Journago</h1>
                    </a> 
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#main" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="https://www.amazon.com/s?k=travel+essentials" target="_blank" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                            <a href="#footer" className="navLink">Contact</a>
                        </li>

                        <button className='btn' onClick={handleOpenModal}>
                            <a href="#">Book Now</a>
                        </button>
                    </ul>

                    <div onClick={removeNavbar}
                    className="closeNavbar">
                    <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav}
                className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
            {isModalVisible && <SignUp onClose={handleCloseModal} />}
        </section>
    );
};

export default Navbar;