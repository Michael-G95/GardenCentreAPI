import React from 'react';
import NavItem from './NavItem/NavItem'
import Styles from './NavBar.module.css'
import {connect} from 'react-redux'
const NavBar = ({status}) => {
    // Conditionally displaying Log In or Log Out depending on state id
    return (
        <div className={Styles["navBar"]}>
            
            {status?<NavItem to="/logout" text="Log Out" />:<NavItem to="/login" text="Log In" />}
            <NavItem to="/plants" text="Plants" />
            <NavItem to="/orders" text="Orders" />
            <NavItem to="/" text="Home" />
        </div>
        );
}

const mapStateToProps = (state)=>{
    return {
        // If id > 0 then user is logged in 
        status:state.loggedIn
    }
}

export default connect(mapStateToProps)(NavBar)