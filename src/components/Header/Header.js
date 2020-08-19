import React from 'react'

import { IconContext } from "react-icons";
import { Link } from 'react-router-dom'
import style from './Header.module.scss'
import { BsFilm } from 'react-icons/bs'

const Header = () => {
    return (
        <header className={style.header}>
            <IconContext.Provider value={{ size: "2em", className: "global-class-name" }}>
                <BsFilm className={style.icon}/>
            </IconContext.Provider>
            <h1 className={style.title}><Link to='/'> TV Shows</Link></h1>
        </header>
    )
}
export { Header }




