import React from 'react';
import '../../css/authStyle/layout.css'

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