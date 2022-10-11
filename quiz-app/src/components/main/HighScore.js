import { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../layout/Card";
import classes from "./highscore.module.css";

const bubbleSort = (highscores) => {
    for (let i = 0; i < highscores.length; i++) {
        for (let j = 0; j < highscores.length - i; j++) {
            if (
                j + 1 < highscores.length &&
                highscores[j].score < highscores[j + 1].score
            ) {
                const temp = highscores[j];
                highscores[j] = highscores[j + 1];
                highscores[j + 1] = temp;
            }
        }
    }
};

let highscores = [];
const HighScore = (props) => {
    const [highScoreListChanged, setHighScoreListChanged] = useState(false);
    let rank = 1;
    const history = useHistory();
    if (highScoreListChanged) {
        setHighScoreListChanged(false);
    }

    const local = localStorage;
    if (local.length) {
        for (let i = 0; i < local.length; i++) {
            highscores[i] = JSON.parse(local[i]);
        }
    }
    bubbleSort(highscores);

    const goBackHandler = () => {
        history.push("/welcome");
    };

    const clearHighscoreHandler = () => {
        localStorage.clear();
        setHighScoreListChanged(true);
        highscores = [];
    };

    return (
        <Card>
            <div className={classes.highscore}>
                <h2>Highscores</h2>
                <div>
                    {highscores &&
                        highscores.map((highscore) => (
                            <p key={highscore.score}>
                                {rank++}. {highscore.initial} -{" "}
                                {highscore.score}
                            </p>
                        ))}
                </div>
                <form>
                    <button type="button" onClick={goBackHandler}>
                        Go Back
                    </button>
                    <button type="button" onClick={clearHighscoreHandler}>
                        Clear Highscores
                    </button>
                </form>
            </div>
        </Card>
    );
};

export default HighScore;
