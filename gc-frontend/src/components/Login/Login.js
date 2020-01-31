import React from 'react'
import { connect } from 'react-redux'
import { addIdNumber, removeIdNumber, LogIn, pushError } from '../../store/Actions';
import Styles from './Login.module.css'
import LoginDigit from './LoginDigit/LoginDigit';
import NavBar from '../NavBar/NavBar';
import LoginDisplayBar from './LoginDisplayBar';
import {withRouter} from 'react-router-dom'
import { PASSCODE } from '../../env'
import ErrorDisplay from '../errorDisplay/ErrorDisplay'

const Login = ({ pushError,history,id, addDigit, removeDigit, logIn }) => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const buttons = nums.map(num => {
        return <LoginDigit key={num} digit={num} onClickHandler={() => addDigit(num.toString())} />
    })

    const logInHandler = () => {
        // Check if id matches PASSCODE from env file. In future to be replace with server auth
        if (id == PASSCODE) {
            logIn(id);
            history.push('/');
        } else {
            pushError('Access Denied', 'Passcode incorrect!');
        }
    }
    return (
        <>
            <NavBar />
            <ErrorDisplay />
            <div className={Styles['login-root']}>

                <LoginDisplayBar id={id} />
                <div className={Styles['grid-div']}>
                    {buttons}
                    <LoginDigit digit={'<'} onClickHandler={() => { removeDigit(); }} />
                    <LoginDigit digit={'Go'} onClickHandler={logInHandler} />
                    <LoginDigit digit={'Back'} onClickHandler={()=>history.push('/')} />
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDigit: (digit) => dispatch(addIdNumber(digit)),
        removeDigit: () => dispatch(removeIdNumber()),
        logIn: (id) => dispatch(LogIn(id)),
        pushError: (name, message) => dispatch(pushError(name,message))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));