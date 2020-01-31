import React from 'react'
import Styles from './MenuItem.module.css'
import {Link} from 'react-router-dom'
const MenuItem = ({ text, to }) => {
    return (
        <Link to={to} className={Styles["menuItem"]}>
            <p>
                {text}
            </p>
        </Link>
        );
}

export default MenuItem