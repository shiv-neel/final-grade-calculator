import {React, useState} from 'react'
import {TextField} from '@material-ui/core'
import PrevButton from './PrevButton'
import NextButton from './NextButton'

const CurrGrade = (props) => {
    const setCurrGrade = props.setCurrGrade

    const inputHandler = (e) => {
        setCurrGrade(e.target.value)
    }
    
    return (
        <div>
            <h1>What is your current grade in the class?</h1>
            <TextField required type='number' onChange={inputHandler}/>%
            <div style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
                <PrevButton text='Back' prevStep={props.prevStep}/>
                <NextButton text='Next' nextStep={props.nextStep}/>
            </div>
            
        </div>
    )
}

export default CurrGrade
