import styles from '../styles/Contact.module.css'
import { Special_Elite } from '@next/font/google'

const SpecialElite = Special_Elite({ subsets: ['latin'], weight: ['400'] })


// this is going to be our /about

export default function Contact() {
    return(
        <div className={`${styles.contactContainer} ${SpecialElite.className}`}>

            <div className={styles.contactPage}>
                <h1 className={styles.contactHeader}>Contact Me</h1>
                <div className={styles.contactContent}>
                    <p className={styles.coolColor}>Email: paulyjkim1@gmail.com</p>
                    <a href='https://github.com/paulyjkim1' className={styles.links}>Github</a>
                    <br></br>
                    <a href='https://www.linkedin.com/in/paulyoungjinkim/' className={styles.links}>LinkedIn</a>
                </div>
                
              
            
            </div>
        </div>
    )
}