import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
    return (
        <div className={classes.parent}>
            <div className={classes.child}>
                <div className={classes.child1}></div>
                <div className={classes.child2}></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
