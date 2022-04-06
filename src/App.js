import s from './App.module.css'
import './fonts/fonts.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import ContentContainer from "./components/Content/ContentContainer";
import ChartsContainer from './components/Charts/ChartsContainer'

function App(props) {
    return (
        <BrowserRouter>
            <div className={s.App}>
                {/* <div className={s.borderGrid} />
                <div className={s.centerGrid} />*/}
                <HeaderContainer />
                <Routes>
                    <Route path="/" element={<ContentContainer />}/>
                    <Route path="/data/*" element={<ChartsContainer/>}/>


                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
