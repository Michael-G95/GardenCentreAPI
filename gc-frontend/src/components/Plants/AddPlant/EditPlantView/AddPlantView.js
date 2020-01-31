import React from 'react'
import Styles from './AddPlantView.module.css'
import { withRouter } from 'react-router-dom'
import useFieldEditor from '../../EditSpecificPlant/useFieldEditor';
const AddPlantView = ({finishAdd }) => {
    const nameField = useFieldEditor("","text");
    const descriptionField = useFieldEditor("","text");
    const priceField = useFieldEditor("","number");
    const categoryField = useFieldEditor("","text");
    const sectionField = useFieldEditor("","text");
    const stockedField = useFieldEditor("","checkbox",false,true);
    const quantityField = useFieldEditor("","number");
    const sendResult = ()=>{
        console.log("FINAL SF.VAL=",stockedField.value)
        const plant = {
            name:nameField.value,
            description:descriptionField.value,
            price:priceField.value,
            category:categoryField.value,
            section:sectionField.value,
            stocked:stockedField.value,
            quantity:quantityField.value
        }
        finishAdd(plant);
    }

    return (
        <>
            <h1 className={Styles["plantHeader"]}>New Plant</h1>
            <div className={Styles["plantView"]}>
                <div>
                    <div className={Styles["plantItem"]}><span>Name</span></div>
                    <div className={Styles["plantItem"]}>{nameField.inputField} </div>
                </div>
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
            </div>
        </>
    )
}

export default withRouter(AddPlantView)