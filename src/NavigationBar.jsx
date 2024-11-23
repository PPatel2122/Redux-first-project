import React from 'react'
import { NavLink } from 'react-router-dom'
import './All.css'



const NavigationBar = () => {
    return (
        <>
            <div className="main">

                <NavLink to="/" className="student page">
                    Home
                </NavLink>


                <NavLink to="/Student" className="student page">
                    Student
                </NavLink>


                <NavLink to="/Contect" className="student page">
                    Contect
                </NavLink>

            </div>
        </>
    )
}

export default NavigationBar