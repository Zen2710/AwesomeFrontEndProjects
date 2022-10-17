import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classes from "./header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div>
                <Link to="/welcome/highscore">
                    <p>View Highscores</p>
                </Link>
                <FontAwesomeIcon icon="fa-hand-point-left" className="icon" />
            </div>
            <p>Time:{props.time}</p>
        </header>
    );
};

export default Header;
