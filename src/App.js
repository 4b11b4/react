import * as React from 'react'
import * as ReactDOM from 'react-dom'

//Components
import Welcome from './components/Welcome'

ReactDOM.render(
  <div className="App">
    <header className="App-header">
      <img src="/logo.svg" className="App-logo" alt="logo" />
      <h3>Anton's Website</h3>
      <h4>My favorite songs</h4>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8Uynb-CyTUk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </header>
  </div>,
  document.getElementById('root')
);
