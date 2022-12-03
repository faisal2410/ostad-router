import axios from "axios"

export const usersLoader=async()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users")
}

export const userDetailsLoader=async({params})=>{
    return axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
}
