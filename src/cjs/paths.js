
import {useEffect, useState, useRef} from 'react'; 
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js'
import Error  from './error.js'
import Root from './root.js'

function Paths(props) {
  return (
    <Router>
      <Routes>
        <Route path = '/'      
         element = {
          <>
            <Root/>
          </>
          }></Route>
        <Route path = '/index'  element = {<Header/>  }></Route>
        <Route path = '*'       element = {<Error/>   }></Route>
      </Routes>
    </Router>
  );
}

export default Paths;
