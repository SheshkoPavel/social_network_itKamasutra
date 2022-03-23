import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }


    activateEditMode = () => {

        console.log(this.state);
       this.setState({editMode : true})
    }
    deActivateEditMode = () => {
       this.setState({editMode : false})
    }



    render() {

        return (
            <div>
                {this.state.editMode === true
                    ?   <div>
                            <input autoFocus={ true } onBlur={this.deActivateEditMode} value={this.props.status}/>
                        </div>
                    :   <div>
                            <span onDoubleClick={this.activateEditMode} > {this.props.status}</span>
                        </div>
                }

            </div>
        );
    };
};

export default ProfileStatus;