import React from 'react';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import {Route,Switch} from 'react-router-dom';
import {Header} from './common/Header';
import PageNotfound from './PageNotFound';
import Courses from './courses/CoursesPage';
const App = (props)=>{
return (
    <div className="container-fluid">
    {props.courses}
        <Header/>
        <Switch>
        <Route exact path="/" component= {HomePage}/>
        <Route  path="/about" component= {AboutPage}/> 
        <Route  path="/courses" component= {Courses}/> 
        <Route component={PageNotfound}/>
        </Switch>
      
    </div>
)

}
export default App;