import React from 'react';
import {NavLink} from "react-router-dom";

//styles
import styles from "./TheNavigation.module.scss"

interface Props {
}

const TheNavigation: React.FC<Props> = ( props) => {
    return (

        <nav className={styles.navigation}>
            <NavLink exact to={"/"} activeClassName={styles.active}>Home</NavLink>
            <NavLink to={"/tunes"} activeClassName={styles.active}>Tunes</NavLink>
            <NavLink to={"/about"} activeClassName={styles.active}>About</NavLink>
        </nav>

    );
};

export default TheNavigation;
