import React, { useEffect, useState } from 'react'
import webService from '../../../webService'
import NavBar from '../../NavBar/NavBar';
import ErrorDisplay from '../../errorDisplay/ErrorDisplay';
import SinglePlantView from './SinglePlantView/SinglePlantView';

const ViewSpecificPlant = ({ match }) => {
    let [plant, setPlant] = useState({});
    useEffect(() => {
        webService.getPlant(match.params.id)
            .then((response) => {
                console.log(response.data);
                setPlant(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            })

    }, [match.params.id]);

    if (!plant) {
        return (
            <>
                <NavBar />
                <ErrorDisplay />
                <h1>Loading...</h1>
            </>
        )
    }
    return (
        <>
            <NavBar />
            <ErrorDisplay />
            <SinglePlantView plant={plant} />
        </>
    );
}

export default ViewSpecificPlant