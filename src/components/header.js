import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { store } from '../store/store';

const AppHeader = () => {
  const { i18n, t } = useTranslation();
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("en");
  store.subscribe(() => setTitle(store.getState().common.title));
  
  const changeLanguage = event => {
    const code = event.currentTarget.dataset.lang
    console.log(code)
    handleLanguage(code)
  }
  
  const handleLanguage = code => {
    i18n.changeLanguage(code)
    setLanguage(code)
    localStorage.setItem("lang", code)
  }
  
  useEffect(() => {
    const lang = localStorage.getItem("lang")
    if (lang) handleLanguage(lang)
  }, []);
  
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__title">
          {title}
        </div>
        <div className="header__menu-list">
          <div className="header__menu dropdown" style={{zIndex: '1'}}>
            <span id="userMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {language}
            </span>
            <ul className="dropdown-menu" aria-labelledby="userMenu" style={{minWidth: '0', padding: '10px'}}>
              <li data-lang="en" onClick={changeLanguage}>en</li>
              <li data-lang="id" onClick={changeLanguage}>id</li>
            </ul>
          </div>
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
              <li><a className="dropdown-item" href="/auth/reset-password">{t("Reset Password")}</a></li>
              <li><a className="dropdown-item" href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
