import React, {Component} from 'react'
import {render} from 'react-dom'

import { Example, LoadingButton } from '../../src'

export default class Demo extends Component {
  render() {
    return <div>
      <h1>ui-components Demo</h1>
      <Example/>
      <LoadingButton>
        This is the button
      </LoadingButton>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
