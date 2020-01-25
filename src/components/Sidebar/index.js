import React from 'react';

import './Sidebar.scss';
import Logo from "../../assets/img/logo/logo-greenthumb.svg"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <img src={Logo} alt="Green Thumb logo." className="sidebar__logo" />
        <span className="sidebar__line"></span>
    </div>
  );
}
