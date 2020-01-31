import React, { useState, useEffect } from 'react';
import PlantsView from '../PlantsView/PlantsView';
import webService from '../../../webService'
import NavBar from '../../NavBar/NavBar';
import ErrorDisplay from '../../errorDisplay/ErrorDisplay';
const ViewAllPlants = (props) => {
    let [plantData, setPlantData] = useState(false);
    let [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log('effect');
        try {
            webService.getAllPlants()
                .then((result) => {
                    debugger
                    setPlantData(result.data);
                    setLoaded(true);
                })
                .catch((err) => {
                    debugger
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
            <PlantsView plants={plantData} title="All Plants" />
        </>
    )
}

export default ViewAllPlants;