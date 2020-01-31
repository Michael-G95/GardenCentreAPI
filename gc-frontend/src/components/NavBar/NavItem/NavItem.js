import React from 'react';
import Styles from '../NavBar.module.css'
import {Link} from 'react-router-dom'
const NavItem = ({ to="",text="Link"}) => {
    return (
        <Link className={Styles["navItem"]} to={to}>
            <p className={Styles["navText"]}>
                {text}
            </p>
        </Link>
        );
}

export default NavItem