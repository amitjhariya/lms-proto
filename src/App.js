import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Results from './components/results/Results';
import Chats from './components/chats/Chats';
import MainComponent from './components/main/MainComponent';
import { useState } from 'react';
import Login from './components/LoginSignUp/Login';


function App() {

  const [username, setUsername] = useState("")


  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={()=><MainComponent/>}/>
        <Route path="/search" exact component={()=><Results/>}/>
        <Route path="/chats" exact component={()=><Chats/>}/>
        <Route path="/login" exact component={()=><Login/>}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
