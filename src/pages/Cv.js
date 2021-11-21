import React from 'react';
import Identity from '../components/Identity';
import Skills from '../components/Skills';
import CursusCertifExproPortfolio from '../components/CursusCertifExproPortfolio';
import DarkModeBtn from '../components/DarkModeBtn';

function Cv () {
    return (
            <div className="grid-container">
                <div className="sidebar-container">
                    <div className="header-actions">
                        <DarkModeBtn/>
                    </div>
                    <Identity/>
                    <Skills/>
                </div>
                <div className="main-container">
                    <CursusCertifExproPortfolio/>
                </div>
            </div>
    );
};

export default Cv;