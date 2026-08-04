import React from 'react'
import CreatePlan from './features/Planner/pages/CreatePlan'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './features/Auth/pages/Register'
import GetPlan from './features/Planner/pages/GetPlan'
import { AuthProvider } from './features/Auth/services/auth.context'
import Login from './features/Auth/pages/Login'
import { PlanProvider } from './features/Planner/services/plan.context'
import AccessControl from './features/Auth/pages/AccessControl'

const App = () => {
  return (

    <AuthProvider>
      <PlanProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route element={<AccessControl/>}>
              <Route path='/create' element={<CreatePlan />} />
              <Route path='/get-plan/:id' element={<GetPlan />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PlanProvider>
    </AuthProvider>
  )
}

export default App