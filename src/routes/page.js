import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../components/mainPage/page'
import MealInfo from '../components/mealInfo/page'

const AllRoutes = ({ windowSize }) => {
    return (
        <Routes>
            <Route path='/' element={<MainPage windowSize={windowSize} />} />
            <Route path='/:mealid' element={<MealInfo windowSize={windowSize} />} />
        </Routes>
    )
}

export default AllRoutes
