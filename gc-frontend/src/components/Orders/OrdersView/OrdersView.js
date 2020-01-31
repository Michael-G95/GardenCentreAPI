import React from 'react';
import Styles from './OrdersViews.module.css'
import OrderView from '../OrderView/OrderView';
const OrdersView = ({ orders,title }) => {

    if (orders[0]===undefined || orders.length < 1 ) {
        return <h1 className={Styles["ordersTitle"]}>No Orders to Display!</h1>
    }

    const orderViews = orders.map((order) => <OrderView key={order.id} order={order} />);

    return (
        <div>
            <h1 className={Styles["ordersTitle"]}>
                {title}
            </h1>
            {orderViews}
        </div>
        )
}

export default OrdersView