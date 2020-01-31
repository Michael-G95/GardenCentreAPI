import React from 'react'
import NavBar from '../../NavBar/NavBar';
import ErrorDisplay from '../../errorDisplay/ErrorDisplay';
import AddOrderView from './AddOrderView/AddOrderView';
import webService from '../../../webService'
import {connect} from 'react-redux'
import {pushError} from '../../../store/Actions'
import {withRouter} from 'react-router-dom'

const AddOrder = ({history,pushError})=>{
    const finishAdd=(order)=>{
        console.log(order);
        webService.createOrder(order)
        .then((response)=>{
            console.log(response)
            history.push(`/orders/view/${response.data.id}`);
        })
        .catch((error)=>{
            pushError('Error adding the new order',error.message);
        })
    }

    return (
        <>
        <NavBar/>
        <ErrorDisplay/>
        <AddOrderView finishAdd={finishAdd}/>
        </>        
    )
}

const mapStateToProps = (state)=>{return {}}
const mapDispatchToProps=(dispatch)=>{
    return{
        pushError:(name,message)=>dispatch(pushError(name,message))
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddOrder));
