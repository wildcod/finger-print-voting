import React from 'react';
import ElectionList from "../AdminPortal/Election/ElectionList";
import VoterLayout from "../Layout/VoterLayout";

const Voter = () => {
    return (
        <VoterLayout>
            <ElectionList/>
        </VoterLayout>
    );
};

export default Voter