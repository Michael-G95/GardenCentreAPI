import React, { useState, useEffect } from 'react'
import webService from '../../../webService'
import { connect } from 'react-redux'
import ErrorDisplay from '../../errorDisplay/ErrorDisplay'
import { pushError } from '../../../store/Actions'
import NavBar from '../../NavBar/NavBar'
import EditOrderView from './EditOrderView/EditOrderView'
import { withRouter } from 'react-router-dom'

const EditSpecificOrder = ({ history, match, pushError }) => {
    let [order, setOrder] = useState({});
    const id = match.params.id;

    useEffect(()=>{
        webService.getOrder(id)
        .then((response)=>{
            setOrder(response.data);
        })
        .catch((error)=>{
            pushError("Error getting order data from the API",error.message);
        })
    },[id]);



    const finishEditing = (order) => {
        // Set the order id as this isnt passed to child components
        order.id = id;

        webService.putOrder(id, order)
            .then((response) => {
                history.push(`/orders/view/${order.id}`);
            })
            .catch((error) => {
                pushError("Unable to save changes", error.message)
            })
    }

    const deleteOrder = () => {
        webService.deleteOrder(id)
            .then(() => {
                history.push('/orders/all');
            })
            .catch((error) => {
                pushError("Unable to delete", error.message);
            })
    }

    if (order.id === undefined) {
        // Not initialised
        return (
            <>
                <NavBar />
                <ErrorDisplay />
            </>
        )
    }
    return (
        <>
            <NavBar />
            <ErrorDisplay />
            <EditOrderView order={order} finishEditing={finishEditing} deleteOrder={deleteOrder} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        pushError: (name, message) => dispatch(pushError(name, message))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(EditSpecificOrder));