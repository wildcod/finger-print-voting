import React, {useEffect, useState} from 'react';
import axios from "axios";
import api from "../../util/api";
import HomeLayout from "../Layout/HomeLayout";

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
        <HomeLayout heading="Result">

        </HomeLayout>
    );
};

export default Result;