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
      path: 'newdo',
      getComponent(nextState, cb){
        System.import('./containers/newdo').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
