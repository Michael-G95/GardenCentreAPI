import React from 'react';
import PlantView from '../PlantView/PlantView'
import Styles from './PlantViews.module.css'
const PlantsView = ({ plants,title }) => {

    if (plants.length < 1) {
        return <h1 className={Styles["plantsTitle"]}>No Plants to Display!</h1>
    }

    const plantViews = plants.map((plant) => <PlantView key={plant.id} plant={plant} />);

    return (
        <div>
            <h1 className={Styles["plantsTitle"]}>
                {title}
            </h1>
            {plantViews}
        </div>
        )
}

export default PlantsView