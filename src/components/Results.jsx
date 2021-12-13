import {React, useState, useEffect} from 'react'
import StartOverButton from './StartOverButton'

const Results = (props) => {
    const currGrade = props.currGrade
    const desiredGrade = props.desiredGrade
    const examPercent = props.examPercent

    let res = (desiredGrade - currGrade * (1-(examPercent/100))) / (examPercent/100)
    res = res.toFixed(2)

    const analysisMsgHandler = (res) => {
        
            if (res >= 90)
                return "Let's hope there's a curve on this one."
                
            else if (res >= 80)
                return 'Better start studying! You got this!'
                
            else if (res >= 70)
                return 'Hey, it could be worse.'
            
            else 
                return "You're chillin'."
        }
    
    return (
        <div>
            <h1>{res}%</h1>
            <p style={{fontWeight: 200}}>
            You need to score a <strong>{res}%</strong> or
            higher to receive a {desiredGrade}% in the class.</p>
            <br></br>
            <p>{analysisMsgHandler(res)}</p>
            <StartOverButton text='Start Over' setStep={props.setStep}/>

        </div>
    )
}

export default Results
