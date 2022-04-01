import * as React from 'react'
import {ChangeEvent, useEffect, useState} from 'react';
import './ProfileStatus.scss'

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

const ProfileStatus: React.FC<PropsType> = (props) => {

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <div>
                { editMode === false
                    ?   <div>
                            <span className={'status__look'}
                                  onDoubleClick={() =>{setEditMode(true)} } > {props.status || "no status yet"}
                            </span>
                        </div>

                    :   <div>
                            <input autoFocus={ true }
                                   onBlur={deactivateEditMode}
                                   onChange={onStatusChange}
                                   value={status} />
                        </div>
                }
            </div>
        );
};

export default ProfileStatus;