import React from 'react'

import {search} from 'react-icons-kit/fa/search'
import { Icon } from 'react-icons-kit'

import style from './Search.module.scss'

const Search = ({ onSearch }) => {
    return (
        <div className={style.search}>
            <Icon icon={search} size={30} className={style.icon}/><input className={style.search}
                                                                         type='search' 
                                                                         placeholder='Search for shows...'
                                                                         onChange={(e) => onSearch(e.target.value)}></input>
        </div>
    )
}
export { Search }