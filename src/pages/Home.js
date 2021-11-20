import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Bienvenue</h1>
                    <h2>cvthèque</h2>
                    <div className="downloadCVPDF">
                        <a href={process.env.PUBLIC_URL + '/media/files/CV.pdf'} rel="noreferrer" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;