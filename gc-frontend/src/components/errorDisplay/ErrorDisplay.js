import React from 'react';
import { connect } from 'react-redux'
import ErrorItem from './ErrorItem';
import Styles from './Styles.module.css'
import { popError } from '../../store/Actions'

const ErrorDisplay = ({ errorList,popError }) => {

    if (errorList.length < 1) {
        // No errors to display, hide this component
        return <></>
    }

    const errorItem = <ErrorItem error={errorList[0]} remove={popError} />
    return (
        <div className={Styles["errorList"]}>
            {errorItem}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        errorList: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        popError: ()=>dispatch(popError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorDisplay);