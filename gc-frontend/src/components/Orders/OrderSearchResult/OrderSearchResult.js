import React,{useState,useEffect} from 'react'
import webService from '../../../webService';
import NavBar from '../../NavBar/NavBar';
import ErrorDisplay from '../../errorDisplay/ErrorDisplay';
import OrdersView from '../OrdersView/OrdersView';

const OrderSearchResult = ({match})=>{
    const term = match.params.term.toUpperCase();
    const [results,setResult] =useState({});

    useEffect(
        ()=>{
            // Get all orders, set result = to the orders array returned, filtered so order is present if either name contains term or description does
            webService.getAllOrders()
                .then((response)=>{
                    setResult(
                        response.data.filter((order)=>{
                            return (order.customerName.toString().toUpperCase().includes(term));    
                        })
                    )
                })
        },
        [term]
    )
    console.log(results);
    return (
        <>
            <NavBar />
            <ErrorDisplay/>
            <OrdersView orders={results} title={"Search Results"}/>
        </>
    )
}

export default OrderSearchResult