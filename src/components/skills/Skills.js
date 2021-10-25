import styles from"./skills.module.css";
const Skills =() =>{
    return(
        <div className={styles.skills}>
            <div className={styles.skillsHeading}>
                <h1>some of my skills</h1></div>
            <div>
                <div className={styles.skillsContent}>
                    <h3>Development</h3>
                    <p>html5</p>
                    <p>css3</p>
                    <p>javascript</p>
                    <p>react js</p>
                </div>
                <div  className={styles.skillsContent}>
                    <h3>Tools</h3>
                    <p>git</p>
                    <p>github</p>
                    <p>vs code</p>
                </div>
            </div>
        </div>
    )
}
export default Skills;