import React from 'react'
import Canvas from '../components/Canvas'

class CanvasContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      canvas: null,
      key: 1
    }
  }

  getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
  }

  createCanvasContext() {
    let canvas = document.querySelector('canvas')
    let ctx = canvas.getContext('2d')
    canvas.onclick = function(event) {
      const position = this.getMousePos(canvas, event)
      this.drawRect(ctx, position.x, position.y)
      console.log(event.x, event.y)
    }.bind(this)
  }

  drawRect(context, x, y){
    context.fillStyle = 'hotpink'
    context.fillRect(x, y, 10, 10)
  }

  componentDidMount() {
    this.createCanvasContext()
  }


  render() {
    return(
      <div>
        <Canvas/>
      </div>
    )
  }

}

export default CanvasContainer