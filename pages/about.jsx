import styles from '../styles/About.module.css'
import { Special_Elite } from '@next/font/google'

const SpecialElite = Special_Elite({ subsets: ['latin'], weight: ['400'] })


// this is going to be our /about

export default function About() {
    return(
        <div className={`${styles.aboutContainer} ${SpecialElite.className}`}>

            <div className={styles.aboutPage}>
                <h1 className={styles.aboutHeader}>About Me</h1>
                <div className={styles.aboutContent}>
                    <p className={styles.coolColor}>I am a Software Engineer born-and-raised in Seattle who is tenacious, detail oriented, and gives intentional effort in work and education. As someone who has previously pursued a career in healthcare, I’ve found the value of being relatable and having a positive attitude when faced with roadblocks. This translates in my approach to coding where although I place importance in finding efficient solutions, I’ve enjoyed learning through the rough patches of the process. My experiences in the field of dentistry and education uniquely shapes my outlook on collaborative environments, which is centered on respect, selflessness, and kindness. This ultimately influences my goals as a software engineer, where I strive to be a teammate that brings value with a servant's heart.</p>
                </div>
                
              
            
            </div>
        </div>
    )
}