import s from './Header.module.css'
import menuIcon from './../../icons/header/menu.svg'
import iconNav from './../../icons/header/iconNav.svg'
import {NavLink} from "react-router-dom";

let isActive = true

let closeMenu = () => {
    isActive = !isActive
    console.log(isActive)
}

let Header = () => {
    const date = new Date()
    return (
        <div>
            <div className={s.header}>
                <div className={s.menu}>
                    <img src={menuIcon} onClick={closeMenu} />
                </div>
                <p>Свежий воздух</p>
                <div className={s.time}>
                    {`${date.getHours()}:${date.getMinutes()}`}
                </div>
            </div>
            <div className={isActive ? `${s.navbar} ${s.active}` : `${s.navbar}`}>
                <img src={menuIcon} className={s.menuIcon} onClick={closeMenu}/>
                <div className={s.links}>
                    <NavLink to="/main" className={s.navlink}>Главная</NavLink>
                    <NavLink to="/data" className={s.navlink}>Данные о качестве воздуха в виде графиков</NavLink>
                </div>
                <img src={iconNav} className={s.icon}/>
            </div>
        </div>
    );
}


export default Header;
