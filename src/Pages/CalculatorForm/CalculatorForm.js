import React, { useState } from 'react';

const CalculatorForm = () => {

    const options = {
        "👽": "+",
        "💀": "-",
        "👻": "*",
        "😱": "/"
    }

    const emojis = Object.keys(options);

    // set different state value
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState("+");

    // handle calculator handler
    const handleCalculate = () => {
        let val;

        if (operation == "+") {
            val = number1 + number2;
        }
        else if (operation == "-") {
            val = number1 - number2;
        }
        else if (operation == "*") {
            val = number1 * number2;
        }
        else if (operation == "/") {
            val = number1 / number2;
        }
        setResult(val);
    }
    return (


        <div class="d-flex align-items-center pb-5 justify-content-center " style={{ paddingTop: 100 }}>
            <div class="shadow p-5 rounded">

                <input class="form-control my-2" type="number" name="number1" id="number1" onInput={e => setNumber1(Number(e.target.value))} />

                <select class="form-control my-2" value={operation} onChange={e => setOperation(e.target.value)}>
                    {
                        emojis.map((emoji, index) => <option key={index} value={options[emoji]}>{emoji}</option>)
                    }


                </select>

                <input class="form-control my-2" type="number" name="number2" id="number2" onInput={e => setNumber2(Number(e.target.value))}

                />
                <button class="form-control btn btn-outline-success" onClick={handleCalculate}> Calculate</button>

                <p className='text-center my-3 text-danger '>

                    Answer: {result}
                </p>


            </div>
        </div>


    );
};

export default CalculatorForm;