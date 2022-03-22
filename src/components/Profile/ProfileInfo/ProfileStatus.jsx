import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }


    activateEditMode () {
       this.setState({editMode : true})
    }
    deActivateEditMode () {
       this.setState({editMode : false})
    }



    render() {
        return (
            <div>
                {this.state.editMode === true
                    ?   <div>
                            <input autoFocus={ true } onBlur={this.deActivateEditMode.bind(this)} value={this.props.status}/>
                        </div>
                    :   <div>
                            <span onDoubleClick={this.activateEditMode.bind(this)} > {this.props.status}</span>
                        </div>
                }

            </div>
        );
    };
};

export default ProfileStatus;