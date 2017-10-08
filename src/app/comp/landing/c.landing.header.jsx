import React from 'react';


function renderNavbar(name, badges) {
  return (
    <div className="navbar-brand">
      <span style={{ margin: "10px" }}>
        <a className="navbar-item is-size-4" href="#page-top">
          {name}
        </a>
      </span>
      {
        badges.map(badge =>
          <span key={`badge-${badge.icon}`} style={{ margin: "10px" }}>
            <a className="navbar-item is-hidden-mobile" href={badge.href} target="_blank">
              <i className={`fa fa-${badge.icon}  is-size-3`}>
              </i>
            </a>
          </span>
        )
      }
      <span className="navbar-burger" onClick={function () { document.getElementById("navbar-menu").classList.toggle("is-active") }}>
        <span />
        <span />
        <span />
      </span>
    </div>
  );
}

function renderNavbarMenu(menuItems) {
  return (
    <div id="navbar-menu" className="navbar-menu">
      <div className="navbar-end">
        {
          menuItems.map(function (item, itemIndex) {
            return (
              item.dropdown ?
                <div key={`navbar-${itemIndex}`} className="navbar-item is-size-5 has-dropdown is-hoverable" >
                  <a href={item.href} className="navbar-link" onClick={() => document.getElementById("navbar-menu").classList.toggle("is-active")}>
                    {item.text}
                  </a>
                  <div className="navbar-dropdown is-boxed is-right">
                    {
                      item.dropdown.map((dropItem, dropItemIndex) => {
                        return (
                          <a key={`item-${itemIndex}-drop-${dropItemIndex}`} href={dropItem.href} className="navbar-item is-size-5" onClick={() => document.getElementById("navbar-menu").classList.toggle("is-active")}>
                            {dropItem.text}
                          </a>
                        )
                      })
                    }
                  </div>
                </div>
                :
                <a href={item.href} key={`navbar-${itemIndex}`} className="navbar-item is-size-5" >
                  {item.text}
                </a>
            );
          })
        }
      </div>
    </div>
  )
}


export default function renderHeader(props) {
  return (
    <div className="hero-head">
      <div className="navbar" style={{
        position: "fixed",
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
      }}>
        <div className="container">
          {renderNavbar(props.author.name, props.author.badges)}
          {renderNavbarMenu(props.menu)}
        </div>
      </div>
    </div>
  );
}

