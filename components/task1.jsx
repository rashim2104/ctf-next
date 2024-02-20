import React, { useState } from 'react';

const Task1 = ({ taskanswers, setTaskAnswers, step, handleIncrementStep }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleCheck = async () => {
        const userAnswer = taskanswers.task1_1;
        setIsLoading(true); // Set loading state to true
        try {
            const response = await fetch("/api/task1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userAnswer }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                if (data.message === "Correct answer. You have unlocked the next level.") {
                    handleIncrementStep();
                }
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <div className='task1'>
            <center><h2 className="task1name">Task 1</h2></center>
            <p className="task1intro">Unaku Pudichadha Podu</p>
            <div className='task-1'>
                <input
                    className='transparent-input'
                    type='text'
                    // placeholder='Flag 1'
                    required
                    value={taskanswers.task1_1}
                    onChange={(event) => setTaskAnswers({ ...taskanswers, task1_1: event.target.value })}
                />
                <br />
                <button className='rainbow-background' onClick={handleCheck} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Check'}
                </button>
            </div>
            <button className='hint-button' onClick={() => alert('Follow the rules da Kanna')}>
                Hint
            </button>
        </div>
    );
};

export default Task1;
