import React, { useState, useEffect } from 'react';
import webService from '../../webService'
import NavBar from '../NavBar/NavBar'
import ErrorDisplay from '../errorDisplay/ErrorDisplay';
import OrdersView from './OrdersView/OrdersView';
const ViewAllOrders = () => {
    let [orderData, setOrderData] = useState(false);
    let [loaded, setLoaded] = useState(false);
    useEffect(() => {
        try {
            webService.getAllOrders()
                .then((result) => {
                    setOrderData(result.data);
                    setLoaded(true);
                })
                .catch((err) => {
                    
                    console.log(err.message);
                })

        }
        catch (Ex) {

        }

    }, []);

    if (!loaded) {
        return (
            <>
                <NavBar />
                <ErrorDisplay />
                <p>Loading...</p>
            </>)
    }

    return (
        <>
            <NavBar />
            <ErrorDisplay />
            <OrdersView orders={orderData} title="All Orders" />
        </>
    )
}

export default ViewAllOrders;