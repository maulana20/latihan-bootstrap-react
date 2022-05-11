import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"
import { store } from '../../store/store';
import MenuBar from './menu-bar';
import Logo from '../../content/images/logo.png';

class AppNavbar extends React.Component {
  render() {
    const contact = store.getState().common.contact;
    return (
      <nav className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header__wrapper">
            <div className="sidebar-header__branding">
              <div className="sidebar-header__top-brand">
                <img alt="logo" src={Logo}></img>
              </div>
            </div>
            <div className="sidebar-header__icon">
              <div className="sidebar__toggle" onClick={this.props.handleToggle}>
                <FontAwesomeIcon icon={Icons.faAlignJustify} />
              </div>
            </div>
          </div>
        </div>
        <ul className="sidebar-menu__list list-unstyled">
          <MenuBar icon={Icons.faBorderAll} link="/" title="Dashboard" />
          <MenuBar icon={Icons.faCircleInfo} link="/customer-information" title="Customer Information" />
          <MenuBar icon={Icons.faCreditCard} link="/billing-information" title="Billing Information" />
          <MenuBar icon={Icons.faUserCheck} link="/operational-pic" title="Operational PIC" />
          <MenuBar icon={Icons.faPhoneVolume} link="/contact-sales" title="Contact Sales" />
          <MenuBar icon={Icons.faCircleQuestion} link="/technical-support" title="Technical Support" />
        </ul>
        <div className="sidebar-dividen"></div>
        <div className="sidebar-logo-group">
          <ul className="sidebar-menu__list list-unstyled">
            <div className="sidebar-menu__item-wrapper sidebar-profile">
              <div className="sidebar-menu__text">
                <div>{ contact.name }</div>
                <div className="small">{ contact.email }</div>
              </div>
            </div>
            <MenuBar icon={Icons.faRightFromBracket} link="/logout" title="Logout" />
          </ul>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
