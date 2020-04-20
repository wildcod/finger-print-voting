import React from 'react';
import '../css/election-list.css'
import {Link} from "react-router-dom";

const ElectionList = () => {
    return (
        <div className="election-cards-container">
            {
                data.map((d, i) => (
                    <div className="election-card">
                        <div className="election-card-heading">
                            <span>{d.name}</span>
                        </div>
                        <div className="election-card-time">
                            <span>End Date</span>
                            <span style={{ fontSize : '14px', marginTop : '5px'}}>{d.end_date}</span>
                        </div>
                        <div className="election-card-see">
                            <Link to={`/voter/election/${i}`} >
                                <p>See more</p>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ElectionList;

const data = [{
    name : 'Lok Sabha elections',
    end_date : '12/11/2020',
},
    {
        name : 'Municipal Corporation elections',
        end_date : '12/11/2020',
    },
    {
        name : 'Vidhan Sabha elections',
        end_date : '12/11/2020',
    },
    {
        name : 'Metropolitan Council elections',
        end_date : '12/11/2020',
    }
];
