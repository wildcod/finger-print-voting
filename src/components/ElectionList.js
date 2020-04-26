import React, {useEffect, useState} from 'react';
import '../css/election-list.css'
import {Link} from "react-router-dom";
import axios from "axios";
import api from "../util/api";
import moment from 'moment'

const ElectionList = () => {
    const [elections, setElections] = useState(null);

    useEffect(() => {
        try{
            const getElections = async () => {
                const res = await axios.get(api('getElections'));
                setElections(res.data.elections);
                console.log('Data 14',res);
            };
            getElections();
        }catch (error) {
            console.log(error);
            throw error
        }
    },[]);

    return (
        <div className="election-cards-container">
            {
               elections && elections.map((d, i) => (
                    <div className="election-card">
                        <div className="election-card-heading">
                            <span>{d.name + ' Election'}</span>
                        </div>
                        <div className="election-card-time">
                            <span>End Date</span>
                            <span style={{ fontSize : '14px', marginTop : '5px'}}>{moment(d.end_date).utc().format("DD-MM-YYYY").toString()}</span>
                        </div>
                        <div className="election-card-see">
                            <Link to={`/voter/election/${d._id}`} >
                                <p>See more</p>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ElectionList;

const data = [{
    name : 'Lok Sabha elections',
    end_date : '12/11/2020',
},
    {
        name : 'Municipal Corporation elections',
        end_date : '12/11/2020',
    },
    {
        name : 'Vidhan Sabha elections',
        end_date : '12/11/2020',
    },
    {
        name : 'Metropolitan Council elections',
        end_date : '12/11/2020',
    }
];
