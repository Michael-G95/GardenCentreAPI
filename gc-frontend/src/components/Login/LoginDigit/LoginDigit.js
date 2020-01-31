import React from 'react'
const LoginDigit = ({digit,onClickHandler})=>{
    return(
        <div onClick={onClickHandler}>
            <p>{digit}</p>
        </div>
    )
}
export default LoginDigit

