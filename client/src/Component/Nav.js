import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <b>HOME</b>
          </Link>
          <div>
            <ul className='navbar-nav nav-register'>
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  to='/register'
                  aria-current='page'
                >
                  <b>REGISTER</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
