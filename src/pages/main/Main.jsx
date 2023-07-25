import React from "react";
import m from "./Main.module.css"
import Header from "../../components/header/Header";
import cat from "../../components/images/Кот без уса (2).png"

const Main = () => {
    return (
        <div>
            <Header />
            <div className={m.main}>
                <div className={m.title}>
                    <h1>Открой новые знания</h1>
                    <h2>Платформа онлайн и офлайн курсов</h2>
                    <input type="search" value="" />
                    <button>Все курсы</button>
                    <button>Получить консультацию</button>
                </div>
                <div className={m.pic}>
                    <img src={cat} alt="" />
                </div>
            </div>
            
          
        </div>
    )
}
export default Main