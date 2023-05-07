import React from "react"
//import "./homepage.css"
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditUser from './EditUser';
import Video from './video';
import AllUsers from './AllUsers';
import AddTeams from './AddTeams';



const homepage = ({setLoginUser}) => {
    return (
        <Router>
        <div className="homepage">
            <Navbar/>
             <Switch>
         <Route path='/' exact component={Video}/>
          <Route path='/all' exact component={AllUsers}/> 
          <Route path="/add" exact component={AddTeams}/>
          <Route path='/edit/:id' exact component={EditUser}/>
       </Switch>  
            </div>
            </Router>
            
        
    )
}

export default homepage