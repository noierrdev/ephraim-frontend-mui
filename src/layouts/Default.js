import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layouts/Navbar'
const Default=props=>{
    return (
        <>
            <Navbar {...props} />
            <Outlet {...props} />
        </>
        
    )
}
export default Default;