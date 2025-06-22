import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
    "Ide gas 💪",
];


export default function App() {
    return (
        <div>
            <Steps />
            <Steps />
        </div>
    )
}
function Steps() {
    const [step, setStep] = useState(1)
    const [isOpen, setIsOpen] = useState(true)

    function handlePrevious() {
        if (step > 1) {
            setStep(s => s - 1)
        }
        console.log(step)
    }

    function handleNext() {
        if (step < 4) {
            setStep(s => s + 1)
        }
        console.log(step)
    }

    return (
        <div>
            <button className="close" onClick={() => setIsOpen(is => !is)}>&times;</button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? 'active' : ''}>1</div>
                        <div className={step >= 2 ? 'active' : ''}>2</div>
                        <div className={step >= 3 ? 'active' : ''}>3</div>
                        <div className={step >= 4 ? 'active' : ''}>4</div>
                    </div>

                    <p className="message">Step {step}: {messages[step - 1]}</p>

                    <div className="buttons">
                        <button style={{ backgroundColor: '#7959f2', color: '#fff' }} onClick={handlePrevious}>Previous</button>
                        <button style={{ backgroundColor: '#7959f2', color: '#fff' }} onClick={handleNext}>Next</button>
                    </div>
                </div >
            )}
        </div>
    )
}