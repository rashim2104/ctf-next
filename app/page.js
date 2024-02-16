"use client";

import React , {useState} from 'react';
import Task1 from '@/components/task1';
import Task2 from '@/components/task2';
import Task3 from '@/components/task3';
import Task4 from '@/components/task4';
import Task5 from '@/components/task5';
import Task6 from '@/components/task6';
import Task7 from '@/components/task7';


function Form() {

    const [step, setStep] = useState(0);

    const TaskTitles = ["Chumma", "Inspect", "VisualCrypto", "NestedHex", "MorseCode", "QR", "MP3", "Congratulations"];
    const [taskanswers, setTaskAnswers] = useState({
        task1_1:"",
        task2_1:"",
        task2_2:"",
        task2_3:"",
        task3_1:"",
        task4_1:"",
        task4_2:"",
        task4_3:"",
        task5_1:"",
        task5_2:"",
        task6_1:"",
        task7_1:"",
    });

    const handleIncrementStep = () => {
        if(step < TaskTitles.length - 1){
            setStep((prevStep) => prevStep + 1);
        }
    };

    const PageDisplay = () => {
        switch (step) {
            case 0:
                return (
                <Task1 
                taskanswers={taskanswers} 
                setTaskAnswers={setTaskAnswers}  
                step={step}
                handleIncrementStep={handleIncrementStep}/>);
            case 1:
                return (
                    <Task2 
                    taskanswers={taskanswers} 
                    setTaskAnswers={setTaskAnswers}  
                    step={step}
                    handleIncrementStep={handleIncrementStep}/>);
            case 2:
                return (
                    <Task3 
                    taskanswers={taskanswers} 
                    setTaskAnswers={setTaskAnswers}  
                    step={step}
                    handleIncrementStep={handleIncrementStep}/>);
            case 3:
                return (
                    <Task4 
                    taskanswers={taskanswers} 
                    setTaskAnswers={setTaskAnswers}  
                    step={step}
                    handleIncrementStep={handleIncrementStep}/>);
            case 4:
                return (
                    <Task5 
                    taskanswers={taskanswers} 
                    setTaskAnswers={setTaskAnswers}  
                    step={step}
                    handleIncrementStep={handleIncrementStep}/>);
            case 5:
                return (
                    <Task6 
                    taskanswers={taskanswers} 
                    setTaskAnswers={setTaskAnswers}  
                    step={step}
                    handleIncrementStep={handleIncrementStep}/>);
            case 6:
                return (
                    <Task7 
                    taskanswers={taskanswers} 
                    setTaskAnswers={setTaskAnswers}  
                    step={step}
                    handleIncrementStep={handleIncrementStep}/>);
            case 7:
                return (
                    <div>
                        <h1>Congratulations! You have completed all the tasks.</h1>
                    </div>
                );
            default:
                return null;
        }        
    }

    return (
        <div className='form'>
            <div className='form-container'>
                <div className='header'>
                    <h1>{TaskTitles[step]}</h1>
                </div>
                <div className='body'>{PageDisplay()}</div>
                <div className='footer'>
                    {/* <button className='prev-btn' disabled={step == 0}
                    onClick = {() => {
                        setStep((currStep) => currStep - 1);
                    }} style={{ cursor: step === 0 ? 'not-allowed' : 'pointer' }}>
                        {step == 0? <span className='prevdisable'>Prev</span>:"Prev"}
                    </button>
                    <button className='next-btn' disabled={step == TaskTitles.length - 1}
                    onClick = {() => {
                        setStep((currStep) => currStep + 1);
                    }}>
                        {step == TaskTitles.length-1? "Submit":"Next"}
                    </button> */}

                </div>
            </div>
        </div>
    );
}

export default Form;

