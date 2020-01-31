import React from 'react';
import Styles from './Login.module.css'

const LoginDisplayBar = ({id})=>{
    return (
        <div className={Styles['display']}>
            <p>{id}</p>
        </div>
    )
}

export default LoginDisplayBar