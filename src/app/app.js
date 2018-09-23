import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, hashHistory} from 'react-router'


import store from './store/configureStore'
import { getlogedIn } from './components/user';

const history = syncHistoryWithStore(hashHistory, store);

const routes = {

  path: '/',
  indexRoute: { onEnter: (nextState, replace) => replace('/dashboard') },
  childRoutes: [
    require('./routes/dashboard').default,
    require('./routes/smartadmin-intel').default,
    require('./routes/widgets').default,
    require('./routes/outlook').default,
    require('./routes/tables').default,
    require('./routes/ui').default,
    require('./routes/graphs').default,
    require('./routes/e-commerce').default,
    require('./routes/misc').default,
    require('./routes/auth').default,
    require('./routes/app-views').default,
    require('./routes/maps').default,
    require('./routes/calendar').default,
    require('./routes/forms').default,
    require('./routes/sales').default,
    // comment unused routes
    // this will speed up builds
  ]
};

// let items : store.getState()

// function requireAuth(nextState, replaceState) {
//   if (!user.loggedIn())
//     replaceState({ nextPathname: nextState.location.pathname }, '/sales/listdo')
// }




ReactDOM.render((
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>
), document.getElementById('smartadmin-root'));
