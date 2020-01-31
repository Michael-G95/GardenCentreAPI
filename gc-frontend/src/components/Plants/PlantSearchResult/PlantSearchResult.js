import React,{useState,useEffect} from 'react'
import webService from '../../../webService';
import NavBar from '../../NavBar/NavBar';
import ErrorDisplay from '../../errorDisplay/ErrorDisplay';
import PlantsView from '../PlantsView/PlantsView';

const PlantSearchResult = ({match})=>{
    const term = match.params.term.toUpperCase();
    const [results,setResult] =useState({});

    useEffect(
        ()=>{
            // Get all plants, set result = to the plants array returned, filtered so plant is present if either name contains term or description does
            webService.getAllPlants()
                .then((response)=>{
                    setResult(
                        response.data.filter((plant)=>{
                            return (plant.name.toString().toUpperCase().includes(term) || plant.description.toString().toUpperCase().includes(term));    
                        })
                    )
                })
        },
        [term]
    )
    console.log(results);
    if(results[0]===undefined){
        return (
            <>
            <NavBar />
            <ErrorDisplay/>
            <PlantsView plants={[]} title={"Search Results"}/>
            </>
        )
    }
    return (
        <>
            <NavBar />
            <ErrorDisplay/>
            <PlantsView plants={results} title={"Search Results"}/>
        </>
    )
}

export default PlantSearchResult