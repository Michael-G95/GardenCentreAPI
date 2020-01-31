import ActionTypes from './ActionTypes'


export const setLoginId = (id)=>{
    // Called to set the ID of the user for any POST requests
    return{
        type:ActionTypes.SetStateId,
        data:id
    }
}

export const addIdNumber = (digit)=>{
    // Called to add a digit to id input
    return {
        type:ActionTypes.AddIdNumber,
        data:digit
    }
}

export const removeIdNumber = ()=>{
    return {
        type:ActionTypes.RemoveIdNumber
    }
}

export const LogIn=(id)=>{
    return {
        type:ActionTypes.LogIn,
        data:{
            id:id
        }
    }
}

export const LogOut=()=>{
    return {
        type:ActionTypes.LogOut
    }
}

export const popError = () => {
    return {
        type:ActionTypes.PopError
    }
}

export const pushError = (name, message) => {
    console.log('ACTION')
    return {
        type: ActionTypes.PushError,
        name: name,
        message:message
    }
}