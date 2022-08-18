import React, { useRef } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { TextField, Slide, Dialog, Button } from '@mui/material'
import moment from 'moment'
import './Home.scss'

// MODAL transition
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const HomeView = (props) => {
    const { 
        userData, 
        onImgChange, 
        img,
        modalStatus,
        setModalStatus
    } = props
    const imgRef = useRef()
    console.log(img)

    return (
        <div className="Home">
            <div className="home-bg" />
            <div className="card-info">

                <div className="profile-images">
                    <div className="cover">
                        <img src={userData.coverPicture} alt="" />
                    </div>
                    <div className="profile-container" onClick={()=>{imgRef.current.click()}}>
                        <div className="profile">
                            <img src={userData.profilePicture} alt="" />
                        </div>
                        <div className="edit-icon">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </div>
                    </div>
                    <input 
                        type='file' 
                        name='profilePicture' 
                        ref={imgRef}
                        style={{display: 'none'}}
                        onChange={onImgChange}
                    />
                </div>

                <div className="profile-info">
                    <p className="name">{userData.name}</p>
                    <p className="department">{userData.department}</p>
                    <div className="profile-detail">
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="id"
                                    value={userData._id}
                                    disabled
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                            <Grid xs={6}>
                                <TextField 
                                    id="outlined-basic-2" 
                                    label="doB"
                                    value={moment(userData.dob).format('DD/MM/YYYY')}
                                    disabled
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="salaryScale"
                                    value={userData.salaryScale}
                                    disabled
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                            <Grid xs={6}>
                                <TextField 
                                    id="outlined-basic-2" 
                                    label="startDate"
                                    value={moment(userData.startDate).format('DD/MM/YYYY')}
                                    disabled
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="annualLeave"
                                    value={userData.annualLeave}
                                    disabled
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <Dialog
                open={modalStatus}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setModalStatus(!modalStatus)}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className='cardBody'>
                    <div className='blur' style={{top: '-18%', right: '-45%', zIndex: -1}}/>
                    <div className='blur' style={{top: '35%', right: '75%', zIndex: -1}}/>
                    <div className="preview-avatar">
                        {img && (
                            <img src={img.image} alt='' />
                        )}
                    </div>
                    <h1 className='preview-avatar-text'>Sử dụng avatar này?</h1>
                    <div className="preview-avatar-button-group">
                        <Button variant="contained" sx={{margin: '0 12px', padding: '6px 32px', textTransform: 'none'}}>Đồng ý</Button>
                        <Button 
                            variant="contained" 
                            sx={{margin: '0 12px', padding: '6px 32px', textTransform: 'none'}}
                            onClick={() => imgRef.current.click()}
                        >Tải Lại</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default HomeView