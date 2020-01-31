import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {LogOut as logOutAction} from '../../store/Actions'
const LogOut = ({logOut})=>{
    logOut();
    return (
        <>
        <Redirect to='/'/>
        </>
    )
}

const mapStateToProps=(state)=>{return {}}
const mapDispatchToProps=(dispatch)=>{
    return{
        logOut:()=>dispatch(logOutAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LogOut);