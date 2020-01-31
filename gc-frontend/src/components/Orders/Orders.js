import React from 'react';
import NavBar from '../NavBar/NavBar'
import Styles from './Orders.module.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import OrderMenu from './OrderMenu/OrderMenu';


const Orders = ({ loggedIn }) => {
    if (!loggedIn) {
        return <Redirect to="/login" />
    } else {
        return (
            <>
                <NavBar />
                <div className={Styles["orderHome"]}>
                    <OrderMenu />
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}

    export default connect(mapStateToProps)(Orders);