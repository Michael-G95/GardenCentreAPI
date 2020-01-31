import React from 'react'
import Styles from './Styles.module.css'
const ErrorItem = ({ error,remove }) => {
    return (
        <div onClick={remove}>
            <h3>
                {error.name}
            </h3>
            <p>
                {error.message}              
            </p>
            
        </div>
        );
}

export default ErrorItem