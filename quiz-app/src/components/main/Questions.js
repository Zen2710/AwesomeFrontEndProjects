import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../layout/Card";
import classes from "./questions.module.css";

const dummy_questions = [
    {
        id: 0,
        questionText: "Commonly used data types DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts",
    },
    {
        id: 1,
        questionText: "Arrays in JavaScript can be used to store ______.",
        options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ],
        answer: "4. all of the above",
    },
    {
        id: 2,
        questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
        options: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parentheses",
        ],
        answer: "3. quotes",
    },
    {
        id: 3,
        questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],
        answer: "4. console.log",
    },
    {
        id: 4,
        questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        options: ["1. break", "2. stop", "3. halt", "4. exit"],
        answer: "1. break",
    },
];

const Questions = (props) => {
    const history = useHistory();
    const [clicked, setClicked] = useState(false);
    const [questionId, setQuestionId] = useState(0);
    const [resultVisible, setResultVisible] = useState(false);
    const question = dummy_questions[questionId];
    const [answerStatus, setAnswerStatus] = useState("Incorrect!");
    const [time, setTime] = useState(50);

    let changingQuestion;

    if (time <= 0) {
        props.getTime(0);
        clearInterval(changingQuestion);
        history.push("/welcome/score");
    }
    useEffect(() => {
        props.getTime(time);
        const timer = setTimeout(() => {
            setTime((time) => time - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [time, props]);

    const optionClickedHandler = (event) => {
        setResultVisible(true);
        if (event.target.innerText === question.answer) {
            event.target.classList.add(classes.selectedCorrect);
            setAnswerStatus("Correct!");
        } else {
            event.target.classList.add(classes.selectedWrong);
            setTime((time) => (time > 10 ? time - 10 : 0));
        }
        setClicked(true);
        changingQuestion = setTimeout(() => {
            setClicked(false);
            setAnswerStatus("Incorrrect!");
            setResultVisible(false);
            event.target.classList.remove(classes.selectedCorrect);
            event.target.classList.remove(classes.selectedWrong);
            if (questionId === dummy_questions.length - 1) {
                history.push("/welcome/score");
            } else {
                setQuestionId((id) => id + 1);
            }
        }, 700);
    };

    return (
        <Card>
            <h2 className={classes.questionText}>{question.questionText}</h2>
            <div className={classes.options}>
                {question.options.map((option) => (
                    <button
                        className="option"
                        key={option[0]}
                        type="button"
                        onClick={clicked ? null : optionClickedHandler}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {resultVisible && (
                <p className={classes.answerStatus}>{answerStatus}</p>
            )}
        </Card>
    );
};

export default Questions;
