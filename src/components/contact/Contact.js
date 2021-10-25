 import styles from "./contact.module.css";
 import { createFromIconfontCN } from '@ant-design/icons';

 const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
  
const Contact = () =>{
    return(
        <div>
             <div className={styles.contactHeading}>
            <h1>contact us!</h1>
            </div>
            <div className={styles.background}>
            <div className={styles.contactField}>
                <label for="name">Enter name</label>
                <input type="text" name="name" ></input>
                <label for="email">Enter Email</label>
                <input type="mail" name="email" ></input>
                <label for="message">Enter Message</label>
                <input className={styles.message} type="text" name="message" ></input>
                <button>send message</button>
            </div>
            

            </div>
            <div className={styles.follow}><h4>follow me</h4></div>
            <div className={styles.icons}>

           <a href="https://twitter.com/vengalreddy2000"> <IconFont  type="icon-twitter" /></a>
           <a href="https://github.com/vengalreddy20"><IconFont  type="icon-github" /></a>
           <a href="https://www.facebook.com/vengalreddy.kummitha.5/"> <IconFont  type="icon-facebook" />  </a>          

            </div>
           
        </div>
    )
}
export default Contact;