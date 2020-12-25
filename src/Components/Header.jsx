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
            <h2>{this.props.infoUser.company}</h2>
            <h1>Busy-hands.ru</h1>
            <div className='name-settings'>
                <p>{this.props.infoUser.name}</p>
                <img className="ava" src={"server/img/" + this.props.infoUser.img} alt=""/>
                <img className="setting" src={setting} alt=""/>
            </div>
        </header>
      );
    }
}