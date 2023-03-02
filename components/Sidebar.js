import styles from '@/styles/Home.module.css'
import Link from "next/link"

export default function RootLayout({ children }) {
  return (
   
     <>
        <div className={`${styles.vertnav}`}>
            <Link href="https://www.linkedin.com/in/paulyoungjinkim/" target={'_blank'}>
                <img
                    alt=""
                    src="/linkedin.png"
                    width="50"
                    height="50"
                    className="pkey"
                />
            </Link>
            <Link href="https://github.com/paulyjkim1" target={'_blank'}>
                <img
                    alt=""
                    src="/github.png"
                    width="50"
                    height="50"
                    className="pkey"
                />
            </Link>
           
        </div>

        
     </>
  )
}