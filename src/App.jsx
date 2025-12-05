import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout/Layout'
import { Login } from './Login/Login'
import { Conditions } from './Conditions/Conditions'
import { Checklist } from './Checklist/Checklist'

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Login />}/>
                <Route path='conditions/' element={<Conditions />}/>
                <Route path='checklist/' element={<Checklist />}/>
            </Route>
        </Routes>
    )
}
