import React from 'react'
import Styles from './AddOrderView.module.css'
import { withRouter } from 'react-router-dom'
import useFieldEditor from '../../EditSpecificOrder/useFieldEditor';
const AddOrderView = ({finishAdd }) => {
    const nameField = useFieldEditor("","text","");
    const emailField = useFieldEditor("","email","");
    const invoiceField = useFieldEditor("","text","");
    const completedField = useFieldEditor("","checkbox",false,true);

    const sendResult = ()=>{
        console.log(completedField.value);
        const order = {
            customerName:nameField.value,
            customerEmail:emailField.value,
            invoiceNumber:invoiceField.value,
            completedField:completedField.value,
            items:[]
        }
        finishAdd(order);
    }

    return (
        <>
            <h1 className={Styles["orderHeader"]}>Order</h1>
            <div className={Styles["orderView"]}>
                <div>
                    <div className={Styles["orderItem"]}><span>Customer Name</span></div>
                    <div className={Styles["orderItem"]}>{nameField.inputField} </div>
                </div>
                <div>
                    <div className={Styles["orderItem"]}><span>Customer Email</span></div>
                    <div className={Styles["orderItem"]}><span>{emailField.inputField}</span></div>
                </div>
                <div>
                    <div className={Styles["orderItem"]}><span>Invoice Number</span></div>
                    <div className={Styles["orderItem"]}><span>{invoiceField.inputField}</span></div>
                </div>
                <div>
                    <div className={Styles["orderItem"]}><span>Order Completed?</span></div>
                    <div className={Styles["orderItem"]}><span>{completedField.inputField}</span></div>

                </div>                
            </div>

            <div className={Styles["orderButtonRow"]}>
                <div className={Styles["orderButton"]} onClick={() => sendResult()}>
                        <span>Add</span>
                </div>
            </div>
        </>
    )
}

export default withRouter(AddOrderView)