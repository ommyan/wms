import React from 'react'
import {Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget}  from '../../../components'
import EditableTable from '../components/ant-detail'

import Datatable from '../../../components/tables/Datatable'
import HeaderOrder from '../components/header-order';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {doInit,doFetchIlocation,doFetchCustomer, doFetchProduct} from '../salesActions'
import store from '../../../store/configureStore'


const putih = {
     color: 'white'
}

let ilocation={}
class Newdo extends React.Component {
  constructor(props){
    super(props)
  this.state = {
      userinfo:store.getState().user.user,
      location:store.getState().user.user,
      ilocation:store.getState().salesReducer.ilocation
      
  }  
}
componentWillMount(){
  this.props.dispatch(doInit())
  this.props.dispatch(doFetchProduct())
  this.props.dispatch(doFetchIlocation(this.state.location.data[0].locationid))
  this.props.dispatch(doFetchCustomer(this.state.location.data[0].locationid))
  

  console.log('props',this.props.salesReducer, 'Isis props')
}
  
  render() {
    console.log('prop userinfo',this.state.userinfo)
    console.log('product sales DO',store.getState().salesReducer.product)

    if (this.state.ilocation && this.state.ilocation.length>0){
      console.log('prop sales DO',this.state.ilocation)
    }
    
    // if (this.props.salesReducer.ilocation && this.salesReducer.ilocation.length >0 ) {
    //   console.log(this.props.salesReducer)
    // }  

    return (
      <div id="content">

        <div className="row">
          <BigBreadcrumbs items={['Sales', 'Delivery Order Entry']} icon="fa fa-lg fa-fw fa-cube txt-color-blue"
          className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
        </div>
        <div className="row">
        <article className="col-sm-12">
          <JarvisWidget editbutton={false} color="darken">

          </JarvisWidget>
          <JarvisWidget editbutton={false} color="blueDark">
          <header><span className="widget-icon"> <i className="fa fa-lg fa-fw fa-cube txt-color-blue"/> </span>
          <h2 style={putih}>
             Delivery Order Entry Form
            </h2>
          </header>
          <HeaderOrder location={store.getState().salesReducer.ilocation} customer={store.getState().salesReducer.customer} />

          </JarvisWidget>
        </article>

        </div>


        <div className="row">
        <div className="col-sm-12">
          <JarvisWidget editbutton={false} color="darken">

          </JarvisWidget>
          <JarvisWidget editbutton={false} color="blueDark">
          <header><span className="widget-icon"> <i className="fa fa-lg fa-fw fa-cube txt-color-blue"/> </span>
          <h2 style={putih}>
             Delivery Order Item Entry Form
            </h2>
          </header>
          <EditableTable/>
          </JarvisWidget>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  salesReducer: state.salesReducer
})

export default connect(
  mapStateToProps
  )(Newdo)

