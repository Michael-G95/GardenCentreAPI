import React from 'react'
import Styles from './ItemView.module.css'
const ItemView = ({ item }) => {
    return (
        <div className={Styles["root"]}>
            <div className={Styles["itemGroup"]}>
                <span className={Styles["item"]}>Plant Name</span>
                <span className={Styles["item"]}>{item.plant.name}</span>
            </div>
            <div className={Styles["itemGroup"]}>
                <span className={Styles["item"]}>Plant Description</span>
                <span className={Styles["item"]}>{item.plant.description}</span>
            </div >
            <div className={Styles["itemGroup"]}>
                <span className={Styles["item"]}>Plant Price</span>
                <span className={Styles["item"]}>{item.plant.price}</span>
            </div>
            <div className={Styles["itemGroup"]}>
                <span className={Styles["item"]}>Quantity</span>
                <span className={Styles["item"]}>{item.quantity}</span>
            </div>
        </div>
    );
}

export default ItemView