import React, {useReducer, useState} from "react";

interface IProps {
    answer: string,
    onClick: () => void,
    correctAnswer: string,

}

const Button = (props: IProps) => {
    const {answer, onClick, correctAnswer} = props;
    const [errorAnswer, setErrorAnswer] = useState(false);
    const verifyAnswer = () => {
        setTimeout(() => {
            onClick();
            setErrorAnswer(false);
        }, 500)
        if (answer !== correctAnswer) {
            setErrorAnswer(true);
        } else {
            setErrorAnswer(false);
        }

    }
    return <>
        <button onClick={verifyAnswer}
                className={`px-4 py-4 bg-gray-800 text-white 
                                  text-center transition ease-in-out delay-50 hover:bg-gray-600 } 
                                  ${errorAnswer ? 'bg-red-500' : ''}`}>{answer}</button>

    </>


}
export default Button;