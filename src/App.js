import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddTeams from './components/AddTeams';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditUser from './components/EditUser';
import Video from './components/video';
import Homepage from "./components/homepage"
import Login from "./components/login"
import Register from "./components/register"
import Features from "./components/Features"
import { useState } from 'react';
function App() {
  const [ user, setLoginUser] = useState({})
  return (
    
    <Router>
    <div className="App">
      { <Navbar/> }
      <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/Features">
            <Features />
            </Route>
        </Switch>
      { <Switch>
         <Route path='/' exact component={Video}/>
          <Route path='/all' exact component={AllUsers}/> 
          <Route path="/add" exact component={AddTeams}/>
          <Route path='/edit/:id' exact component={EditUser}/>
          
       </Switch>    }
    </div>
    </Router>
  );
}

export default App;
