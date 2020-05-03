import React from 'react';

const MainLayout = (props) => {
    return (
        <>
            {props.heading && <p style={{
                textAlign: 'center',
                margin: '10px',
                fontSize: '35px',
                fontWeight: 700
            }}>{props.heading}</p>
            }
            {props.children}
        </>
    );
};

export default MainLayout;