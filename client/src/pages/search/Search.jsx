import React from 'react'
import PropTypes from 'prop-types'
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableRow,
         TableHead, Typography, Paper } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { convertToDMY, convertToDMYT } from '../../common/helper/workTime_DMY'
import './style.scss'
import preview from '../../assets/icons/preview.jpg'

export default function Search(props) {
    const {
        attendanceData,
        attendanceDateTitleList,
        attendanceDetail
    } = props
        
    function Row(props) {
        const { row, att } = props
        const [open, setOpen] = React.useState(false)
        // console.log(att)

        return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell sx={{ fontSize: '1rem', fontWeight: 700 }}>Ngày</TableCell>
                <TableCell sx={{ fontSize: '1rem', fontWeight: 700 }} align="right">Tổng thời gian</TableCell>
                <TableCell sx={{ fontSize: '1rem', fontWeight: 700 }} align="right">Annual Leave</TableCell>
            </TableRow>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row" sx={{ fontSize: '1rem', fontWeight: 700 }}></TableCell>
                <TableCell sx={{ fontSize: '1.2rem', fontWeight: 500 }}>{row.date}</TableCell>
                <TableCell sx={{ fontSize: '1.2rem', fontWeight: 500 }} align="right">{row.time}</TableCell>
                <TableCell sx={{ fontSize: '1.2rem', fontWeight: 500 }} align="right">{row.annualTime}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        {/* <Typography variant="h6" gutterBottom component="div">
                        History
                        </Typography> */}
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: '1.1rem', fontWeight: 500 }}>Địa điểm</TableCell>
                                    <TableCell sx={{ fontSize: '1.1rem', fontWeight: 500 }}>Giờ bắt đầu</TableCell>
                                    <TableCell sx={{ fontSize: '1.1rem', fontWeight: 500 }} align="right">Giờ kết thúc</TableCell>
                                    <TableCell sx={{ fontSize: '1.1rem', fontWeight: 500 }} align="right">Thời gian làm</TableCell>
                                </TableRow>
                            </TableHead>
                        <TableBody>
                            {att.map((detailRow) => {
                                // console.log(`${convertToDMY(detailRow.startTime)} <> ${row.date}`)
                                return (
                                    convertToDMY(detailRow.startTime) === row.date
                                    ?
                                        <TableRow key={detailRow._id}>
                                            <TableCell component="th" scope="row" sx={{ color: '#848484' }}>
                                            {detailRow.workplace}
                                            </TableCell>
                                            <TableCell sx={{ color: '#848484' }}>{convertToDMYT(detailRow.startTime)}</TableCell>
                                            <TableCell sx={{ color: '#848484' }} align="right">{convertToDMYT(detailRow.endTime)}</TableCell>
                                            <TableCell sx={{ color: '#848484' }} align="right">{detailRow.workingTime}</TableCell>
                                        </TableRow>
                                    :
                                        null
                                )
                            })}
                        </TableBody>
                        </Table>
                    </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
        )
    }
    
    // const rows = attendanceDateTitleList?.map(ele => createData(ele.date, ele.time, ele.annualTime))
    // console.log(attendanceDateTitleList)
    return (
        <div className="search-compoment">
            <div className="card-info">
                <div className="search-compoment-header">
                    <p>Thông tin giờ làm</p>
                </div>
                <div className="content">
                    {
                        attendanceData 
                        ?
                            <div>
                                <TableContainer 
                                    component={Paper} 
                                    sx={{
                                        background: '#f8f8f8', 
                                        width: '95%',
                                        marginRight: 'auto',
                                        marginLeft: 'auto',
                                        boxShadow: 'none',
                                        marginBottom: '1.5rem',
                                        whiteSpace: 'nowrap' 
                                    }}
                                >
                                    <Table aria-label="collapsible table">
                                        <TableBody>
                                        {attendanceDateTitleList.map((row) => (
                                            <Row 
                                                key={row.date} 
                                                row={row}
                                                att={attendanceDetail}
                                            />
                                        ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        :
                            <div>
                                <img src={preview} alt='' />
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
