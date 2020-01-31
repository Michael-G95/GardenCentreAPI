import React from 'react';
import MenuItem from './MenuItem/MenuItem'
import Styles from './OrderMenu.module.css'

const OrderMenu = () => {
    const menuOptions = [
        createMenuOption("View all orders", "/orders/all"),
        createMenuOption("Search for an order", "/orders/search"),
        createMenuOption("Add an order", "/orders/new")
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
export default OrderMenu