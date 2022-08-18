import React from "react"
import { useDispatch, useSelector } from "react-redux"
import HomeView from './Home'

const Home = () => {
    const userData = useSelector((state) => state.authReducer.authData.user)

    return (
        <HomeView 
            userData = {userData}
        />
    )
}

export default Home