import React from 'react';
import Identity from '../components/Identity';
import Skills from '../components/Skills';
import CursusCertifExproPortfolio from '../components/CursusCertifExproPortfolio';
import DarkModeBtn from '../components/DarkModeBtn';

//Lien PDF GEN
//https://www.youtube.com/watch?v=1Vw-e_ex2S0
const Cv = () => {
    return (
            <div className="grid-container">
                <div className="sidebar-container">
                    <div className="header-actions">
                        <DarkModeBtn/>
                        <button > <i className="far fa-file-pdf"></i></button>
                    </div>
                    <Identity/>
                    <Skills/>
                </div>
                <div className="main-container">
                    <h1 className="mb3">CV - PROJET CIFRE - ANRT</h1>
                    <CursusCertifExproPortfolio/>
                </div>
            </div>
    );
};

export default Cv;