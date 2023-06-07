import { Link } from "react-router-dom";
import style from "./navbar.module.css";

export function Navbar() {
    return(
        <div className={style.navbar}>
            <Link className={style.link} to="/tasks">Tasks 📒</Link>
            <img src="/logo-kdosh.svg"/>
            <Link className={style.link} to="/tasks/create">Create Task 🖋️</Link>
        </div>
    )
}

