import React from 'react'
import stylesheet from './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <header className="Header">
        <div className="Header-content">
          <a className="Header-title" href="/">
            Timeline
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header
