import React from 'react';

function Experiences({datas}) {
    return (
        <div className="experiences mb3">
            <h2><i class="fas fa-briefcase"></i> Expériences professionnelles</h2>
            {datas.map(item => (
                <div className="grid-row" key={item.id}>
                    <div className="grid-item">
                        <p className="grid-period">{item.period}</p>
                        <p className="grid-comments">{item.comments}</p>
                    </div>
                    <div className="grid-item">
                        <h3 className="grid-title">{item.title}</h3>
                        <p className="grid-enterprise">{item.enterprise} - {item.location}</p>
                        <ul className="grid-missions">
                            {item.missions.map(mission => (
                                <li className="grid-mission" key={mission.id}>
                                    <i className="fas fa-check"></i> {mission.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experiences;