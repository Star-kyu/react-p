import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons'
import Error  from '../error/error.js'
import Root   from './root.js'

function Paths(props) {
  return (
    <Router>
      <Routes>
        <Route path = '/'      
         element = {
            <Root/>
          }></Route>
        <Route path = '*'       element = {<Error/>   }></Route>
      </Routes>
    </Router>
  );
}

export default Paths;
