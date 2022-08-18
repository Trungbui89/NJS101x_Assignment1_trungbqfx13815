import React from "react"
import { useDispatch, useSelector } from "react-redux"
import HomeView from './Home'

const Home = () => {
    const [img, setImg] = React.useState(null)
    const [modalStatus, setModalStatus] = React.useState(false)
    const userData = useSelector((state) => state.authReducer.authData.user)

    const onImgChange = (e) => {
        if(e.target.files && e.target.files[0]) {
            let image = e.target.files[0]
            setImg({
                image: URL.createObjectURL(image),
                imageData: image
            })
            setModalStatus(true)
        }
    }

    return (
        <HomeView 
            userData = {userData}
            modalStatus = {modalStatus}
            onImgChange = {onImgChange}
            setModalStatus={setModalStatus}
            img = {img}
        />
    )
}

export default Home