import React, { useState } from "react";
import * as Styles from "./styles";
import { dummy_data, IDummy_data } from "./dummy_data";
import Question from "./components/Question";
import Congratulations from "./components/congrats/Congratulations";

const App = () => {
  const [question, setQuestion] = useState<IDummy_data[]>(dummy_data);
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  const [score, setScore] = useState(0);

  const [gameEnded, setGameEnded] = useState(false);

  const [wrongQ, setWrongQ] = useState<any>([]);

  const handleAnswer = (answer: string) => {
    const newIndex = index + 1;
    setIndex(newIndex);
    if (answer === question[index].correctAnswer) {
      setScore(score + 1);
    }
    if (answer !== question[index].correctAnswer) {
      const newIndex2 = index + 1 ;
      setIndex2(newIndex2);
      setWrongQ((prevState: IDummy_data[]) => {
        return [...prevState, question[index]];
      });
      if (newIndex >= question.length) {
        setGameEnded(true);
      }
    }
  };
  console.log('Question', question);
  console.log('Index1 ' , index);
  console.log('Game ended',gameEnded);
  console.log('WrongQ', wrongQ)
  console.log('Index2 ', index2);



  return (
    <Styles.Styles>
      {gameEnded && wrongQ.length === 0 ? (
        <Congratulations score={score} />
      ) : gameEnded && wrongQ.length > 0 ? (
        <Styles.Card>
          <Question
            data={wrongQ[index2]}
            handleAnswer={handleAnswer}
            index={index2}
          />
        </Styles.Card>
      ) : (
        <Styles.Card>
          <Question
            data={question[index]}
            handleAnswer={handleAnswer}
            index={index}
          />
        </Styles.Card>
      )}
    </Styles.Styles>
  );
};
export default App;
