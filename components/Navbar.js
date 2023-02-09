import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>
                {/* links take any child comonents */}
                Home
            </Link>

            <Link href='/about'>
                About Me
            </Link>

            {/* outside sources use regular a tags */}

            <a href="https://github.com/paulyjkim1" target='_blank'>see my github</a>
        </nav>
    )
}