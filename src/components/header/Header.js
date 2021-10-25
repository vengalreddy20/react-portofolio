import styles from "./header.module.css";
import {Link} from "react-router-dom";
const Header=()=>{
    return(
        <header className={styles.header}>
            <ul>
            <Link to ="/"><li>home</li></Link>
            <Link to ="/about"><li>About Me</li></Link>
            <Link to ="/skills"><li>skills</li></Link>
            <Link to ="/contact"><li>Contact</li></Link>
            </ul>
        </header>
    )
}
export default Header;