import React from 'react'
import Canvas from '../components/Canvas'
import io from 'socket.io-client'

class CanvasContainer extends React.Component {


  constructor(props) {
    super(props)
    this.context = null
    this.state = {
      canvas: null
    }

    this.socket = io('http://localhost:3000/')
    this.socket.on('draw', this.drawRect.bind(this))
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
    this.context = canvas.getContext('2d')
    canvas.onclick = function(event) {
      const position = this.getMousePos(canvas, event)
      this.drawRect(position)
      this.socket.emit('draw', position)
    }.bind(this)
    this.setState({canvas: canvas})
  }

  drawRect(position){
    this.context.fillStyle = 'hotpink'
    this.context.fillRect(position.x, position.y, 10, 10)
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