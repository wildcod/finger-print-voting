import React from 'react';
import '../css/layout.css'
import url from '../static/voter.png'

const Layout = props => {
    return (
        <div className="layout-main">
            <div className="layout-image-container">
                {/*<img src={url} width="300"/>*/}
                <p className="layout-heading">Finger Print Voting</p>
            </div>
            {props.children}
        </div>
    );
};

export default Layout;