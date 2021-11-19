import React from 'react';

function Certifications({datas}) {
    return (
        <div className="cursus mb3">
            <h2><i class="fas fa-medal"></i> Certifications (36) &amp; Compétences en informatique</h2>
            <div className="grid-row">
                <div className="grid-item">
                    <p >MOS : Microsoft Office Specialist</p>
                </div>
                <div className="grid-item">
                    <p >MTA : Microsoft Technology Associate</p>
                </div>
            </div>
            
            {datas.map(item => (
                <div className="grid-row" key={item.id}>
                    <div className="grid-item">
                        <p className="grid-company">{item.company}</p>
                        <p className="grid-comments">{item.comments}</p>
                    </div>
                    <div className="grid-item">
                        <h3 className="grid-title">{item.title}</h3>
                        <p className="grid-certif_status">{item.certif_status}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Certifications;