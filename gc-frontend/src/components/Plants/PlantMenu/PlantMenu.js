import React from 'react';
import MenuItem from './MenuItem/MenuItem'
import Styles from './PlantMenu.module.css'
const PlantMenu = () => {
    const menuOptions = [
        createMenuOption("View all plants", "/plants/all"),
        createMenuOption("Search for a plant", "/plants/search"),
        createMenuOption("Add a plant", "/plants/new")
    ];

    const menuItems = menuOptions.map((option, index) => <MenuItem key={index} text={option.text} to={option.to} />);
    return (
        <div className={Styles["menu"]}>
            {menuItems}
        </div>
        );
}

const createMenuOption = (text, to) => {
    return { text, to }
};
export default PlantMenu