import React from 'react'


class Canvas extends React.Component{

  createCanvasContext() {
    let canvas = document.querySelector('canvas')
    let ctx = canvas.getContext('2d')
  }


  render() {
    return(
      <div>
        <h1>Canvas</h1>
        <canvas id="1" width='500' height='500'></canvas>
      </div>
    )
  } 

}


export default Canvas