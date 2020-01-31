import React from 'react'
import Styles from './SinglePlantView.module.css'
import { withRouter } from 'react-router-dom'
const SinglePlantView = ({ plant, history }) => {
    return (
        <>
        <h1 className={Styles["plantHeader"]}>{plant.name}</h1>
        <div className={Styles["root"]}>
        <div className={Styles["plantView"]}>
            <div>
                <div className={Styles["plantItem"]}><span>Description</span></div>
                <div className={Styles["plantItem"]}><span>{plant.description}</span></div>
            </div>
            <div>
                <div className={Styles["plantItem"]}><span>Price</span></div>
                <div className={Styles["plantItem"]}><span>{plant.price}</span></div>
            </div>
            <div>
                <div className={Styles["plantItem"]}><span>Category</span></div>
                <div className={Styles["plantItem"]}><span>{plant.category}</span></div>
            </div>
            <div>
                <div className={Styles["plantItem"]}><span>Section</span></div>
                <div className={Styles["plantItem"]}><span>{plant.section}</span></div>
            </div>
            <div>
                <div className={Styles["plantItem"]}><span>Stocked?</span></div>
                <div className={Styles["plantItem"]}><span>{plant.stocked ? 'Yes' : 'No'}</span></div>

            </div>
            <div>
                <div className={Styles["plantItem"]}><span>Quantity </span></div>
                <div className={Styles["plantItem"]}><span>{plant.quantity}</span></div>
            </div>
        </div>
        <div className={Styles["plantButtonRow"]}>
            <div className={Styles["plantButton"]} onClick={()=>history.push(`/plants/edit/${plant.id}`)}>
                <span>Edit</span>
            </div>
        </div>
        </div>
        </>
    )
}

export default withRouter(SinglePlantView)