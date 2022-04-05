import React, {useEffect, useState} from 'react';
import './ProfileStatus.scss'

const ProfileStatus = (props) => {

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

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
                            <span className={'status__look'} onDoubleClick={() =>{setEditMode(true)} } > {props.status || "no status yet"}</span>
                        </div>

                    :   <div>
                            <input autoFocus={ true } onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
                        </div>
                }
            </div>
        );
};

export default ProfileStatus;