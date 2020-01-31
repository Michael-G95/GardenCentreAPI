import React from 'react'
import Styles from './EditItemView.module.css'
import ItemView from '../../../../ItemView/ItemView'

const EditItemView = ({ item,deleteItem }) => {
    return (
        <div className={Styles["itemRow"]}>
            <ItemView item={item} />
            <div className={Styles["buttonDanger"]} onClick={()=>deleteItem(item)}>
                <span>
                    Delete
                </span>
            </div>
        </div>
    )
}

export default EditItemView