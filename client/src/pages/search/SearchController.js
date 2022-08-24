import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Search from './Search'
import { getAllAttendance } from '../../store/api/attendanceRequest'
import { workTime_DMY, convertToDMY } from '../../common/helper/workTime_DMY'

export default function SearchController() {
    const user = useSelector(state => state.authReducer.authData.user)
    const [attendanceData, setAttendanceData] = useState(null)

    // post get all attendance
    const getAttendanceData = () => {
        getAllAttendance({_id: user._id})
        .then(results => {
            setAttendanceData(results.data.attendance)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getAttendanceData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // table title data
    const attendanceTime = []
    const attendanceDateArr = 
        attendanceData?.reduce((total, ele) => {
            if(total.indexOf(moment(ele.startTime).format('DD/MM/YYYY')) === -1) {
                total.push(moment(ele.startTime).format('DD/MM/YYYY'))
                attendanceTime.push({
                    date: moment(ele.startTime).format('DD/MM/YYYY'),
                    time: 0
                })
            }
            attendanceTime[total.length - 1].time = 
                attendanceTime[total.length - 1].time + 
                moment(ele.endTime).diff(moment(ele.startTime))
            return total
        }, [])

    const annualDateList = user.annualLeaveList.reduce((newArr, item) => {
        return newArr = [...newArr, ...item.annualLeaveDateList]
    }, [])

    const attendanceDateTitleList = attendanceTime.map(item => {
            const newData = annualDateList.reduce((total, ele) => {
                if(convertToDMY(ele.annualDate) === item.date) {
                    total = ele.annualTime
                }
                return total
            }, 0)
        return ({
            ...item,
            time: workTime_DMY(item.time),
            annualTime: newData
        })
    })

    // table row data

    const attendanceDetail = attendanceData?.map(att => {
        return {
            ...att,
            workingTime: att.endTime ? workTime_DMY(moment(att.endTime).diff(moment(att.startTime))) : 'Chưa kết thúc'
        }
    })

    // console.log(attendanceDetail)

    return (
        <Search
            attendanceData={attendanceData}
            attendanceDateTitleList={attendanceDateTitleList}
            attendanceDetail={attendanceDetail}
        />
    )
}
