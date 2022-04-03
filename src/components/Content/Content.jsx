import s from './Content.module.css'
import icon from "../../icons/content/icon.svg";
import InformationContent from "./InformationContent/InformationContent";

let Content = () => {
    return (
        <div className={s.content}>
            <p>Система мониторинга и анализа качества воздуха в закрытом помещении</p>
            <div className={s.info}>
                <div className={s.logo}>
                    <img src={icon} />
                </div>
                <div className={s.air}>
                    Сделано в Томске
                </div>
                <div className={s.scrollDown}>
                    Листай ниже ↓
                </div>
                <InformationContent />
            </div>
        </div>
    );
}



export default Content;
