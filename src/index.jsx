import React, { Fragment } from 'react'
import {render} from 'react-dom'
import {Header} from './Components/Header.jsx'
import {Main} from './Components/Main.jsx'
import './styles/general.scss'

class BusyHands extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                name: "",
                img: "",
                company: ""
            }
        }
    }

    render() {
      return (
        <Fragment>
            <Header />
            <Main />
            <footer>
                <p>Created by Maxim Egorov</p>
            </footer>
        </Fragment>
      );
    }
}

render(<BusyHands />, document.querySelector('#Busy-hands'))