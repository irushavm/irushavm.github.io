import React from 'react'
import PropTypes from 'prop-types'

import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  componentDidMount () {
    document.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleOutsideClick)
  }

  handleOutsideClick (event) {
    const menuNode = document.getElementById('navbar-menu')
    if ((this.node === event.target || !this.node.contains(event.target)) && menuNode.hasClass && menuNode.hasClass('is-active')) {
      document.getElementById('navbar-menu').classList.toggle('is-active')
    }
  }

  renderNavbarBrand (name, badges) {
    return (
      <div className="navbar-brand">
        <span style={{ margin: '10px' }}>
            <AnchorLink href='#page-top' className="navbar-item is-size-4 page-title">
            {name}
            </AnchorLink>
        </span>
        {
          badges.map(badge =>
            <span className="is-hidden-mobile" key={`badge-${badge.icon}`} style={{ margin: '10px' }}>
              <a className="navbar-item " href={badge.href} target="_blank" rel="noreferrer">
                <i className={`fa fa-${badge.icon}  is-size-3`}>
                </i>
              </a>
            </span>
          )
        }
        <span className="navbar-burger" onClick={function () { document.getElementById('navbar-menu').classList.toggle('is-active') }}>
          <span />
          <span />
          <span />
        </span>
      </div>
    )
  }

  renderNavbarMenu (menuItems) {
    return (
      <div id="navbar-menu" className="navbar-menu">
        <div className="navbar-end">
          {
            menuItems.map(function (item, itemIndex) {
              return (
                item.dropdown
                  ? <div key={`navbar-${itemIndex}`} className="navbar-item is-size-4 has-dropdown is-hoverable" >
                    <AnchorLink href={item.href} className="navbar-link" onClick={() => document.getElementById('navbar-menu').classList.toggle('is-active')}>
                      {item.text}
                    </AnchorLink>
                    <div className="navbar-dropdown is-right">
                      {
                        item.dropdown.map((dropItem, dropItemIndex) => {
                          return (
                            <AnchorLink key={`item-${itemIndex}-drop-${dropItemIndex}`} href={dropItem.href} className="navbar-item is-size-4" onClick={() => document.getElementById('navbar-menu').classList.toggle('is-active')}>
                              {dropItem.text}
                            </AnchorLink>
                          )
                        })
                      }
                    </div>
                  </div>
                  : <AnchorLink href={item.href} key={`navbar-${itemIndex}`} className="navbar-item is-size-4" onClick={() => document.getElementById('navbar-menu').classList.toggle('is-active')} >
                    {item.text}
                  </AnchorLink>
              )
            })
          }
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className="hero-head">
        <div id="navbar" className="navbar" style={{
          borderBottom: '4px solid #4a4a4a',
          position: 'fixed',
          zIndex: 100,
          top: 0,
          left: 0,
          right: 0
        }}>
          <div className="container" ref={(node) => { this.node = node }}>
            {this.renderNavbarBrand(this.props.author.name, this.props.author.badges)}
            {this.renderNavbarMenu(this.props.menu)}
          </div>
        </div>
      </div>
    )
  }
}

Navbar.propTypes = {
  author: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired
}
