import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Knowledges</h1>
                    <h2>Développeur projet logiciel</h2>
                    <div className="downloadCVPDF">
                        <a href="./media/files/CV.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;