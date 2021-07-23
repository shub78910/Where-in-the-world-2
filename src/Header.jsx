import React, { useState } from 'react'

function Header() {
    const [mode, setMode] = useState("Light Mode")


    let toggleTheme = () => {
        if (mode == "Dark Mode") {
          setMode("Light Mode")
        }
        else {
          setMode("Dark Mode")
        }
        document.body.classList.toggle('dark')
      }

    return (
        <div>
            <nav>
              <h2>Where in the world?</h2>
              <button onClick={toggleTheme} className="theme-toggle-button">
              <i className="fa fa-sun-o" aria-hidden="true"></i> / <i className="fa fa-moon-o" aria-hidden="true"></i>

              </button>
            </nav>
        </div>
    )
}

export default Header
