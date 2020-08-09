import React from 'react'
import dialog from './DialogName.module.css'
import {NavLink} from 'react-router-dom'

const DialogName = (props) => {
    return <NavLink to={'/messages/id' + props.id}>
        <div className={dialog.dialog}>
            <h1>{props.name}</h1>
        </div>
    </NavLink>
}


export default DialogName