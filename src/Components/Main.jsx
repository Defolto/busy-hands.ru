import React from 'react'
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
                    <p>Тут новости</p>
                </div>
                <Calendar />
            </div>
            <div className="col-right">
                <div className="menu">
                    <nav>
                        <p className="active">Чат</p>
                        <p>Задачи</p>
                        <p>Заметки</p>
                        <p>Напоминания</p>
                    </nav>
                    <div>
                        Сотрудники: 5 онлайн, 4 оффлайн
                    </div>
                </div>
                <Display state="chat" />
            </div>
        </main>
      );
    }
}

function Calendar(props) {
    return(
        <div className="calendar">
            <h3>Календарь</h3>
            <div className="calendar-wrapper">
                <div className="calendar-wrapper__month">
                    <p>Декабрь</p>
                    <div>
                        <p>Назад</p>
                        <p>Далее</p>
                    </div>
                </div>
                <div className="calendar-wrapper__dates">
                    <div className="calendar-wrapper__dates-row">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                    </div>
                    <div className="calendar-wrapper__dates-row">
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                        <p>12</p>
                        <p>13</p>
                        <p>14</p>
                    </div>
                    <div className="calendar-wrapper__dates-row">
                        <p>15</p>
                        <p>16</p>
                        <p>17</p>
                        <p>18</p>
                        <p>19</p>
                        <p>20</p>
                        <p>21</p>
                    </div>
                    <div className="calendar-wrapper__dates-row">
                        <p>22</p>
                        <p>23</p>
                        <p>24</p>
                        <p>25</p>
                        <p>26</p>
                        <p>27</p>
                        <p>28</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Display(props) {
    if (props.state == "chat") {
        return(
            <div className="display chat">
                <div className="chat-choose">
                    <div className="chat-choose__people">
                        <img src="gdf.jpg" />
                        <div>
                            <p className="name">Максим Егоров</p>
                            <p className="lastMessage">Последнее сообщение</p>
                        </div>
                    </div>
                </div>
                <div className="chat-messages">
                    <div className="message in">
                        Привет:)
                    </div>
                    <div className="message out">
                        Хех, салам)
                    </div>

                    <form action="" method="post">
                        <input className="text" type="text"/>
                        <input className="submit" type="submit" value="Отправить"/>
                    </form>
                </div>
            </div>
        )
    }else{
        return(
            <div>у</div>
        )
    }

}