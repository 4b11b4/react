import * as React from 'react'
import * as ReactDOM from 'react-dom'

//Components
import Welcome from './components/Welcome'

ReactDOM.render(
  <div className="App">
    <header className="App-header">
      <br /><br />
      <canvas id="myCanvas"
        width="200"
        height="200" />
      <h3>Anton's Website</h3>
      <Welcome name="kid"/>
      <img 
        src="https://www.aimmentalhealth.org.uk/wp-content/uploads/2019/03/emotionally-unstable.jpg"
        width="400"
        height="200"></img>
      <p>My favorite songs</p>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Wt_SsWTA-d8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </header>
    Hip Hop started at the heart
  </div>,
  document.getElementById('root')
);

// Drawing with canvas
var canvas = document.getElementById("myCanvas");
//canvas.style.border = '1px solid #000'
var ctx = canvas.getContext("2d");
// Letter A
ctx.lineWidth = 10;
ctx.strokeStyle = 'green';
ctx.beginPath();
// Horizontal line across the top
//ctx.moveTo(20, 0);
//ctx.lineTo(200, 0);
// Line from top right corner to bottom
ctx.moveTo(20, 0);
ctx.lineTo(200, 200);
// Line from top left corner to bottom
ctx.moveTo(0, 20);
ctx.lineTo(0, 200);
// Line through the middle
ctx.moveTo(0, 100);
ctx.lineTo(120, 100);
// Top left corner
ctx.moveTo(0, 20);
ctx.lineTo(20, 0);
ctx.closePath();
ctx.stroke();