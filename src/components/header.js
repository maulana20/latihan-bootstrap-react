import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import { store } from '../store/store';

const AppHeader = () => {
  const [title, setTitle] = useState("");
  store.subscribe(() => setTitle(store.getState().common.title));
  
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__title">
          {title}
        </div>
        <div className="header__menu-list">
          <div className="header__menu">
            <a href="#">
              <div>
                <FontAwesomeIcon className="fa-solid" icon={Icons.faBell} />
                <span className="position-absolute top-25 start-150 translate-middle badge rounded-pill btn-warning badge-notification">2</span>
              </div>
            </a>
          </div>
          <div className="header__menu dropdown" style={{zIndex: '1'}}>
            <a className="header__menu-icon" href="#" id="userMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon className="fa-solid" icon={Icons.faCircleUser} style={{paddingRight: '5px'}} />
              <FontAwesomeIcon className="fa-solid fa-xs" icon={Icons.faChevronDown} />
            </a>
            <ul className="dropdown-menu" aria-labelledby="userMenu">
              <li><a className="dropdown-item" href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
