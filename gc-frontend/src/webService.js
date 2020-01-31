import axios from 'axios'
const SERVICE_ROOT_URL="https://mg-gardencentre.herokuapp.com/api"
//const SERVICE_ROOT_URL = "https://localhost:44337/api"

export const getAllPlants = async () => {
    return axios.get(`${SERVICE_ROOT_URL}/plants`);
}

export const getPlant = (id) => {
    return axios.get(`${SERVICE_ROOT_URL}/plants/${id}`);
}

export const putPlant=(id,plant)=>{
    return axios.put(`${SERVICE_ROOT_URL}/plants/${id}`,plant)
}

export const deletePlant=(id)=>{
    return axios.delete(`${SERVICE_ROOT_URL}/plants/${id}`);
}

export const createPlant=(plant)=>{
    return axios.post(`${SERVICE_ROOT_URL}/plants`,plant);
}

export const getAllOrders = async () => {
    return axios.get(`${SERVICE_ROOT_URL}/orders/`);
}

export const getOrder = (id) => {
    return axios.get(`${SERVICE_ROOT_URL}/orders/${id}`);
}

export const putOrder=(id,order)=>{
    return axios.put(`${SERVICE_ROOT_URL}/orders/${id}`,order)
}

export const deleteOrder=(id)=>{
    return axios.delete(`${SERVICE_ROOT_URL}/orders/${id}`);
}

export const createOrder=(order)=>{
    return axios.post(`${SERVICE_ROOT_URL}/orders/`,order);
}


export default {
    getAllPlants,getPlant,putPlant,deletePlant,createPlant,getAllOrders,getOrder,putOrder,deleteOrder,createOrder
}