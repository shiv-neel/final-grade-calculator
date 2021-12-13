import React from 'react'
import NextButton from './NextButton'

const WelcomeScreen = (props) => {
    return (
        <div>
            <h1>Welcome to Final Grade Calculator!</h1>
            <NextButton text='Get Started' nextStep={props.nextStep}/>
        </div>
    )
}

export default WelcomeScreen
