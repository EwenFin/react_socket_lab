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





  render() {
    return(
      <div>
        <Canvas/>
      </div>
    )
  }

}

export default CanvasContainer