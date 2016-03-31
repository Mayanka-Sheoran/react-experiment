import React from 'react'
import {render} from 'react-dom'
import actions from './actions'
import {Provider} from 'react-redux'
import App from './containers/App'
import store from './store/store'


render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('app')
)
