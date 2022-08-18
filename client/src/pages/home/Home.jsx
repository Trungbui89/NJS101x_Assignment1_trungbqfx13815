import React, { useRef } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { TextField } from '@mui/material'
import moment from 'moment'
import './Home.scss'

const HomeView = (props) => {

    const { userData, onImgChange } = props
    const imgRef = useRef()

    return (
        <div className="Home">
            <div className="home-bg" />
            <div className="card-info">

                <div className="profile-images">
                    <div className="cover">
                        <img src={userData.coverPicture} alt="" />
                    </div>
                    <div className="profile-container">
                        <div className="profile">
                            <img src={userData.profilePicture} alt="" />
                        </div>
                        <div className="edit-icon">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                        </div>
                        <input 
                            type='file' 
                            name='profilePicture' 
                            ref={imgRef}
                            style={{display: 'none'}}
                            onChange={onImgChange}
                        />
                    </div>
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
        </div>
    )
}

export default HomeView