import React from 'react'
import { TextField } from '@material-ui/core'
import PrevButton from './PrevButton'
import NextButton from './NextButton'

const ExamPercent = (props) => {
    const setExamPercent = props.setExamPercent

    const inputHandler = e => {
        setExamPercent(e.target.value)
    }
    return (
        <div>
            <h1>What is the weight of your Final Exam?</h1>
            <TextField required type='number' onChange={inputHandler}/>%
            <div style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
                <PrevButton text='Back' prevStep={props.prevStep}/>
                <NextButton text='Next' nextStep={props.nextStep}/>
            </div>
        </div>
    )
}

export default ExamPercent
