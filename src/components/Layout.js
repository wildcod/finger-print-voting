import React from 'react';
import '../css/layout.css'
import url from '../static/logo-1.png'

const Layout = props => {
    return (
        <div className="main">
            <div className="image-container">
                {/*<img src={url} width="630"/>*/}
                <p className="heading">Finger Print Voting</p>
            </div>
            {props.children}
        </div>
    );
};

export default Layout;