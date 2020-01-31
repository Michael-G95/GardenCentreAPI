import React from 'react';
import Styles from './MenuItem.module.css'
import {Link} from 'react-router-dom'
const MenuItem = ({ name, link, color="white" }) => {
    return (
        <Link to={link} className={Styles["menuitem"]} style={{ backgroundColor: color }}>
            <p className={Styles["menuTitle"]} >
                {name}
            </p>
        </Link>
    );
}

export default MenuItem

