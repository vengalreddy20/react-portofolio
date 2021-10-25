import styles from "./home.module.css";
const Home = () =>{
    return(
        <div className={styles.home}>
            <h1>Hi! I am <span>Vengalareddy</span></h1>
            <div className={styles.homeContainer}>
                <div>
                 <img src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/> 

                </div>
                <div>
                 <h4>A little about me</h4>
                 <p>I am front-end developer and I enjoy taking complex problems and turning them into simple and beautiful interface designs and I aslo love the logic and structure of coding and always strive to write elegant and efficient code. Wether it be HTML,CSS or React JS.</p>

                </div>
            
            
              </div>
            
        </div>
    )
}
export default Home;