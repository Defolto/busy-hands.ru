import React from 'react'
import setting from '../img/setting.svg'
import '../styles/main.scss'

export class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            test: "шапка"
        }
    }

    render() {
      return (
        <main>
            <div className="col-left">
                <div className="news">
                    тут новости
                </div>
                <div className="calendar">
                    тут календарь
                </div>
            </div>
            <div className="col-right">
                <div className="menu">
                    <nav>
                        <p>Чат</p>
                        <p>Задачи</p>
                        <p>Заметки</p>
                        <p>Напоминания</p>
                    </nav>
                    <div>
                        Сотрудники: 5 онлайн, 4 оффлайн
                    </div>
                </div>
                <div className="display">
                    
                </div>
            </div>
        </main>
      );
    }
}