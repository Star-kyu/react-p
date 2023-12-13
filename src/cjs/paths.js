import '../css/router.css';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './header.js'
import Error  from './error.js'

function Paths(props) {
  const [name, setName] = useState("mike");

  return (
    <Router>
      <Routes>
        <Route path = '/'  element = {<Header/>}></Route>
        <Route path = '/index'  element = {<Header/>}></Route>
        
        <Route path = '/2' element = {<div>
              {name} {props.age} {props.dbs.day[2]}
              </div>}
        ></Route>
        <Route path = '*' element ={<Error/>}></Route>
      </Routes>
    </Router>
  );
}

export default Paths;
