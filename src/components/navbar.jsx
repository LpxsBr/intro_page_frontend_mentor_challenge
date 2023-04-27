import { useState } from 'react';
import LineButton from './buttons/lineButton';
import WithoutLineButton from './buttons/withoutLineButton';
import './navbar.css';

function Navbar() {

    const [menuOption, setMenuOption] = useState('icon-menu')

    const setMenuHandler = () => {
        if(menuOption === 'icon-menu') setMenuOption('icon-close-menu')
        if(menuOption === 'icon-close-menu') setMenuOption('icon-menu')
    }

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
        <div className='mob-menu'>
            <button onClick={setMenuHandler}>
                <img src={`./images/${menuOption}.svg`} alt="" />
            </button>
        </div>
    </header>)
}

export default Navbar;