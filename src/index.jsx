import React, { Fragment } from 'react'
import {render} from 'react-dom'
import {Header} from './Components/Header.jsx'
import {Main} from './Components/Main.jsx'
import './styles/general.scss'
import './styles/login.scss'
import {setHeightChatChoose, setHeightMain} from './scripts'

class BusyHands extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login: false,
            errorLogin: false,
            user: {
                name: "",
                img: "",
                company: ""
            }
        }
    }

    componentDidUpdate(){
        if (this.state.login) {
            setHeightMain();
            setHeightChatChoose();
        }
    }

    login(event){
        event.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date:{
                    email: document.querySelector("#login-email").value,
                    password: document.querySelector("#login-password").value
                }
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res) {
                this.setState({
                    login: true,
                    errorLogin: false,
                    user: {
                        name: res.name,
                        img: res.img,
                        company: res.company,
                        chats: res.chats,
                    }
                })
            } else {
                this.setState({
                    login: false,
                    errorLogin: true
                })
            }
        });
    }

    render() {
        if (this.state.login) {
            return (
                <Fragment>
                    <Header infoUser={this.state.user} />
                    <Main infoUser={this.state.user} />
                    <footer>
                        <p>Created by Maxim Egorov</p>
                    </footer>
                </Fragment>
              );
        } else {
            return(
                <div className="login">
                    <h1>Busy-hands</h1>
                    <h4>Удобное и простое ведение бизнеса</h4>
                    <form onSubmit={(event)=>{this.login(event)}} method="post">
                        <label>
                            <p>Email:</p>
                            <input type="email" name="email" id="login-email"/>
                        </label>
                        <label>
                            <p>Пароль:</p>
                            <input type="password" name="password" id="login-password"/>
                        </label>
                        {this.state.errorLogin ? <p className="errorLogin active">проверьте данные</p> : <p className="errorLogin pass">проверьте данные</p>}
                        <input type="submit" value="Войти"/>
                    </form>
                </div>
            )
        }
      
    }
}

render(<BusyHands />, document.querySelector('#Busy-hands'))