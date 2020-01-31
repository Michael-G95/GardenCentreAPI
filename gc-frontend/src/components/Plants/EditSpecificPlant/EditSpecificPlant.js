import React, { useState, useEffect } from 'react'
import webService from '../../../webService'
import {connect} from 'react-redux'
import ErrorDisplay from '../../errorDisplay/ErrorDisplay'
import {pushError} from '../../../store/Actions'
import NavBar from '../../NavBar/NavBar'
import EditPlantView from './EditPlantView/EditPlantView'
import {withRouter} from 'react-router-dom'

const EditSpecificPlant = ({ history,match,pushError }) => {
    let [plant,setPlant] = useState({});
    const id = match.params.id;

    useEffect(()=>{
        webService.getPlant(id)
        .then((response)=>{
            setPlant(response.data);
        })
        .catch((error)=>{
            pushError("Error getting plant data from the API",error.message);
        })
    },[id]);

    const finishEditing = (plant)=>{
        // Set the plant id as this isnt passed to child components
        plant.id = id;
        
        webService.putPlant(id,plant)
        .then((response)=>{
            history.push(`/plants/view/${plant.id}`);
        })
        .catch((error)=>{
            pushError("Unable to save changes",error.message)
        })
    }

    const deletePlant=()=>{
        webService.deletePlant(id)
        .then(()=>{
            history.push('/plants/all');
        })
        .catch((error)=>{
            pushError("Unable to delete",error.message);
        })
    }

    if(plant.id===undefined){
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
            <ErrorDisplay/>
            <EditPlantView plant={plant} finishEditing={finishEditing} deletePlant={deletePlant}/>
        </>
    )
}

const mapStateToProps = (state)=>{
    return {

    }
}

const mapDispatchToprops = (dispatch)=>{
    return {
        pushError:(name,message)=>dispatch(pushError(name,message))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToprops)(EditSpecificPlant));