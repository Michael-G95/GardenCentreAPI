import React,{useState} from 'react'
import Styles from './SearchOrder.module.css'
import NavBar from '../../NavBar/NavBar';
import ErrorDisplay from '../../errorDisplay/ErrorDisplay';
import {withRouter} from 'react-router-dom'

const SearchOrder=({history})=>{
    let [name,setName]=useState("");
    return (
        <>
        <NavBar/>
        <ErrorDisplay/>
        <div className={Styles["searchArea"]}>
            <div className={Styles["searchHeader"]}>
                <h1>
                    Order Search
                </h1>
            </div>
            <div className={Styles["searchBar"]}>
            <div>
                <span>Search For Customer Name:</span>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div className={Styles["goButton"]} onClick={()=>history.push(`/orders/search/${name}`)}>
                <span>Go</span>
            </div>
            </div>
        </div>
        </>
    )
}

export default withRouter(SearchOrder)