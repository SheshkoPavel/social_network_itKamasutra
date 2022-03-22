import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {useMatch} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match ? this.props.match.params.userId : 2;
        this.props.getUserProfile(userId);

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }

};

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match} />;
}

let AuthRedirectContainer = withAuthRedirect(ProfileURLMatch);

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});



export default connect(mapStateToProps, { getUserProfile })(AuthRedirectContainer);