import React,{useState} from 'react'
import Styles from './SearchPlant.module.css'
import NavBar from '../../NavBar/NavBar';
import ErrorDisplay from '../../errorDisplay/ErrorDisplay';
import {withRouter} from 'react-router-dom'

const SearchPlant=({history})=>{
    let [name,setName]=useState("");
    return (
        <>
        <NavBar/>
        <ErrorDisplay/>
        <div className={Styles["searchArea"]}>
            <div className={Styles["searchHeader"]}>
                <h1>
                    Plant Search
                </h1>
            </div>
            <div className={Styles["searchBar"]}>
            <div>
                <span>Search For Name:</span>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div className={Styles["goButton"]} onClick={()=>history.push(`/plants/search/${name}`)}>
                <span>Go</span>
            </div>
            </div>
        </div>
        </>
    )
}

export default withRouter(SearchPlant)