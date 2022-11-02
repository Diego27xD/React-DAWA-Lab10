import './Header.css'
const Header = () => { 
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <img src='./logoheader.jpg' width="100px" alt='logo' className='logo'></img>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/about">Portfolio</a>
                    </li>
                    <li>
                        <a href="/about">Contact</a>
                    </li>
                    <li>
                        <a href="/about">FAQ</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
 }

export default Header