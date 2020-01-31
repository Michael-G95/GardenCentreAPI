import React from 'react'
import Styles from './EditPlantView.module.css'
import { withRouter } from 'react-router-dom'
import useFieldEditor from '../useFieldEditor'
const EditPlantView = ({ plant,finishEditing,deletePlant }) => {
    const descriptionField = useFieldEditor("","text",plant.description);
    const priceField = useFieldEditor("","number",plant.price);
    const categoryField = useFieldEditor("","text",plant.category);
    const sectionField = useFieldEditor("","text",plant.section);
    const stockedField = useFieldEditor("","checkbox",plant.stocked?true:false,true);
    const quantityField = useFieldEditor("","number",plant.quantity);
    
    const sendResult = ()=>{
        plant = {
            name:plant.name,
            description:descriptionField.value,
            price:priceField.value,
            category:categoryField.value,
            section:sectionField.value,
            stocked:stockedField.value,
            quantity:quantityField.value
        }
        finishEditing(plant);
    }

    return (
        <>
            <h1 className={Styles["plantHeader"]}>{plant.name}</h1>
            <div className={Styles["plantView"]}>
                <div>
                    <div className={Styles["plantItem"]}><span>Description</span></div>
                    <div className={Styles["plantItem"]}>{descriptionField.inputField} </div>
                </div>
                <div>
                    <div className={Styles["plantItem"]}><span>Price</span></div>
                    <div className={Styles["plantItem"]}><span>{priceField.inputField}</span></div>
                </div>
                <div>
                    <div className={Styles["plantItem"]}><span>Category</span></div>
                    <div className={Styles["plantItem"]}><span>{categoryField.inputField}</span></div>
                </div>
                <div>
                    <div className={Styles["plantItem"]}><span>Section</span></div>
                    <div className={Styles["plantItem"]}><span>{sectionField.inputField}</span></div>
                </div>
                <div>
                    <div className={Styles["plantItem"]}><span>Stocked?</span></div>
                    <div className={Styles["plantItem"]}><span>{stockedField.inputField}</span></div>

                </div>
                <div>
                    <div className={Styles["plantItem"]}><span>Quantity </span></div>
                    <div className={Styles["plantItem"]}><span>{quantityField.inputField}</span></div>
                </div>
                
            </div>
            <div className={Styles["plantButtonRow"]}>
                <div className={Styles["plantButton"]} onClick={() => sendResult()}>
                        <span>Save</span>
                </div>
                <div className={Styles["plantButtonDanger"]} onClick={() => deletePlant()}>
                        <span>Delete</span>
                </div>
            </div>
        </>
    )
}

export default withRouter(EditPlantView)