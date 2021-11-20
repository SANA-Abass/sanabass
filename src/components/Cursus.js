import React from 'react';

function Cursus({datas}) {
    return (
        <div className="cursus mb3">
            <h2><i className="fas fa-graduation-cap"></i> Formations</h2>
            {datas.map(item => (
                <div className="grid-row" key={item.id}>
                    <div className="grid-item">
                        <p className="grid-period">{item.period}</p>
                        <p className="grid-comments">{item.comments}</p>
                    </div>
                    <div className="grid-item">
                        <h3 className="grid-title">{item.title}</h3>
                        <p className="grid-university-location">{item.university} - {item.location}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cursus;