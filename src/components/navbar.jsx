import LineButton from './buttons/lineButton';
import WithoutLineButton from './buttons/withoutLineButton';
import './navbar.css';

function Navbar() {
    return(
    <header className='header'>
        <div className="logo">
            <img src="./images/logo.svg"/>
        </div>
        <div className="navigation">
            <nav>
                <div className='nav-list'>
                    <ul className='ul-list'>
                        <a href="#" className="link-navigation" id="link-navigation">Features</a>
                        <a href="#" className="link-navigation" id="link-navigation">Company</a>
                        <a href="#" className="link-navigation" id="link-navigation">Careers</a>
                        <a href="#" className="link-navigation" id="link-navigation">About</a>
                    </ul>
                </div>
                <div className="auth-btn">
                    <WithoutLineButton redirectTo={'login'} title={'Login'}/>
                    <LineButton redirectTo={'register'} title={'Register'}/>
                </div>
            </nav>
        </div>
    </header>)
}

export default Navbar;