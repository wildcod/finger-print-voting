import React from 'react';
import '../css/cast-vote.css'
import { Link } from 'react-router-dom'

const CastVote = () => {
    return (
        <div className="cast-vote-main">
              <p style={{ textAlign : 'center', fontSize : '30px', fontWeight : 700 }}>Available Elections</p>
            <div className="cast-vote-cards-container">
                {
                    data.map((d,i) => (
                        <div className="cast-vote-card">
                            <div className="cast-vote-card-heading">
                                <span>{d.name}</span>
                            </div>
                            <div className="cast-vote-card-time">
                                <span>End Date</span>
                                <span style={{ fontSize : '14px', marginTop : '5px'}}>{d.end_date}</span>
                            </div>
                            <div className="cast-vote-card-see">
                                <Link to='/voter/election/1' >
                                    <p>See more</p>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CastVote;


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