import { Card, Typography } from '@mui/material'
import React from 'react'



export default function Screen({numDisplay,result}){
    return (
        <>
        <Card sx={{backgroundColor:'#ccc',color:'white',maxWidth:400,maxHeight:100,textAlign:'right',paddingTop:2,pb:2,pr:1}}>
        <Typography variant='h6'>{numDisplay}</Typography>
        <Typography color={'secondary'} variant='caption'>{result}</Typography>
        </Card>
        </>
    )
}