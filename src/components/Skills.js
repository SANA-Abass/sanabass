import React from 'react';
import Skill from './Skill';
import Interests from './Interests';

const Skills = () => {
    return (
        <>
            <div className="skills">
                <h2>Soft skills</h2>
                <Skill title="Rigueur" rating="4"/>
                <Skill title="Curiosité" rating="4"/>
                <Skill title="Autonomie" rating="4"/>
                <Skill title="Proactivité" rating="3"/>
            </div>

            <div className="skills">
                <h2>Langues</h2>
                <Skill title="Français" rating="4"/>
                <Skill title="Anglais" rating="3"/>
                <Skill title="Arabe" rating="2"/>
            </div>
            
            <Interests/>
        </>
    );
};

export default Skills;