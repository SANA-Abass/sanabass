import React from 'react';

function Interests() {
    return (
        <div className="skills">
            <h2>Centre d'intérêts</h2>
            <ul>
                <li><i className="fas fa-laptop-code"> </i>Informatique</li>
                <li><i className="fab fa-galactic-republic"> </i> Arts martiaux</li>
                <li><i className="fab fa-pagelines"> </i> &nbsp;Randonnée</li>
                <li><i className="fas fa-helicopter"> </i>Bricolage</li>
                <li><i className="fas fa-dove"> </i> Faune &amp; Flore</li>
            </ul>

            <h2>Méthode d'analyse</h2>
            <ul>
                <li><i className="fab fa-buffer"> </i> MERISE (Méthode d’Etude et de Réalisation des Systèmes d’Entreprise)</li>
                <li><i className="fab fa-buffer"> </i> PU-UML (Processus Unifié allié à UML) et ses variants : SCRUM / 2TUP / XP (méthodes agiles)</li>
            </ul>

            <h2>Réseau social</h2>
            <ul>
                <li><i className="fab fa-linkedin"> </i> LinkedIn <br/>
                    <img className="linkedin-qrcode" src={process.env.PUBLIC_URL + "/media/img/linkedin-qrcode.jpg"} alt="linkedin-qrcode"/>
                </li>
            </ul>
        </div>
    );
}

export default Interests;