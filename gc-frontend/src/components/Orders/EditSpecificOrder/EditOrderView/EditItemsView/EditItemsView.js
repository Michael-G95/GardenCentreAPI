import React from 'react'
import EditItemView from './EditItemView/EditItemView'
import Styles from './EditItemsView.module.css'
const EditItemsView = ({ items,deleteItem }) => {
    //items = [{ quantity: 3, plant: { name: "Tulips", description: "White", price: 9.99 } }]

   
    items = items.map((item, index) => {
        return <EditItemView item={item} key={index} deleteItem={deleteItem}/>
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

export default EditItemsView