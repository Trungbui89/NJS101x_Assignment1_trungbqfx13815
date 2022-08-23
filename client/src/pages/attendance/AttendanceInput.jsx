import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import React from 'react'

export default function AttendanceInput(props) {
    const {
        value,
        setValue,
        annualQuantityIndex
    } = props
    return (
        <>
            {annualQuantityIndex.map(ele =>
                <div className="annual-leave-input-group" key={ele.index}>
                    <DatePicker
                        label="Ngày nghỉ"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TextField 
                        id="outlined-basic-2" 
                        label="Số giờ nghỉ"
                        margin="dense"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            )}
        </>
        
    )
}
