import './App.css';
import {React, useState} from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import CurrGrade from './components/CurrGrade';
import DesiredGrade from './components/DesiredGrade';
import ExamPercent from './components/ExamPercent';
import Results from './components/Results';

function App() {

  const [currGrade, setCurrGrade] = useState(0)
  const [desiredGrade, setDesiredGrade] = useState(0)
  const [examPercent, setExamPercent] = useState(0)
  const [step, setStep] = useState(0)
  
  const data = {
    currGrade: currGrade,
    desiredGrade: desiredGrade,
    examPercent: examPercent
  }

  const prevStep = () => {
    setStep(step - 1)
  }
  const nextStep = () => {
    setStep(step + 1)
    console.log(data)
    
  }
  const pageToRender = (s) => {
    switch (s) {
      case 0:
        return (<WelcomeScreen nextStep={nextStep}/>)
      case 1:
        return (
        <CurrGrade
          prevStep={prevStep} nextStep={nextStep} 
          currGrade={currGrade} setCurrGrade={setCurrGrade}
        />)
      case 2:
        return (
        <DesiredGrade
          prevStep={prevStep} nextStep={nextStep}
          desiredGrade={desiredGrade} setDesiredGrade={setDesiredGrade} 
        />)
      case 3:
        return (
        <ExamPercent
          prevStep={prevStep} nextStep={nextStep}
          examPercent={examPercent} setExamPercent={setExamPercent}
        />)
      case 4:
        return (
        <Results 
          currGrade={currGrade}
          desiredGrade={desiredGrade}
          examPercent={examPercent}
          setStep={setStep}
        />)
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
  
  return (
    <div className='App'>
      {pageToRender(step)}
    </div>
  )
  
}

export default App;
