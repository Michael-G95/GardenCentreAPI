import React, { useState } from 'react'
import Styles from './AddItemView.module.css'

const AddItemView = ({ plants, order, addItem }) => {
    const [plant, setPlant] = useState(plants[0]===undefined?"":plants[0].id);
    const [quantity, setQuantity] = useState(0);
    console.log("PARAMS", plants, order)
    console.log("STATE", { plant, quantity });
    if (plants.length === 0 || order.id === undefined) {
        // Not yet loaded
        return <></>
    }

    const options = plants.map((plant) => {
        return <option value={plant.id} >{plant.name}</option>
    });

    return (
        <div className={Styles["root"]}>
            <h1>
                Add Order Item
            </h1>
            <div className={Styles["inputArea"]}>
                <span>
                    Choose Plant:
                </span>
                <div className={Styles["input"]}>
                    <select value={plant} onChange={(event) => setPlant(event.target.value)}>
                        {options}
                    </select>
                </div>
            </div>
            <div className={Styles["inputArea"]}>
                <span>
                    Quantity:
                </span>
                <div className={Styles["input"]}>
                    <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                </div>
            </div>
            <div className={Styles["buttonRow"]}>
                <div className={Styles["buttonContainer"]} onClick={() => addItem(plant, quantity)}>
                    <span>
                        Add
                    </span>
                </div>
            </div>


        </div>
    )

}

export default AddItemView