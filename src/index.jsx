import './styles/style.scss'
import React from 'react'
import {render} from 'react-dom'

const App = () =>(
    <p>Да прибудет с нами сила:)</p>
)

render(<App />, document.querySelector('#app'))