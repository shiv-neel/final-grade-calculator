import React from 'react'
import {Button} from '@material-ui/core'

const NextButton = (props) => {
    return (
        <div>
            <Button 
            onClick={props.nextStep}
            style={
                {
                background: 'forestgreen',
                color: 'white',
                width: '12rem',
                height: '3rem',
                fontFamily: 'inherit',
                marginTop: '2rem',
                fontWeight: 200,
                fontSize: '20px'
                }}
            >{props.text}</Button>
        </div>
    )
}

export default NextButton
