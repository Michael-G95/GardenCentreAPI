import ActionTypes from './ActionTypes'
const idReducer = (state="",action)=>{
    // Reducer for id of state
    switch(action.type){
        case ActionTypes.SetStateId:{
            return action.data;
        }
        case ActionTypes.AddIdNumber:{
            return state + action.data;
        }
        case ActionTypes.RemoveIdNumber:{
            if(state.length >0){
                return state.substr(0,state.length -1);
            }else{
                return '';
            }
            
        }
        case ActionTypes.LogOut:{
            return '';
        }
        default:{
            return state;
        }
    }
}

const loggedInReducer=(state=false,action)=>{
    switch(action.type){
        case ActionTypes.LogIn:{
            return true
        }
        case ActionTypes.LogOut:{
            return false;
        }

        default:{
            return state;
        }
    }
}

const errorReducer = (state = [], action) => {
    console.log('REDUCER',action.type);
    switch (action.type) {
        case ActionTypes.PopError: {
            if (state.length > 0) {
                return state.slice(0, state.length - 1);
            } else {
                return state;
            }
        }
        case ActionTypes.PushError: {
            return state.concat({
                name:action.name,
                message:action.message
            });
        }
        default: {
            return state;
        }
    }
}

export default {
    idReducer,loggedInReducer,errorReducer
}