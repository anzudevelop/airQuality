import s from './Header.module.css'
import menuIcon from './../../icons/header/menu.svg'

let Header = () => {
    const date = new Date()
    return (
        <div className={s.header}>
            <div className={s.menu}>
                <img src={menuIcon} />
                <button  />
            </div>
            <p>Свежий воздух</p>
            <div className={s.time}>
                {`${date.getHours()}:${date.getMinutes()}`}
            </div>
        </div>
    );
}



export default Header;
