import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MenuBar extends React.Component {
  constructor(props) {
    super(props)
    this.isActive = this.isActive.bind(this);
  }
  
  isActive(path) {
    return path === document.location.pathname;
  }
  
  render() {
    var sidebarContainer = "sidebar-menu__item-container " + (this.isActive(this.props.link) ? "active" : "")
    return (
      <li className="sidebar-menu__item">
        <div className={sidebarContainer}>
          <a href={this.props.link} className="sidebar-menu__item-wrapper">
            <div className="sidebar-menu__icon">
              <FontAwesomeIcon icon={this.props.icon} />
            </div>
            <div className="sidebar-menu__text">
              {this.props.title}
            </div>
          </a>
        </div>
      </li>
    );
  }
}

export default MenuBar;
