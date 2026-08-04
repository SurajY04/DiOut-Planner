import axios from 'axios'

const api = axios.create({
    baseURL : "http://localhost:3000" ,
    withCredentials : true
})

export async function createPlan ({height , weight , gender , goal , isLactoseIntolerent , isVegetarian}) {
    try {
        const response = await api.post("/api/plan/create-plan" , {
            height ,
            weight ,
            gender ,
            goal ,
            isLactoseIntolerent ,
            isVegetarian
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function getPlan(id) {

    try {
        const response = await api.get(`/api/plan/get-plan/${id}`)

        return response.data
    } catch (error) {
        console.log(error)
    }
}