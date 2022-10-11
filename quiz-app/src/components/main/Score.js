import Card from "../layout/Card";
import classes from "./score.module.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Score = (props) => {
    const [input, setInput] = useState("");
    const [touched, setTouched] = useState(false);
    const history = useHistory();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.submit(input);
        history.push("/welcome");
    };

    const invalid = touched && input === "";

    const intialInputHandler = (event) => {
        setInput(event.target.value);
        setTouched(true);
    };

    return (
        <Card>
            <div className={classes.score}>
                <h2>All done!</h2>
                <p>Your final score is {props.score}.</p>
                <form onSubmit={formSubmitHandler}>
                    <label>Enter initials: </label>
                    <input
                        type="text"
                        onChange={intialInputHandler}
                        value={input}
                        className={invalid ? classes.invalid : ""}
                    />
                    <button type="submit" disabled={!touched || invalid}>
                        Submit
                    </button>
                </form>
            </div>
        </Card>
    );
};

export default Score;
