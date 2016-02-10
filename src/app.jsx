require('./stylesheets/styles.scss');

import React from 'react'
import ReactDOM from 'react-dom'
import SampleComponent from './components/SampleComponent.jsx'

ReactDOM.render(<SampleComponent name="Ben" />, document.getElementById('main'));