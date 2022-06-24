import React, { useState } from 'react';

const CalculatorForm = () => {

    const options = {
        "👽": "+",
        "💀": "-",
        "👻": "*",
        "😱": "/"
    }

    const emojis = Object.keys(options);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState("+");


    const handleCalculate = () => {
        let val;

        switch (operation) {
            case "+": {
                val = number1 + number2;
                break;
            }
            case "-": {
                val = number1 - number2;
                break;
            }
            case "*": {
                val = number1 * number2;
                break;
            }
            case "/": {
                val = number1 / number2;
                break;
            }
        }
        setResult(val);
    }
    return (
        <div>
            <input type="number" name="number1" id="number1" onInput={e => setNumber1(Number(e.target.value))} />

            <select value={operation} onChange={e => setOperation(e.target.value)}>
                {
                    emojis.map((emoji, index) => <option key={index} value={options[emoji]}>{emoji}</option>)
                }


            </select>

            <input type="number" name="number2" id="number2" onInput={e => setNumber2(Number(e.target.value))}

            />
            <button onClick={handleCalculate}> Calculate</button>

            <p>

                {result}
            </p>

        </div>
    );
};

export default CalculatorForm;