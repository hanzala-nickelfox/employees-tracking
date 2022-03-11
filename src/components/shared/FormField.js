import { TextField } from '@mui/material'
import React from 'react'

function FormField(props) {
    return (
        <>
            <TextField id={props.id} label={props.label} variant={props.variant} type={props.type} />
        </>
    )
}

export default FormField