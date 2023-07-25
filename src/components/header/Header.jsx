import React from "react";
import h from "./Header.module.css"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className={h.header}>
            <div className={h.menu}>
                <Link to={"/"} className={h.link}>Главная</Link>
                <Link to={"/about"} className={h.link}>О нас</Link>
                <Link to={"/mentors"} className={h.link}>Преподавать в Makers</Link>
                <Link to={"contacts"} className={h.link}>Контакты</Link>
            </div>
            <div className={h.logo}>
                <h1>maker<span className={h.letter}>s</span></h1>
            </div>
            <div className={h.regist}>
                <Link to={"/login"} className={h.link}>Войти</Link>
                <Link to={"/regist"} className={h.link}>Регистрация</Link>
            </div>
          

        </div>
    )
}
export default Header