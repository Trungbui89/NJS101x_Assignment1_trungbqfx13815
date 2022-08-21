import React from 'react'
import moment from 'moment'
import { MenuItem, Select, InputLabel, FormControl, Grid, Button } from '@mui/material'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import EventRepeatIcon from '@mui/icons-material/EventRepeat'
import EventBusyIcon from '@mui/icons-material/EventBusy'
import './style.scss'

export default function Attendance(props) {
    const {
        userData,
        workplace,
        attendanceData,
        handleWorkplaceChange,
        selectItem,
        handleAttendanceUp,
        handleAttendanceDown
    } = props
    const checker = userData.attendanceId

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
                        {
                            checker 
                            ?
                                <div className="working">
                                    <p>Đang làm việc</p>
                                </div>
                            :
                                <div className="rest">
                                    <p>Không làm việc</p>
                                </div>
                        }
                    </div>
                    {
                        checker
                        ?
                            <div className="attended">
                                <p>Nơi làm: {attendanceData.attendanceData.workplace}</p>
                                <p>Thời gian bắt đầu: {moment(attendanceData.attendanceData.startTime).format('DD/MM/YYYY, h:mm:ss a')}</p>
                            </div>
                        :
                            <Grid container spacing={2} className="workplance-input">
                                <Grid xs={5}>
                                    <p className='input-label'>Địa điểm làm việc:</p>
                                </Grid>
                                <Grid xs={7}>
                                    <FormControl className='input-selector'>
                                        <InputLabel id="simple-select-label">Địa điểm</InputLabel>
                                        <Select
                                            labelId="simple-select-label"
                                            id="simple-select"
                                            value={workplace}
                                            label="Địa điểm"
                                            onChange={e => handleWorkplaceChange(e)}
                                        >
                                            {
                                                selectItem.map((item, index) => {
                                                    return <MenuItem value={item} key={index}>{item}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                    }
                    <div className="button-group">
                        {
                            checker
                            ?
                                <Button 
                                    variant="contained" 
                                    startIcon={<EventBusyIcon /> }
                                    onClick={e => handleAttendanceDown(e)}
                                >
                                    Kết thúc làm
                                </Button>
                            :
                                <Button 
                                    variant="contained" 
                                    startIcon={<EventAvailableIcon />}
                                    onClick={e => handleAttendanceUp(e)}
                                >
                                    Điểm Danh
                                </Button>
                        }
                        
                        <Button variant="contained" startIcon={<EventRepeatIcon />}>
                            Xin Nghỉ Phép
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
