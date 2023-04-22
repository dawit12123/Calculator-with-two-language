import { Button } from "@mui/material";
import React from "react";


const SpecialChar = ({output})=>{

    const btnHandler = (e)=>{
        output(e.target.name)
    }
    return(
        <>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:20,marginBottom:5}}>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5}} name='c' onClick={btnHandler}>C</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5}} name='mr' onClick={btnHandler}>MR</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5}} name='m+' onClick={btnHandler}>M+</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5}} name='m-' onClick={btnHandler}>M-</Button>
        </div>
        </>
    )
}
export default SpecialChar