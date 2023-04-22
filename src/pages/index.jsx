import { Box, Card } from '@mui/material'
import Screen from '../components/Screen'
import React, { useEffect, useState } from 'react'
import Num from '../components/Num'
import SpecialChar from '../components/SpecialChar'


export default function Home(){

    const [numArray,setNumArray] = useState([0])
    const [numStore,setNumStore] = useState([])
    const [arthemeticArray,setArthemeticArray] = useState([])
    const [memory,setMemory]= useState()
    const [calcResult,setCalcResult] = useState(0)
    useEffect(()=>{

    })
    const btnHandler = async(value)=>{
        let numTemp ,num = Array(),temp,char = Array(),newNum = [],tempChar

        if(value == 'c'){
            setArthemeticArray([])
            setNumArray(0)
            setCalcResult(0)
        }
        else if(value == 'mr'){

        }
        else if(value == 'm+'){

        }
        else if(value == 'm-'){

        }
        else if(value === '='){

        }
        else if(!isNaN(value) || value == '.'){
            numTemp = numStore
            numTemp.forEach(num=>{

                newNum.push(num)
            })
            newNum.push(value)
            // newNum.push(numTemp)
            // newNum.push(value)
            console.log(newNum)
            setNumStore(newNum)
            console.log('numStore')
            console.log(numStore)
            console.log('numStore')
            temp = numArray
            num.push(numArray)
            num.push(value)
            setNumArray(num)

        }
        else{
            let number = '',firstNum,secondNum = '',result
            
            if(calcResult.length > 0){
                // console.log('numStore')
                // console.log(numStore)
                // console.log('numStore')
                numStore.forEach(num=>{
                    // if(!isNaN(num) || num == '.')
                    secondNum += num
                    })
                    console.log(secondNum)
                    // console.log(parseFloat(secondNum) + parseFloat(secondNum))
                firstNum = numStore[0]
                if(arthemeticArray == '+'){
                    result = parseFloat(calcResult[0]) + parseFloat(secondNum)
                    secondNum = ''
                    setCalcResult(result)
                }
                else if(arthemeticArray == '-'){

                }
                else if(arthemeticArray == '/'){

                }
                else if(arthemeticArray == '*'){

                }
                // if(false){
            }
            else{
                numStore.forEach(num=>{
                    // if(!isNaN(num) || num == '.')
                    secondNum += num
                    })
                    // console.log(secondNum)
                setCalcResult(secondNum)
                number = ''
                setArthemeticArray(value)
                setNumStore([])
                temp = numArray
                temp.forEach(n=>{
                    num.push(n)
                })
                // num.push(numArray)
                num.push(value)
                setNumArray(num)
                // setCalcResult(value)
            }
           
        }
    }

    const calculator = ()=>{

    }


    return(
        <>
        <Card  color={'purple'} sx={{color:'white',backgroundColor:'purple',p:5,width:400,height:500}}>
        <Screen numDisplay={numArray} result={calcResult} />
        <SpecialChar output={(value)=>btnHandler(value)}/>
        <Num numOutput={(value)=>(btnHandler(value))}/>
        </Card>
        
        </>
    )
}