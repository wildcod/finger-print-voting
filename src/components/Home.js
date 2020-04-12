import React, {useState} from 'react';
import '../css/home.css'
import SideBar from './common/SideBar';
import MainLayout from "./MainLayout";
import AddCandidate from '../components/AddCandidate'
import AddElection from '../components/AddElection'
import AddVoter from '../components/AddVoter'
import Result from '../components/Result'
import NotFound from "./NotFound";
import { Loader } from 'semantic-ui-react'

const Home = () => {

    const [active, setActive] = useState(0);
    const [visible, setVisible] = useState(false);

    const activeComponent = (a) => {
        switch (a) {
            case 0 : return  <AddCandidate/>
            case 1 : return  <AddVoter/>
            case 2 : return  <AddElection/>
            case 3 : return  <Result/>
            default : return <NotFound/>
        }
    };

    const activeHeading = (h) => {
        switch (h) {
            case 0 : return  'Add Candidate'
            case 1 : return  'Add Voter'
            case 2 : return  'Add Election'
            case 3 : return  'Result'
            default : return 'Not Found'
        }
    };

    return (
        <div className="home-container">
            <div className="sidebar">
               <SideBar setActive={setActive}/>
            </div>
            <div className="home-main">
                <div className="home-header"></div>
                <div className="home-content">
                    <MainLayout heading={activeHeading(active)}>
                        {
                             activeComponent(active)
                        }
                    </MainLayout>
                </div>
            </div>
        </div>
    );
};

export default Home;