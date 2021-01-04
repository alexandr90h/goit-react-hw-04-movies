import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation() {
    return (
        <nav>
            <NavLink exact to="/" className={styles.homeLink} activeClassName={styles.activLink}>Home</NavLink>
            <NavLink to="/movies" className={styles.homeLink} activeClassName={styles.activLink}>Movies</NavLink>
             <hr/>
        </nav>
       
    )
};
