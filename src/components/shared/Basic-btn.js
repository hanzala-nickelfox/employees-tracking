import { Button } from '@mui/material'
import React from 'react'

function BasicBtn(props) {
    return (
        <Button className='w-100' variant={props.variant} >{props.text}</Button>
    )
}

export default BasicBtn