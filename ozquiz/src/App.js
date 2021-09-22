import "./App.css";
import React, {useState} from 'react';
import WelcomeScreen from "./pages/WelcomeScreen";

function App() {
  // questions and answers maybe move later
  const questions = [
    {
      questionText: "who",
      answerOptions: [
        { answerText: "answer1", isCorrect: false },
        { answerText: "answer1", isCorrect: false },
        { answerText: "answer1", isCorrect: false },
        { answerText: "answer1", isCorrect: true },
      ],
    },
    {
      questionText: "what",
      answerOptions: [
        { answerText: "answer1", isCorrect: false },
        { answerText: "answer1", isCorrect: false },
        { answerText: "answer1", isCorrect: false },
        { answerText: "answer1", isCorrect: true },
      ],
    },
    {
      questionText: "where",
      answerOptions: [
        { answerText: "answer1", isCorrect: false },
        { answerText: "answer1", isCorrect: false },
        { answerText: "answer1", isCorrect: false },
        { answerText: "answer1", isCorrect: true },
      ],
    },
    {
      questionText: "when",
      answerOptions: [
        { answerText: "answer1", isCorrect: false },
        { answerText: "answer1", isCorrect: false },
        { answerText: "answer1", isCorrect: false },
        { answerText: "answer1", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('You reached the end of the quiz!')
    }
  };

  return (
    <div className='app'>
      <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <button onClick={() => handleAnswerButtonClick()}>{answerOption.answerText}</button>
          ))}
					</div>
      </>
    </div>
  );
}

export default App;
