import React from 'react';
import NavBar from '../NavBar/NavBar';
import Styles from './Plants.module.css'
import PlantMenu from './PlantMenu/PlantMenu';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const Plants = ({ loggedIn }) => {
    if (!loggedIn) {
        return <Redirect to="/login" />
    } else {
        return (
            <>
                <NavBar />
                <div className={Styles["plantHome"]}>

                    <PlantMenu />
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

    export default connect(mapStateToProps)(Plants);