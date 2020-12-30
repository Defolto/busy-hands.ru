import React, {useState} from 'react'
import '../styles/main.scss'
import {sendMessage, cleareInput} from '../js/functions'
import _ from 'underscore'
const User = require('../server/models/User');

export class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pointMenu: "chat",
            story: false
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
                        userEmail = {this.props.infoUser.email}
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
    const [activeChatStory, setActiveStory] = useState(false);
    const [activeEmail, setActiveEmail] = useState(false);
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
        let users = [];
        res.forEach(element => {
            users.push(new User(element));
        });
        if (!_.isEqual(users,props.story)) {
            console.log(users);
            props.updateStory(users);
        }
    });

    let activeChat = (email) =>{
        props.userChats.forEach(element => {
            if (element.email == email) {
                let newActiveChatStory = element.story.map((element, index) =>{
                    return(<div key={index} className={element.way == 'in' ? "message in" : "message out"}>
                                {element.text}
                                <p className="date">{element.date}</p>
                            </div>)
                });
                setActiveStory(newActiveChatStory);
                setActiveEmail(email);
            }
        });
    }
    console.log(activeEmail);
    let userChats;
    if (props.story) {
        userChats = props.story.map((element, index) =>{
            let userChat = element.getUsersChats(props.userEmail);
            return(<div key={index} onClick={()=>activeChat(userChat.email)} className="chat-choose__people">
                        <img src={"server/img/" + userChat.img} />
                        <div>
                            <p className="name">{userChat.name}</p>
                            <p className="lastMessage">{userChat.lastMessage}</p>
                        </div>
                    </div>)
        });
    }
    if (props.state == "chat") {
        return(
            <div className="display chat">
                <div className="chat-choose">
                    {userChats}
                </div>
                <div className="chat-messages">
                    <div className="chat-messages__wrapper">
                        {activeChatStory}
                    </div>

                    <form onSubmit={(event)=>{event.preventDefault();
                                            sendMessage(document.querySelector("#sendMessage__text").value, );
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