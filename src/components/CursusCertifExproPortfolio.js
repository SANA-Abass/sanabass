import React from 'react';
import CursusData from '../data/cursusData';
import ExperienceData from '../data/experienceProData';
import PortfolioData from '../data/portfolioData';
import CertificationsData from '../data/certificationsData';

import Portfolio from './Portfolio';
import Certifications from './Certifications';
import Cursus from './Cursus';
import Experiences from './Experiences';

function CursusCertifExproPortfolio() {
    return (
        <>
            <Experiences datas={ExperienceData}/>
            <Certifications datas={CertificationsData}/>
            <Portfolio datas={PortfolioData}/>
            <Cursus datas={CursusData}/>
        </>
    );
}

export default CursusCertifExproPortfolio;