import React from 'react';

const User = () => {
    return (
        <div className="identity">
            <div className="id-content">
                <img className="id-avatar" src={process.env.PUBLIC_URL + "/media/img/sanaabass.jpg"} alt="profil-pic"/>
                <h1 className="id-name">Abass SANA</h1>
                <p className="id-profession"> Développeur et doctorant en IA </p>
            </div>
            <div className="id-infos">
                <p className="id-info"> <a href="tel:+33766067221"><i className="fas fa-phone-alt"></i>+33(0)766067221</a></p>
                <p className="id-info"> <a href="mailto:abass.sana@inphb.ci"><i className="fas fa-envelope"></i>abass.sana@inphb.ci</a></p>
                <p className="id-info"> <time dateTime="27/10/1993"><i className="fas fa-calendar-alt"></i> Né le 27/10/1993 (Port-Bouët)</time></p>
                <p className="id-info"> <i className="fas fa-map-marker-alt"></i> 173 Bd. Macdonald 75019</p>
            </div>
        </div>
    );
};

export default User;