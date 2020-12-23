import React from 'react'
import setting from '../img/setting.svg'
import '../styles/header.scss'

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            test: "шапка"
        }
    }

    render() {
      return (
        <header>
            <h2>Название компании</h2>
            <h1>Busy-hands.ru</h1>
            <div className='name-settings'>
                <p>Имя сотрудника</p>
                <img src={setting} alt=""/>
            </div>
        </header>
      );
    }
}