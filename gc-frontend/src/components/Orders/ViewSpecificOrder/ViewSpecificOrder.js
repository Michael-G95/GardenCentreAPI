import React, { useEffect, useState } from 'react'
import webService from '../../../webService'
import NavBar from '../../NavBar/NavBar';
import ErrorDisplay from '../../errorDisplay/ErrorDisplay';
import SingleOrderView from './SingleOrderView/SingleOrderView';

const ViewSpecificOrder = ({ match }) => {
    let [order, setOrder] = useState({});
    useEffect(() => {
        webService.getOrder(match.params.id)
            .then((response) => {
                console.log(response.data);
                setOrder(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            })

    }, [match.params.id]);

    if (!order) {
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
            <SingleOrderView order={order} />
        </>
    );
}

export default ViewSpecificOrder