import s from './Header.module.css'
import menuIcon from './../../icons/header/menu.svg'
import iconNav from './../../icons/header/iconNav.svg'
import {NavLink} from "react-router-dom";

let Header = (props) => {

    let time = new Date()

    function tick1s() {
        time = new Date().toLocaleTimeString().slice(0,5)
        props.updateTime(time)
    }
    setInterval(tick1s, 1000);

    let clickToMenu = () => {
        props.clickOnMenu()
    }

    return (
        <div>
            <div className={s.header}>
                <div className={s.menu}>
                    <img src={menuIcon} onClick={clickToMenu} />
                </div>
                <p>Качество воздуха</p>
                <div className={s.time}>
                    {props.data.time}
                </div>
            </div>
            <div className={props.data.isMenuOpen ? `${s.navbar} ${s.active}` : `${s.navbar}`}>
                <img src={menuIcon} className={s.menuIcon} onClick={clickToMenu}/>
                <div className={s.links}>
                    <NavLink to="/" className={s.navlink} onClick={clickToMenu}>Главная</NavLink>
                    <NavLink to="/data" className={s.navlink} onClick={clickToMenu}>Данные о качестве воздуха в виде графиков</NavLink>
                </div>
                <img src={iconNav} className={s.icon}/>
            </div>
        </div>
    );
}


export default Header;
