import React from 'react';
import '../css/home.css'
import SideBar from './common/SideBar';
import MainLayout from "./MainLayout";
import {Link} from "react-router-dom";

const HomeLayout = (props) => {
    return (
        <div className="home-container">
            <div className="sidebar">
               <SideBar/>
            </div>
            <div className="home-main">
                <div className="home-header">
                    <div>
                        <ul className="home-nav-bar">
                            <Link to="/candidate-list" style={{ color : '#fff'}}><li>Candidates</li></Link>
                            <Link to="/voter-list"  style={{ color : '#fff'}}><li>Voters</li></Link>
                            <Link to="/election-list"  style={{ color : '#fff'}}><li>Elections</li></Link>
                        </ul>
                    </div>
                    <div>
                        Admin
                    </div>
                </div>
                <div className="home-content">
                    <MainLayout heading={props.heading ? props.heading : null}>
                        {
                             props.children
                        }
                    </MainLayout>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;