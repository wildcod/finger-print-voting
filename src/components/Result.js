import React, {useEffect, useState} from 'react';
import axios from "axios";
import api from "../util/api";

const Result = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        try{
            const getElections = async () => {
                const res = await axios.get(api('getElections'));
                setData(res.data);
                console.log('Data 14',res);
            };
            getElections();
        }catch (error) {
            console.log(error);
            throw error
        }
    },[]);

    return (
        <div>

        </div>
    );
};

export default Result;