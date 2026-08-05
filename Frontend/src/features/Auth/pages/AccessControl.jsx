import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

const AccessControl = () => {

    const { loading, getMe, isAuthenticated } = useAuth()

    useEffect(() => {
        getMe()
    }, [])

    return isAuthenticated  ? <Outlet/> : <Navigate to={"/login"} />
}

export default AccessControl