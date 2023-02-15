import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <h1 className="main-head">
          Just Click the button to change the mode of view
        </h1>
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
