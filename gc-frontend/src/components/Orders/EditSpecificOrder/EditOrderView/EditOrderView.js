import React,{useState} from 'react'
import Styles from './EditOrderView.module.css'
import { withRouter } from 'react-router-dom'
import useFieldEditor from '../useFieldEditor'
import EditItemsView from './EditItemsView/EditItemsView'
const EditOrderView = ({ history, order, finishEditing, deleteOrder }) => {
    const nameField = useFieldEditor("", "text", order.customerName);
    const emailField = useFieldEditor("", "email", order.customerEmail);
    const invoiceField = useFieldEditor("", "text", order.invoiceNumber);
    const completedField = useFieldEditor("", "checkbox", order.orderCompleted ? true : false, true);
    console.log(completedField.value);
    let [items,setItems] = useState(order.items);
    //const editedItems = order.items.filter(()=>true);
    const sendResult = () => {
        order = {
            customerName: nameField.value,
            customerEmail: emailField.value,
            invoiceNumber: invoiceField.value,
            orderCompleted: completedField.value,
            items: items
        }
        finishEditing(order);
    }
    const deleteItem=(item)=>{
        
        setItems(items.filter((element)=>{
            console.log(element);
            if(element.quantity===item.quantity && element.plant.name===item.plant.name && 
                element.plant.description===item.plant.description && element.plant.price===item.plant.price
                ){
                    return false;
                }else{
                    return true;
                }
        }))
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
            <div>
                <EditItemsView items={items} deleteItem={deleteItem} />
            </div>

            <div className={Styles["orderButtonRow"]}>
                <div className={Styles["orderButton"]} onClick={() => sendResult()}>
                    <span>Save</span>
                </div>
                <div className={Styles["orderButton"]} onClick={() => history.push(`/orders/edit/additem/${order.id}`)}>
                    <span>Add Item</span>
                </div>
                <div className={Styles["orderButtonDanger"]} onClick={() => deleteOrder()}>
                    <span>Delete</span>
                </div>
            </div>
        </>
    )
}

export default withRouter(EditOrderView)