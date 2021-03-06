import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import store from '../../../store/configureStore'

export const history = syncHistoryWithStore(hashHistory, store);
