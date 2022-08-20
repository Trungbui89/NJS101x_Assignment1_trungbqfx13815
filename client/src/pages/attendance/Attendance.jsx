import React from 'react'
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import './style.scss'

export default function Attendance(props) {
    const {
        userData
    } = props

    return (
        <div className="Attendance">
            <div className="Attendance-bg" />
            <div className="card-info">
                <div className="profile-container">
                    <div className="profile">
                        <img src={userData.profilePicture} alt="" />
                    </div>
                </div>
                <div className="content">
                    <p className='name'>{userData.name}</p>
                    <div className="work-status">
                        <p>trạng thái: </p>
                        
                    </div>
                        <FormControl className=''>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                                defaultValue={10}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                </div>
            </div>
        </div>
    )
}
