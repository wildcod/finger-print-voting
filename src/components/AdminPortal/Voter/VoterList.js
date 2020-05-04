import React, {useEffect} from 'react';
import {Card, Image} from "semantic-ui-react";
import '../../../css/adminProtalStyle/voter-list.css'
import HomeLayout from "../../Layout/HomeLayout";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {fetchVoters} from "../../../redux/actions/adminAction";

const VoterList = ({ fetchVoters, voters, history }) => {

    useEffect(() => {
        fetchVoters();
    },[])

    const navigationHandler = (id) => {
        history.push(`/voter-list/profile/${id}`)
    }

    return (
        <HomeLayout heading="Voters">
            <Card.Group className="voter-container">
                {
                    voters && voters.map(d => (
                        <Card className="voter-card" key={d._id} onClick={() => navigationHandler(d._id)}>
                            <Image
                                wrapped
                                src={d.photo}
                                size="small"
                                className="voter-card-image"
                            />
                            <Card.Content>
                                <Card.Header>{d.name}</Card.Header>
                            </Card.Content>
                        </Card>
                    ))
                }
            </Card.Group>
        </HomeLayout>
    );
};
const mapStateToProps = state => ({
    voters : state.voterStore.voters,
});


const mapActionToProps = () => {
    return {
        fetchVoters
    }
}

export default withRouter(connect(mapStateToProps,mapActionToProps())(VoterList))