import styles from '../styles/About.module.css'


// this is going to be our /about

export default function About() {
    return(
        <div>
            <h1>About Me</h1>
            <p className={styles.coolColor}>I am a software engineer based in Seattle, Washington. </p>
            <p>{`don't use apostrophes unless they are in backticks`}</p>

            <h2>I am a different color</h2>
            {/* styled jsx is great for conditional rendering! */}
            <style jsx>{`
                h2 {
                    color: navy;
                }
            `}</style>

            {/* two ways of rendering images: stored locally and a url */}
            <img
                src= '/next.svg'
                alt = 'logo of my new favorite framework'
            />

            {/* getting image from outside source */}
            <img
                src='https://placekitten.com/300/600'
            />
        </div>
    )
}