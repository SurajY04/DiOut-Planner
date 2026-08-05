import axios from 'axios'

const api = axios.create({
    baseURL : "https://diout-planner.onrender.com" ,
    withCredentials : true
})

export async function registerApi ({username , email , password}){

    const response = await api.post("/api/auth/" , {
        username ,
        email , 
        password
    })

    return response.data
}

export async function loginApi ({email , password}){

    try {
        const response = await api.post("/api/auth/login" , {
            email ,
            password
        })
        return response.data
    } catch (error) {
       console.log(error) 
    }
}

export async function getMeApi () {
    const response = await api.get("/api/auth/get-me")

    return response.data
}

