import React from 'react'
import NavBar from '../../NavBar/NavBar';
import ErrorDisplay from '../../errorDisplay/ErrorDisplay';
import AddPlantView from './EditPlantView/AddPlantView';
import webService from '../../../webService'
import {connect} from 'react-redux'
import {pushError} from '../../../store/Actions'
import {withRouter} from 'react-router-dom'

const AddPlant = ({history,pushError})=>{
    const finishAdd=(plant)=>{
        webService.createPlant(plant)
        .then((response)=>{
            console.log(response)
            history.push(`/plants/view/${response.data.id}`);
        })
        .catch((error)=>{
            pushError('Error adding the new plant',error.message);
        })
    }

    return (
        <>
        <NavBar/>
        <ErrorDisplay/>
        <AddPlantView finishAdd={finishAdd}/>
        </>        
    )
}

const mapStateToProps = (state)=>{return {}}
const mapDispatchToProps=(dispatch)=>{
    return{
        pushError:(name,message)=>dispatch(pushError(name,message))
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddPlant));
