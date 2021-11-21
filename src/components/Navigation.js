import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img  src={process.env.PUBLIC_URL + '/media/img/sanaabass.jpg'} alt="Abass-SANA"/>
                    <h3>M. Abass SANA</h3>
                    <span className="brieffing">Développeur full-stack à la SESIN Doctorant-chercheur en algorithme d'intelligence artificielle au laboratoire images, signaux et systèmes intélligents (LISSI) de l'Université Paris XII</span>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink activeclassname="navActive" to="/sanabass">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/competences" activeclassname="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>ChatApp</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeclassname="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeclassname="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cv" activeclassname="navActive">
                            <i className="fas fa-briefcase"></i>
                            <span>CVthèque</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.codepen.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="signature">
                
            </div>
        </div>
    );
};

export default Navigation;