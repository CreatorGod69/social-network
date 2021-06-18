import React, { useState, useEffect } from 'react'
import p from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div className={p.status}>
        {!editMode &&
            <p onDoubleClick={activateEditMode}>{props.profile.status !== ""
            ? props.profile.status
            : props.welcome}</p>}
        {editMode &&
            <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>}
    </div>
}

export default ProfileStatusWithHooks