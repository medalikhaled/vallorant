import Main from './components/main';
import './App.css'
import { GlobalStyle } from "./styles/main"
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
        <GlobalStyle />
        <Main />
    </Fragment>
    
  )
}

export default App
