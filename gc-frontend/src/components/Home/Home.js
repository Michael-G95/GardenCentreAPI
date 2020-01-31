import React from 'react';
import styles from './Home.module.css';
import MenuItem from './MenuItem/MenuItem';
import NavBar from '../NavBar/NavBar';

const Home = props => (
    <>
        <NavBar />
        <div className={styles["appContainer"]}>

            <div className={styles["menu"]}>
                <MenuItem name="Plants" link="/plants" color="Forestgreen" />
                <MenuItem name="Orders" link="/orders" color="darkslategray" />

            </div>
        </div>
    </>
);

export default (Home);
