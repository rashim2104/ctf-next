const Task1 = ({ taskanswers, setTaskAnswers, step, handleIncrementStep }) => {
    const handleCheck = async() => {
        const userAnswer = taskanswers.task1_1;
        try{
            const response = await fetch("/api/task1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userAnswer }),
            });
            if(response.ok){
                const data = await response.json();
                alert(data.message);
                if(data.message === "Correct answer. You have unlocked the next level."){
                    handleIncrementStep();
                }
            }
        }catch(error){
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className='task-1'>
            <input
                type='text'
                placeholder='Flag 1'
                required
                value={taskanswers.task1_1}
                onChange={(event) => setTaskAnswers({ ...taskanswers, task1_1: event.target.value })}
            />
            <br />
            <button onClick={handleCheck}>Check</button>
        </div>
    );
};

export default Task1;
