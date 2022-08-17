import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { TextField } from '@mui/material'
import './Home.scss'
import cover from '../../assets/images/cover.jpg'
import profile from '../../assets/images/profileImg.jpg'

const Home = () => {
  return (
    <div className="Home">
        <div className="home-bg" />
        <div className='blur' style={{top: '-18%', right: 0}}/>
        <div className='blur' style={{top: '36%', left: '-8rem'}}/>
        <div className="card-info">

            <div className="profile-images">
                <div className="cover">
                    <img src={cover} alt="" />
                </div>
                <div className="profile">
                    <img src={profile} alt="" />
                </div>
            </div>

            <div className="profile-info">
                <p className="name">Nguyễn Hoàng Diệp</p>
                <p className="department">Senior UI/UX Designer</p>
                <div className="profile-detail">
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <TextField 
                                id="outlined-basic" 
                                label="id"
                                value="413241421"
                                disabled
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                        <Grid xs={6}>
                            <TextField 
                                id="outlined-basic-2" 
                                label="doB"
                                value="31/8/1989"
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
                                value="1"
                                disabled
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                        <Grid xs={6}>
                            <TextField 
                                id="outlined-basic-2" 
                                label="startDate"
                                value="31/8/1999"
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
                                value="31"
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

export default Home