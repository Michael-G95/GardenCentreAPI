import React from 'react';
import Styles from './OrderView.module.css';
import { withRouter } from 'react-router-dom'

const OrderView = ({ order, history }) => {
    return (
        <div className={Styles["root"]}>
            <div className={Styles["orderView"]}>
                <div>
                    <div className={Styles["orderItem"]}><span>Customer Name</span></div>
                    <div className={Styles["orderItem"]}><span>{order.customerName}</span></div>
                </div>
                <div>
                    <div className={Styles["orderItem"]}><span>Customer Email</span></div>
                    <div className={Styles["orderItem"]}><span>{order.customerEmail}</span></div>
                </div>
                <div>
                    <div className={Styles["orderItem"]}><span>Invoice Number</span></div>
                    <div className={Styles["orderItem"]}><span>{order.invoiceNumber}</span></div>
                </div>
                <div>
                    <div className={Styles["orderItem"]}><span>Order Completed?</span></div>
                    <div className={Styles["orderItem"]}><span>{order.orderCompleted ? 'Yes' : 'No'}</span></div>

                </div>
                <div>
                    <div className={Styles["orderItem"]}><span>Items</span></div>
                    <div className={Styles["orderItem"]}><span>{order.items ? order.items.length : 0}</span></div>
                </div>
            </div>
            <div className={Styles["orderButtonRow"]}>
                <div className={Styles["orderButton"]} onClick={() => history.push(`/orders/view/${order.id}`)}>
                    <span>View/Edit</span>
                </div>
            </div>
        </div>
    )
}
export default withRouter(OrderView);