import React from 'react'
import '../styles/main.scss'
import {sendMessage, cleareInput} from '../js/functions'
import _ from 'underscore'

export class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pointMenu: "chat",
            story: "Здесь пока пусто"
        }
    }

    updateStory = (story) =>{
        this.setState({
            story: story
        })
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
                <Display state={this.state.pointMenu} 
                        userChats={this.props.infoUser.chats}
                        updateStory={this.updateStory}
                        story={this.state.story} />
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
    fetch('/getUsersChat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date:{
                chats: props.userChats
            }
        })
    })
    .then(res => res.json())
    .then(res => {
        const todoItems = res.map((todo, index) =>
            <div key={index} className="chat-choose__people">
                <img src="gdf.jpg" />
                <div>
                    <p className="name">{todo.name}</p>
                    <p className="lastMessage">Пока оставим так</p>
                </div>
            </div>
        );
        if (!_.isEqual(todoItems,props.story)) {
            props.updateStory(todoItems);
        }
    });
    if (props.state == "chat") {
        return(
            <div className="display chat">
                <div className="chat-choose">
                    {props.story}
                </div>
                <div className="chat-messages">
                    <div className="message in">
                        Привет:)
                    </div>
                    <div className="message out">
                        Хех, салам
                    </div>

                    <form onSubmit={(event)=>{event.preventDefault();
                                            sendMessage(document.querySelector("#sendMessage__text").value);
                                            cleareInput("sendMessage__text")}} method="post" id="sendMessage">
                        <input className="text" type="text" id="sendMessage__text"/>
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