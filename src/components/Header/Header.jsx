import s from './Header.module.css'
import menuIcon from './../../icons/header/menu.svg'
import iconNav from './../../icons/header/iconNav.svg'
import {NavLink} from "react-router-dom";

let Header = (props) => {
    const date = new Date()
    let hours = date.getHours()
    if(hours / 10 < 1) hours = `0${hours}`

    let minutes = date.getMinutes()
    if(minutes / 10 < 1) minutes = `0${minutes}`

    let time = {
        hours,
        minutes,
    }

    //props.updateTime(time)

    let clickToMenu = () => {
        props.clickOnMenu()
    }

    return (
        <div>
            <div className={s.header}>
                <div className={s.menu}>
                    <img src={menuIcon} onClick={clickToMenu} />
                </div>
                <p>Свежий воздух</p>
                <div className={s.time}>
                    {`${props.data.time.hours}:${props.data.time.minutes}`}
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
