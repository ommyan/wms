export default {
  path: 'sales',
  component: require('../../components/common/Layout').default,

  childRoutes: [
    {
      path: 'listdo',
      getComponent(nextState, cb){
        System.import('./containers/listdo').then((m)=> {
          cb(null, m.default)
        })
      }
    }
    ,
    {
      path: 'listdr',
      getComponent(nextState, cb){
        System.import('./containers/listdo').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
