import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to='/users'/>

            return <Component {...this.props}/>
        }
    }
    let ConnecedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnecedAuthRedirectComponent
}

export default withAuthRedirect