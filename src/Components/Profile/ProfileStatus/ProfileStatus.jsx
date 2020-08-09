import React from 'react';
import p from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.profile.status
    }

    activateEditMode = () => {
        this.setState ({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState ({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.profile.status !== this.props.profile.status) {
            this.setState({
                status: this.props.profile.status
            })
        }
    }

    render () {
        return <div className={p.status}>
            {!this.state.editMode &&
            <p onDoubleClick={this.activateEditMode}>{this.props.profile.status !== ""
            ? this.props.profile.status
            : this.props.welcome}</p>}
            {this.state.editMode &&
            <input type="text" autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange} value={this.state.status}/>}
        </div>
    }
}

export default ProfileStatus;