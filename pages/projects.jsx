import styles from '../styles/Projects.module.css'
import { Special_Elite } from '@next/font/google'

const SpecialElite = Special_Elite({ subsets: ['latin'], weight: ['400'] })


// this is going to be our /about

export default function Projects() {
    return(
        <div className={`${styles.aboutContainer} ${SpecialElite.className}`}>

            <div className={styles.aboutPage}>
                <h1 className={styles.aboutHeader}>Projects</h1>
                <div>
                    <div className={styles.aboutContent}>
                        <div className={styles.projectGroup}>
                            <a href='https://paulyjkim1.github.io/Blackjack-Trainer/' className={styles.projectsLabel} target="_blank">Blackjack Trainer</a>
                            <img src='/BlackjackTrainer.png' className={styles.projectsImages}/>
                        </div> 
                        <div className={styles.projectGroup}>
                            <a href='https://recipebook-paulyjkim1.herokuapp.com/' className={styles.projectsLabel} target="_blank">RecipeBook</a>
                            <img src='/RecipeBook.png' className={styles.projectsImages}/>
                        </div> 
                        <div className={styles.projectGroup}>
                            <a href='https://battlelofi.netlify.app/' className={styles.projectsLabel} target="_blank">BattleLo-fi</a>
                            <img src='/BattleLo-fi.png' className={styles.projectsImages}/>
                        </div> 
                    </div>

                </div>
                
              
            
            </div>
        </div>
    )
}

