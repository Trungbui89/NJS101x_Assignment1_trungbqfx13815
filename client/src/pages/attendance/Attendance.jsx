import React from 'react'
import moment from 'moment'
import { MenuItem, Select, InputLabel, FormControl, Grid, Button, Slide, Dialog,
         DialogTitle, IconButton, DialogContent, Typography, TableContainer, Table, 
         TableHead, TableRow, TableCell, TableBody, TextField } from '@mui/material'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import EventRepeatIcon from '@mui/icons-material/EventRepeat'
import EventBusyIcon from '@mui/icons-material/EventBusy'
import CloseIcon from '@mui/icons-material/Close'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './style.scss'
import AttendanceInput from './AttendanceInput'

// MODAL transition
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function Attendance(props) {
    const {
        userData,
        workplace,
        attendanceData,
        endAttendanceData,
        handleWorkplaceChange,
        selectItem,
        handleAttendanceUp,
        handleAttendanceDown,
        modal,
        setModal,
        annualState,
        setAnnualState,
        workTimeFomated,
        handleChangeAnnualQuantity,
        annualData,
        handleAnnualData,
        handleSubmitAnnual
    } = props
    const checker = attendanceData.attendanceData && userData.attendanceId

    return (
        <>
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
                            <p>tr???ng th??i: </p>
                            {
                                checker 
                                ?
                                    <div className="working">
                                        <p>??ang l??m vi???c</p>
                                    </div>
                                :
                                    <div className="rest">
                                        <p>Kh??ng l??m vi???c</p>
                                    </div>
                            }
                        </div>
                        {
                            checker
                            ?
                                <div className="attended">
                                    <p>N??i l??m: {attendanceData.attendanceData.workplace}</p>
                                    <p>Th???i gian b???t ?????u: {moment(attendanceData.attendanceData.startTime).format('DD/MM/YYYY, h:mm:ss a')}</p>
                                </div>
                            :
                                <Grid container spacing={2} className="workplance-input">
                                    <Grid xs={5}>
                                        <p className='input-label'>?????a ??i???m l??m vi???c:</p>
                                    </Grid>
                                    <Grid xs={7}>
                                        <FormControl className='input-selector'>
                                            <InputLabel id="simple-select-label">?????a ??i???m</InputLabel>
                                            <Select
                                                labelId="simple-select-label"
                                                id="simple-select"
                                                value={workplace}
                                                label="?????a ??i???m"
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
                                        K???t th??c l??m
                                    </Button>
                                :
                                    <Button 
                                        variant="contained" 
                                        startIcon={<EventAvailableIcon />}
                                        onClick={e => handleAttendanceUp(e)}
                                    >
                                        ??i???m Danh
                                    </Button>
                            }
                            
                            <Button variant="contained" startIcon={<EventRepeatIcon />} onClick={() => setAnnualState(true)}>
                                Xin Ngh??? Ph??p
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                open={modal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setModal(false)}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    Th???i gian/?????a ??i???m l??m vi???c ng??y: {moment().format('DD/MM/YYYY')}
                    <IconButton
                        aria-label="close"
                        onClick={() => setModal(false)}
                        sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                <Typography gutterBottom>
                    T???ng th???i gian l??m vi???c: {workTimeFomated}
                </Typography>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>N??i l??m vi???c</TableCell>
                                    <TableCell align="right">Th???i gian b???t ?????u</TableCell>
                                    <TableCell align="right">Th???i gian k???t th??c</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {endAttendanceData?.map((row) => (
                                <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.workplace}
                                </TableCell>
                                <TableCell align="right">{moment(row.startTime).format('DD/MM/YYYY, h:mm:ss a')}</TableCell>
                                <TableCell align="right">{moment(row.endTime).format('DD/MM/YYYY, h:mm:ss a')}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
            </Dialog>

            <Dialog
                open={annualState}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setAnnualState(false)}
                aria-describedby="alert-dialog-slide-description"
                className='annual-leave-dialog'
            >
                <ThemeProvider theme={theme}>
                    <DialogTitle sx={{ m: 0, p: 2 }}>
                        ????ng k?? ngh??? ph??p
                        <IconButton
                            aria-label="close"
                            onClick={() => setAnnualState(false)}
                            sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers>
                        <p style={{ marginLeft: '0.5rem'}}>Ch???n th???i gian ngh??? ph??p:</p>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <AttendanceInput 
                                annualData={annualData}
                                handleAnnualData={handleAnnualData}
                            />
                        </LocalizationProvider>
                        <div className="date-btn-group">
                            <Button 
                                variant="contained" 
                                startIcon={<BookmarkAddIcon />}
                                onClick={() => handleChangeAnnualQuantity('add')}
                                sx={{ margin: '0 0.5rem' }}
                            >
                                Th??m
                            </Button>
                            <Button 
                                variant="contained" 
                                startIcon={<BookmarkRemoveIcon />}
                                onClick={() => handleChangeAnnualQuantity('remove')}
                                sx={{ margin: '0 0.5rem' }}
                            >
                                B???t
                            </Button>
                        </div>
                        <p style={{ margin: '1rem 0.5rem'}}>S??? ng??y ngh??? c??n l???i:</p>
                        <TextField 
                                id="outlined-basic-2" 
                                label="Ng??y ngh???"
                                value={userData.annualLeave.toFixed(2)}
                                disabled
                                margin="dense"
                                sx={{width: '100%', paddingRight: '1rem'}}
                            />
                        <p style={{ margin: '1rem 0.5rem'}}>L?? do xin ngh???:</p>
                        <TextField 
                                id="outlined-basic-2" 
                                label="L?? do"
                                placeholder='Nh???p l?? do xin ngh???'
                                margin="dense"
                                value={annualData.reason}
                                onChange={e => handleAnnualData('reason', 0, e.target.value)}
                                sx={{width: '100%', paddingRight: '1rem'}}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        <Button 
                            variant="contained" 
                            startIcon={<EventRepeatIcon />}
                            disabled={userData.annualLeave <= 0 ? true : false}
                            onClick={handleSubmitAnnual}
                            sx={{
                                position: 'relative',
                                borderRadius: '0', 
                                marginTop:'2rem',
                                marginBottom: '1rem',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '97.5%',
                            }}
                        >
                            {userData.annualLeave <= 0 ? 'Kh??ng ????? th???i gian ngh???' : '????ng k?? Ngh???'}
                        </Button>
                    </DialogContent>
                </ThemeProvider>
            </Dialog>
        </>
    )
}

const theme = createTheme({
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    margin: '0 0.5rem'
                }
            },
        },
    },
  });
