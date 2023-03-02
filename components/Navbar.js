import Link from 'next/link'
import { Special_Elite } from '@next/font/google'
import styles from '@/styles/Home.module.css'



const SpecialElite = Special_Elite({ subsets: ['latin'], weight: ['400'] })
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
    return (
        <>

            <nav className={`${styles.nav} ${SpecialElite.className}`}>
            
                <Link href='/'>
                    {/* links take any child comonents */}
                    <img
                    alt=""
                    src="/pkey.png"
                    width="50"
                    height="50"
                    className="pkey"
                />
                </Link>
                <div className="links">
                    <Link href='/about' style={{ textDecoration: 'none' }}>
                        <div className='navlinkdiv'>
                            <p className='navlinklab'>01.</p>
                            <p className="navlinks">About Me</p>
                        </div>
                    </Link>
                    
                    <Link href='/projects' style={{ textDecoration: 'none' }}>
                        <div className='navlinkdiv'>
                            <p className='navlinklab'>02.</p>
                            <p className="navlinks">Projects</p>
                        </div>
                    </Link>
                    <Link href='/contact' style={{ textDecoration: 'none' }}>
                        <div className='navlinkdiv'>
                            <p className='navlinklab'>03.</p>
                            <p className="navlinks">Contact</p>
                        </div>
                    </Link>
                </div>
                


                {/* outside sources use regular a tags */}

                {/* <a href="https://github.com/paulyjkim1" target='_blank'>see my github</a> */}
            </nav>
        </>
    )
}