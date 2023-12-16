import {Link} from 'react-router-dom';
import {useEffect} from 'react'; 
import logo from '../img/hikyu.svg';
import logojs from '../hooks/logo.js'
import '../css/header.css'

function Header() {
  useEffect(() => {
    const frame = document.getElementById('logofraim');
    const card = document.getElementById('logocard');
    const logo = document.getElementById('logo');

    if (frame && card && logo) {
      logojs(frame, card, logo);
    }
  }, []);

  return (
    <>
      <div className='container-fluid d-flex'> 
        <Link to={"/"}>
          <div className='header mt-3'>
            <div className='logoframe' id = 'logofraim'>
              <div className='logocard' id ='logocard'>
                <img className='logo' id = 'logo' src = {logo}></img>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
