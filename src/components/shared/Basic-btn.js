import { Button } from '@mui/material'
import React from 'react'

function BasicBtn(props) {
    return (
        <Button variant={props.variant}>{props.text}</Button>
    )
}

export default BasicBtn