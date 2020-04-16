import React from 'react';
import '../css/cast-vote.css'
import { Link } from 'react-router-dom'

const CastVote = () => {
    return (
        <div className="cast-vote-main">
              <p style={{ textAlign : 'center', fontSize : '30px', fontWeight : 700 }}>Available Elections</p>
            <div className="cast-vote-cards-container">
                <div className="cast-vote-card">
                    <div className="cast-vote-card-heading">
                        <span>Lok Sabha elections</span>
                    </div>
                    <div className="cast-vote-card-time">
                        <span>End Date</span>
                        <span style={{ fontSize : '14px', marginTop : '5px'}}>12/11/2020</span>
                    </div>
                    <div className="cast-vote-card-see">
                        <Link to='/voter/election/1' >
                            <p>See more</p>
                        </Link>
                    </div>
                </div>
                <div className="cast-vote-card">
                    <div className="cast-vote-card-heading">
                        <span>Municipal Corporation elections</span>
                    </div>
                    <div className="cast-vote-card-time">
                        <span>End Date</span>
                        <span style={{ fontSize : '14px', marginTop : '5px'}}>12/11/2020</span>
                    </div>
                    <div className="cast-vote-card-see">
                        <Link to='/voter/election/2'>
                            <p>See more</p>
                        </Link>
                    </div>
                </div>
                <div className="cast-vote-card">
                    <div className="cast-vote-card-heading">
                        <span>Vidhan Sabha elections</span>
                    </div>
                    <div className="cast-vote-card-time">
                        <span>End Date</span>
                        <span style={{ fontSize : '14px', marginTop : '5px'}}>12/11/2020</span>
                    </div>
                    <div className="cast-vote-card-see">
                        <Link to='/voter/election/3'>
                            <p>See more</p>
                        </Link>
                    </div>
                </div>
                <div className="cast-vote-card">
                    <div className="cast-vote-card-heading">
                        <span>Metropolitan Council elections</span>
                    </div>
                    <div className="cast-vote-card-time">
                        <span>End Date</span>
                        <span style={{ fontSize : '14px', marginTop : '5px'}}>12/11/2020</span>
                    </div>
                    <div className="cast-vote-card-see">
                        <Link to='/voter/election/4'>
                            <p>See more</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CastVote;