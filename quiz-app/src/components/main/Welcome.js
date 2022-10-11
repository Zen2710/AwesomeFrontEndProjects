import { useHistory } from "react-router-dom";
import Card from "../layout/Card";
import classes from "./welcome.module.css";

const Welcome = () => {
    const history = useHistory();
    const startQuizHandler = () => {
        history.push("/welcome/questions");
    };

    return (
        <Card>
            <section className={classes.welcome}>
                <h2>Coding Quiz Challenge</h2>
                <p>
                    Try to answer to following code-related questions within the
                    time limit.
                </p>
                <p>
                    Keep in mind that incorrect answers will penalize your
                    score/time by ten seconds!
                </p>
                <button onClick={startQuizHandler}>Start Quiz</button>
            </section>
        </Card>
    );
};

export default Welcome;
