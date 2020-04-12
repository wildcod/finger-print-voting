import React from 'react';
import voterLogo from '../../static/voter.png'
import '../../css/sidebar.css'

const SideBar = ({ setActive}) => {
    return (
        <div className="sidebar-container">
             <div className="sidebar-header">
                 <img src={voterLogo} width="90"/>
             </div>
             <div className="sidebar-list">
                 <div className="list"><span onClick={() => setActive(0)}>Add Candidate</span></div>
                 <div className="list"> <span onClick={() => setActive(1)}>Add Voter</span></div>
                 <div className="list"><span onClick={() => setActive(2)}>Add Election</span></div>
                 <div className="list"><span onClick={() => setActive(3)}>Result</span></div>
                 <div className="list"><span >Logout</span></div>
             </div>
        </div>
    );
};

export default SideBar;