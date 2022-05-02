import React, {memo, useState} from "react";
import {dummy_data} from "../dummy_data";
import Button from './buttons/Button'
import * as Styles from '../styles/index'

interface IProps {
    data: {
        img?: string,
        question: string,
        answer: string[],
        correctAnswer: string,
    } | null,
    handleAnswer: (answer: string) => void,
    index: number,

}

const Question = memo(({data, handleAnswer, index,}: IProps) => {
    if (!data) {
        return <div>No questions for you...</div>
    }

    const {answer, correctAnswer, img , question} = data;

    const shuffle = [...answer.sort(() => Math.random() - 0.5)];

    return (
        <>
            <div className="flex justify-between py-5 px-5 border-b border-black ">
                <h1>Questions</h1>
                <span>{index + 1} / {dummy_data.length}</span>
            </div>
            <Styles.QuestionContainer>
                {question}
            </Styles.QuestionContainer>

            <Styles.ImgContainer>
                <img src={img} alt="name" className="w-48 h-48"/>
            </Styles.ImgContainer>

            <Styles.ButtonContainer>
                {shuffle.map((answer, index) => (
                    <Button key={index} onClick={() => handleAnswer(answer)}
                            answer={answer}
                            correctAnswer={correctAnswer}
                    />
                ))}
            </Styles.ButtonContainer>
        </>
    )
})

export default Question;