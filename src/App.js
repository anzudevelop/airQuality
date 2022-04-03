import s from './App.module.css'
import './fonts/fonts.css'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
    return (
        <div className={s.App}>
           {/* <div className={s.borderGrid} />
            <div className={s.centerGrid} />*/}
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
