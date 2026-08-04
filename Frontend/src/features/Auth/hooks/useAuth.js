import { useContext } from "react";
import { AuthContext } from "../services/auth.context";
import { loginApi, registerApi } from "../services/auth.api";
import { useNavigate } from "react-router-dom";



export const useAuth = () => {
    const navigate = useNavigate()
    const context = useContext(AuthContext);
    const { loading, setLoading, user, setUser , isAuthenticated , setIsAuthenticated } = context;

    const handleRegister = async ({ username, email, password }) => {
        try {
            setLoading(true);
            const data = await registerApi({ username, email, password })
            setUser(data.user)
            alert(data.message)
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleLogin = async ({ email, password }) => {
        try {
            setLoading(true)
            const data = await loginApi({ email, password })
            setUser(data.user)
            console.log(data)
            navigate('/create')
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const getMe = async () => {
        try {
            setLoading(true)
            const data = await getMe()
            setIsAuthenticated(data.authenticated)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, handleRegister, handleLogin , getMe , isAuthenticated }
}

