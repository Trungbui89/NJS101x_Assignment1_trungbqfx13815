import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import Attendance from './Attendance'
import { addAttendance, getAttendanceInfo, endAttendance } from '../../store/action/attendanceAction'

const AttendanceController = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.authReducer.authData.user)
    const attendanceData = useSelector(state => state.attendanceReducer)
    const endAttendanceData = useSelector(state => state.endAttendanceReducer.endAttendanceData)

    const selectItem = ['Nhà', 'Công ty', 'Khách hàng']
    const [workplace, setWorkplace] = useState(selectItem[1])
    const [modal, setModal] = useState(false)
    const [annualState, setAnnualState] = useState(false)
    const [annualQuantityIndex, setAnnualQuantityIndex] = useState([{index: 1}])

    // handle workplace input
    const handleWorkplaceChange = (e) => {
        setWorkplace(e.target.value)
    }

    // get attendance
    const handleGetAttendance = () => {
        if(userData.attendanceId) {
            dispatch(getAttendanceInfo({attendanceId: userData.attendanceId}))
        } else {
            return undefined
        }
    }

    React.useEffect(() => {
        handleGetAttendance()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    // attendance up/down
    const handleAttendanceUp = (e) => {
        dispatch(addAttendance({
            workplace: workplace,
            _id: userData._id,
            name: userData.name
        }, userData))
    }

    const handleAttendanceDown = () => {
        dispatch(endAttendance({
            attendanceId: attendanceData.attendanceData._id
        }, userData._id))
        setModal(true)
    }

    // 
    const workTime = endAttendanceData?.reduce((total, currentValue) => {
        const endTime = moment(currentValue.endTime)
        const startTime = moment(currentValue.startTime)
        const currentTime = endTime.diff(startTime)
        return (
            total + currentTime
        )
    }, 0)
    const hours = Math.floor(workTime/(60*60*1000))
    const minutes = Math.floor(((workTime - hours*60*60*1000))/(1000*60))
    const seconds = Math.round((workTime - hours*60*60*1000 - minutes*60*1000)/1000)
    const workTimeFomated = `${hours} giờ ${minutes} phút ${seconds} giây`

    const handleChangeAnnualQuantity = (type) => {
        if(type === 'add') {
            const newIndex = annualQuantityIndex[annualQuantityIndex.length - 1].index + 1
            setAnnualQuantityIndex([...annualQuantityIndex, {index: newIndex}])
        } else if(type === 'remove') {
            const newIndexArr = annualQuantityIndex.filter(item => {
                return item.index !== annualQuantityIndex.length || item.index === 1
            })
            setAnnualQuantityIndex(newIndexArr)
        }
    }

    return (
        <Attendance 
            userData={userData}
            attendanceData={attendanceData}
            endAttendanceData={endAttendanceData}
            selectItem={selectItem}
            workplace={workplace}
            modal={modal}
            annualState={annualState}
            workTimeFomated={workTimeFomated}
            annualQuantityIndex={annualQuantityIndex}
            setModal={setModal}
            setAnnualState={setAnnualState}
            handleWorkplaceChange={handleWorkplaceChange}
            handleAttendanceUp={handleAttendanceUp}
            handleAttendanceDown={handleAttendanceDown}
            handleChangeAnnualQuantity={handleChangeAnnualQuantity}
        />
    )
}

export default AttendanceController
