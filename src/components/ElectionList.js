import React from 'react';

const ElectionList = () => {
    return (
        <div>
            <div className="election-list--card">
                <div className="election-list-voter-image">

                </div>
                <div className="election-list-scanner">
                    Scan Finger
                </div>
                <div className="election-list-voter-info">
                    {
                        voterData.map(d => (
                            <div className="election-list-row">
                                <div className="election-list-key">{d.key}</div>
                                <div className="election-list-value">{d.default}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ElectionList;

const voterData = [
    {
        key : "Name",
        value : "Sahil Kanojia",
        default : ''
    },
    {
        key : "Voter Id",
        value : "CVDGSFTE34",
        default : ''
    },
    {
        key : "Age",
        value : "20",
        default : ''
    },
    {
        key : "Address",
        value : "chanakaya puri",
        default : ''
    },
    {
        key : "Mobile",
        value : "90876543322",
        default : ''
    }
];