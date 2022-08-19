import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import HomeView from './Home'
import { updateAvatar } from '../../store/action/fileAction'

const Home = () => {
    const dispatch = useDispatch()
    const imgRef = useRef()
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

    const handleUploadImg = (e) => {
        e.preventDefault()
        const data = new FormData() 
        data.append('file', img.imageData)
        dispatch(updateAvatar(data))
    }

    return (
        <HomeView 
            userData={userData}
            modalStatus={modalStatus}
            onImgChange={onImgChange}
            setModalStatus={setModalStatus}
            handleUploadImg={handleUploadImg}
            img={img}
            imgRef={imgRef}
        />
    )
}

export default Home