import React, { Suspense } from "react";
import { Fragment, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Questions from "./components/main/Questions";
import LoadingSpinner from "./components/layout/LoadingSpinner";

const HighScore = React.lazy(() => import("./components/main/HighScore"));
const Welcome = React.lazy(() => import("./components/main/Welcome"));
const Score = React.lazy(() => import("./components/main/Score"));

function App() {
    const [time, setTime] = useState(null);
    const obtainedTime = (value) => {
        setTime(value);
    };

    const submitted = (initial) => {
        const scoreData = { initial, score: time };
        localStorage.setItem(localStorage.length, JSON.stringify(scoreData));
        setTime(null);
    };

    return (
        <Fragment>
            <Header time={time} />
            <main className="mainCard">
                <Switch>
                    <Suspense fallback={<LoadingSpinner />}>
                        <Route path="/" exact>
                            <Redirect to="/welcome" />
                        </Route>
                        <Route path="/welcome" exact>
                            <Welcome></Welcome>
                        </Route>
                        <Route path="/welcome/questions">
                            <Questions getTime={obtainedTime}></Questions>
                        </Route>
                        <Route path="/welcome/score">
                            <Score score={time} submit={submitted}></Score>
                        </Route>
                        <Route path="/welcome/highscore">
                            <HighScore></HighScore>
                        </Route>
                    </Suspense>
                </Switch>
            </main>
        </Fragment>
    );
}

export default App;
