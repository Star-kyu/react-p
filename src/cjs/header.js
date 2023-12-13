import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to={"/index"}>
        <div>a</div>
      </Link>
      <Link to={"/2"}>
        <div>s</div>
      </Link>
    </div>
  );
}

export default Header;
