import { createContext , useState } from "react";

export const PlanContext = createContext();

export const PlanProvider = ({children}) => {
    const [plan , setPlan] = useState('');
    const [loading , setLoading] = useState(false);
    const [id , setId] = useState('');

    return (
        <PlanContext.Provider value={{plan , setPlan , loading , setLoading , id , setId}}>
            {children}
        </PlanContext.Provider>
    )

}