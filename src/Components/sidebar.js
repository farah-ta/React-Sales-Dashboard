import React from 'react';
import {NavLink}  from 'react-router-dom';
import { navlinks } from '../Data/navlinks';
import '../Styles/sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebar__top">
          <h3>
            <span>
              <i class="ri-taxi-line"></i>
            </span>{" "}
           ABC Sales
          </h3>
        </div>
  
        <div className="sidebar__content">
          <div className="menu">
            <ul className="nav__list">
              {navlinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__link" : "nav__link"
                    }
                  >
                   <i className='icon'>{item.icon}</i> 
  
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
  
          <div className="sidebar__bottom">
            <span>
              <i class="ri-logout-circle-r-line"></i> Logout
            </span>
          </div>
        </div>
      </div>
    );
  };

export default Sidebar;
