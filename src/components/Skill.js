import React from 'react';

function Skill ({title, rating}) {
    return (
        <div className="skill">
            <h3 className="skill-title">{title}</h3>
            <div className="skill-rating">
                <div className={`circle ${rating>0 && "circle-plain"}`}> </div>
                <div className={`circle ${rating>1 && "circle-plain"}`}> </div>
                <div className={`circle ${rating>2 && "circle-plain"}`}> </div>
                <div className={`circle ${rating>3 && "circle-plain"}`}> </div>
            </div>
        </div>
    );
};

export default Skill;