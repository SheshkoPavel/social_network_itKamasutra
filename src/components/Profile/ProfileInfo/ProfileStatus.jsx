import React, {useState} from 'react';

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <div>
                { editMode === false
                    ?   <div>
                            <span onDoubleClick={() =>{setEditMode(true)} } > {props.status}</span>
                        </div>

                    :   <div>
                            <input autoFocus={ true } onMouseLeave={deactivateEditMode} onChange={onStatusChange} value={status} />
                        </div>
                }

            </div>
        );

};

export default ProfileStatus;