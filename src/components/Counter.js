import './Counter.css'
import {useState} from 'react'
export const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const substracToCounter = () => {
        setCounterValue(counterValue - inputValue)
    }

    const addToCounter = () => {
        setCounterValue(counterValue + inputValue)
    }
    return(
        <div>
            <h3 data-testid="header" >My Counter</h3>
            <h2 
                className={`${counterValue >= 100 ? "green" :""  }${counterValue <= -100 ? "red" :""  }`}  
                data-testid="counter">  
                {counterValue}
            </h2>
            <button 
            onClick={substracToCounter}
            data-testid="subtract-btn">-</button>
            <input data-testid="input"
                onChange={(e) => setInputValue(parseInt(e.target.value))}
                type="number"
                value={inputValue} />
            <button
            onClick={addToCounter}
            data-testid="add-btn">+</button>
        </div>
    )
}