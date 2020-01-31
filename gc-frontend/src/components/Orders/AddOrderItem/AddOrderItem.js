import React, { useState, useEffect } from 'react'
import NavBar from '../../NavBar/NavBar'
import ErrorDisplay from '../../errorDisplay/ErrorDisplay'
import webService from '../../../webService';
import { connect } from 'react-redux'
import { pushError } from '../../../store/Actions'
import AddItemView from './AddItemView/AddItemView';
import {withRouter} from 'react-router-dom'
const AddOrderItem = ({ history,match, pushError }) => {
    const [order, setOrder] = useState({});
    const [plants, setPlants] = useState([]);
    const id = match.params.id;
    useEffect(() => {
        console.log("E1",id);
        webService.getOrder(id)
            .then((response) => {
                setOrder(response.data);
            })
            .catch((error) => {
                pushError("Error getting order data from the API", error.message);
            })
    }, [id]);
    useEffect(()=>{
        console.log("E2");
        webService.getAllPlants()
            .then((response) => {
                setPlants(response.data)
            })
            .catch((error) => {
                pushError("Error getting plant data from the API", error.message);
            })
    },[])

    const addItem=(plant,quantity)=>{
        webService.getPlant(plant)
        .then((response)=>{
            console.log(response);
            const orderItem={
                plant:{
                    id:response.data.id,
                    name:response.data.name,
                    description:response.data.description,
                    price:response.data.price
                },
                quantity:quantity
            }

            if(order.items===null || order.items===undefined){
                order.items=[]
            }
            order.items = order.items.concat(orderItem);
            webService.putOrder(order.id,order)
            .then((response)=>{
                history.push(`/orders/edit/${order.id}`);
            })
            .catch((error)=>{
                pushError('Error updating the order with the API',error.message)
            })
        })
        .catch((error) => {
            pushError("Error getting order data from the API", error.message);
        })
    }
    if (plants.length === 0 || order.id === undefined) {
        // Not yet loaded
        return  <div>
        <NavBar />
        <ErrorDisplay />
    </div>
    }
    return (
        <div>
            <NavBar />
            <ErrorDisplay />
            <AddItemView plants={plants} order={order} addItem={addItem}/>
        </div>
    )
}
const mapStateToProps = (state) => { return {} }
const mapDispatchToProps = (dispatch) => {
    return {
        pushError: (message) => dispatch(pushError(message))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddOrderItem))