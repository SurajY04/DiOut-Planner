import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isAuthenticated , setIsAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading , isAuthenticated , setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}