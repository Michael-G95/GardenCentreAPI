import React from 'react'
import Styles from './ItemsView.module.css'
import ItemView from '../../../ItemView/ItemView'
const ItemsView = ({ items }) => {
    if(items===null || items ===undefined){
        return <></>
    }
    items = items.map((item, index) => {
        return <ItemView item={item} key={index} />
    })

    return (
        <div className={Styles["itemsRoot"]}>
            <h2 className={Styles["header"]}>
                Items
        </h2>
            {items}
        </div>
    )
}

export default ItemsView