import React, {useEffect} from 'react';
import './main.css';
import img from '../../Asset/Taj.jpg'
import img2 from '../../Asset/Giza.jpg'
import img3 from '../../Asset/Great_Wall.jpg'
import img4 from '../../Asset/Petra.jpg'
import img5 from '../../Asset/Coloss.jpg'
import img6 from '../../Asset/Chichen.jpg'
import img7 from '../../Asset/Machu.jpg'
import img8 from '../../Asset/Christ.jpg'
import img9 from '../../Asset/Temple.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[
    {
        id:1,
        imgSrc: img,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'Eternal Love',
        fees: '₹8,000',
        description:'The Taj Mahal is a stunning white marble mausoleum located in Agra, India. Built between 1632 and 1653 by Mughal Emperor Shah Jahan, it was dedicated to his beloved wife, Mumtaz Mahal, who died in childbirth. A masterpiece of Mughal architecture, it blends Islamic, Persian, and Indian styles.'
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Giza Pyramids',
        location: 'Egypt',
        grade: 'Precision and Scale',
        fees: '₹16,000',
        description:'The Giza Pyramids are ancient monumental structures located on the Giza Plateau near Cairo, Egypt. Built during the Fourth Dynasty of the Old Kingdom (circa 2600–2500 BCE), they include the Great Pyramid of Giza, built for Pharaoh Khufu, and two smaller pyramids for Pharaohs Khafre and Menkaure. These pyramids served as tombs and are renowned for their precise construction, alignment with celestial bodies, and massive limestone and granite blocks.'
   },


   {
        id:3,
        imgSrc: img3,
        destTitle: 'Great Wall of China',
        location: 'China',
        grade: 'Symbol of Perseverance & Engineering Marvel',
        fees: '₹60,000',
        description:'The Great Wall of China is a vast series of fortifications built to protect ancient Chinese states from invasions. Constructed over several dynasties, primarily during the Ming Dynasty (1368–1644), it stretches over 13,000 miles, traversing mountains, deserts, and plains. Made from stone, brick, tamped earth, and wood, the wall includes watchtowers, barracks, and signal systems.'
   },


   {
        id:4,
        imgSrc: img4,
        destTitle: 'Petra',
        location: 'Southern Jorden',
        grade: 'Rock-cut Architecture & Trade Hub',
        fees: '₹65,000',
        description:'Petra is an ancient city carved into rose-red sandstone cliffs in southern Jordan. Established around the 4th century BCE as the capital of the Nabataean Kingdom, it thrived as a major trading hub for spices, silk, and incense. Famous for its rock-cut architecture and water management system, Petra highlights include the Treasury (Al-Khazneh), the Monastery (Ad-Deir), and the Siq, a narrow canyon entrance.'
   },


   {
        id:5,
        imgSrc: img5,
        destTitle: 'Colosseum',
        location: 'Italy',
        grade: 'Engineering Prowess & Cultural Heritage',
        fees: '₹60,000',
        description:'The Colosseum, also known as the Flavian Amphitheatre, is an iconic ancient Roman structure located in Rome, Italy. Completed in 80 CE under Emperor Titus, it is the largest amphitheater ever built, capable of seating up to 50,000 spectators. Made of concrete and stone, it hosted gladiatorial contests, animal hunts, and public spectacles.'
   },


   {
        id:6,
        imgSrc: img6,
        destTitle: 'Chichen Itza',
        location: 'Mexico',
        grade: 'Astronomical Alignment & Significance',
        fees: '80,000',
        description:'Chichén Itzá is an ancient Mayan city located in Mexico’s Yucatán Peninsula. Flourishing between the 9th and 12th centuries, it was a major center for politics, trade, and religion. The site is famous for its impressive architectural structures, including El Castillo (the Temple of Kukulcán), a step-pyramid aligned with astronomical events.'
 },


  {
        id:7,
        imgSrc: img7,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'Inca Engineering',
        fees: '₹17,500',
        description:'Machu Picchu is a 15th-century Inca citadel located high in the Andes Mountains of Peru, near the Urubamba River. Believed to have been built by Emperor Pachacuti, it served as a royal estate or religious site. The complex features sophisticated stone constructions, including terraces, temples, and residential areas, all harmoniously integrated into the natural landscape.'
  },


  {
        id:8,
        imgSrc: img8,
        destTitle: 'Christ the Redeemer',
        location: 'Brazil',
        grade: 'Emblem of Peace',
        fees: '₹20,000',
        description:'Christ the Redeemer is an iconic statue of Jesus Christ located atop Mount Corcovado in Rio de Janeiro, Brazil. Completed in 1931, the 98-foot-tall Art Deco statue stands on a 26-foot pedestal, with its arms outstretched, spanning 92 feet.Designed by sculptor Paul Landowski and built by engineer Heitor da Silva Costa, it is made of reinforced concrete and soapstone.'
  },


   {
        id:9,
        imgSrc: img9,
        destTitle: 'Brihadeeswara Temple',
        location: 'India',
        grade: 'Chola Architecture',
        fees: '₹4,000',
        description:'Brihadeeswara Temple, also known as Peruvudaiyar Kovil, is a magnificent Hindu temple located in Thanjavur, Tamil Nadu, India. Built by the Chola emperor Raja Raja Chola I in the 11th century, it is dedicated to Lord Shiva. The temple is renowned for its grand architecture, including a massive central dome topped by a single granite block weighing around 80 tons, and intricately carved sculptures.'
},
]

const Main = () => {
    //Creae a react Hook to add a Scroll Animation....
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section id="main" className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className='title'>
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id}
                            data-aos="fade-up" 
                            className="singleDestination">
                                {/*It will return single id from the map array*/}
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Main;