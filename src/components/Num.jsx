import React from "react";
import { Button, outlinedInputClasses } from "@mui/material";


const Num = ({numOutput})=>{

    const btnHandler = (e)=>{

        numOutput(e.target.name)
    }
    return(
        <>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name="7" onClick={btnHandler}>7</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name='8' onClick={btnHandler}>8</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name='9' onClick={btnHandler}>9</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name='*' onClick={btnHandler}>*</Button>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name="4" onClick={btnHandler}>4</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name='5' onClick={btnHandler}>5</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name='6' onClick={btnHandler}>6</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name='/' onClick={btnHandler}>/</Button>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name="1" onClick={btnHandler}>1</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name='2' onClick={btnHandler}>2</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name='3' onClick={btnHandler}>3</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name='+' onClick={btnHandler}>+</Button>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name="." onClick={btnHandler}>.</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name='0' onClick={btnHandler}>0</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name='=' onClick={btnHandler}>=</Button>
        <Button style={{backgroundColor:'white',color:'purple',fontWeight:'bold'}}  sx={{p:3,px:5.5}} name='-' onClick={btnHandler}>-</Button>
        </div>
        
        </>
    )
}
export default Num