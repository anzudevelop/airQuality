import s from './App.module.css'
import './fonts/fonts.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
    return (
        <BrowserRouter>
            <div className={s.App}>
                {/* <div className={s.borderGrid} />
                <div className={s.centerGrid} />*/}
                <Header />
                <Routes>
                    <Route path="/" element={<Content/>}/>
                    {/*
                    <Route path="/data/*" element={<Data/>}/>
                    */}

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
