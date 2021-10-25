import styles from "./about.module.css";
const About =() =>{
    return(
        <div className={styles.about}>
            <div className={styles.aboutContainer}>
            <h1>about me !</h1>
            <p>My name is Vengalareddy I'm a Front End Engineer based in Bangalore. I describe myself as a passionate developer who loves coding.<br/><br/>I like to create and contribute to open source projects. That helps me to learn a lot of new stuff, grow as a developer and support other open source projects. Also I enjoy writing technical things.<br/><br/>In my free time you can find me at the gym, at the beach or on tech meetups and conferences around Bangalore</p>

            </div>
            
        </div>
    )
}
export default About;