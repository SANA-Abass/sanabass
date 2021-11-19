import React from 'react';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
                <div className="content">
                    <h1>Knowledges</h1>
                    <h2>Développeur projet logiciel</h2>
                    <div className="downlodCVPDF">
                        <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Knowledges;