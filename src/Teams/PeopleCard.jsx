import React from 'react'
import Team from "../css/team.module.css"
import { FaLinkedin,FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


const PeopleCard = (props) => {

    const isMediumScreen = useMediaQuery({ query: '(min-width: 550px) and (max-width: 992px)' });
    return (
        <>
            <div className={Team.mainContainer} style={{ width:'props.mainWidth' || '95%' }} >                

                <div className='imageContainer'>                  
                    <img  loading="lazy" alt='profile' src={props.pic ? props.pic : "./data/img/profilepic.jpg"}  style={{ width:'props.imageWidth' || '90%' , height: isMediumScreen ? '20vh' : (props.imageHeight || '41vh') }} />                   
                </div>

                <div className={Team.textContainer} style={{ width: 'props.textWidth' || '90%' }}>
                <h3 className={Team.PORname}>{props.name}</h3>
                {props.isProfessor && <h2 className={Team.POR}>{props.position}</h2>}                 
                </div>
                <div className={Team.side_div} style={{ top: props.isProfessor ? '88%' : '83%' }}>
                <Link to={props.linkedin}>
                            <FaLinkedin className="text-white text-xl " />
                        </Link>
                        <Link to={props.insta}>
                            <FaInstagram className="text-white text-xl " />
                        </Link>
                        <Link to={props.mail}>
                            <SiGmail className="text-white text-xl " />
                        </Link>
                </div>
            </div >
        </>
    )
}

export default PeopleCard;

