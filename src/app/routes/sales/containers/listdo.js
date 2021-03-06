import React from 'react'

import {Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget}  from '../../../components'

import Datatable from '../../../components/tables/Datatable'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {doInit,doFetchIlocation} from '../salesActions'
import {getlogedIn} from '../../../components/user/UserActions'
import store from '../../../store/configureStore'
class Listdo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userLogin: store.getState().user.user
     }
    
}
  componentWillMount(){
    this.props.dispatch(getlogedIn())
    
    
  }
  render() {
    console.log('dt dtore',this.state.userLogin)
    return (
       <div id="content">
        <div className="row">
          <BigBreadcrumbs items={['Sales', 'Delivery Order']} icon="fa fa-fw fa-table"
                          className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
        </div>

        <WidgetGrid>


          <div className="row">
            <article className="col-sm-12">

              <a className="btn btn-primary" href="#/sales/newdo">Add New Delivery Order</a>

              <JarvisWidget editbutton={false} color="darken">

              </JarvisWidget>
              <JarvisWidget editbutton={false} color="blueDark">
              <header><span className="widget-icon"> <i className="fa fa-table"/> </span>
              <h2>
              Delivery Order List
                </h2>
              </header>

              <div>

                <div className="widget-body no-padding">
                <Datatable
                  options={{
                    ajax: 'assets/api/tables/datatables.filters.json',
                    columns: [
                      {
                      "mData": null,
                      "bSortable": false,
                      "mRender": function(data, type, full) {
                        return '<a class="btn btn-xs btn-default" href=/do/edit/' + data.number + '>' + "<i class='fa fa-pencil'></i>" + '</a>';
                      }
                    },
                      {data: "number",
                    "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                        $(nTd).html("<a href='/do/edit/"+oData.number+"'>"+oData.number+"</a>");
                    }},
                                  // render: text => <a href="#">{text}</a>
                      // },
                      {data: "date"},
                      {data: "salesman"},
                      {data: "customer"},
                      {data: "payment"},
                      {data: "status"}
                    ]
                  }}
                  filter={true} className="table table-striped table-bordered" width="100%">

                  <thead>
                  <tr>
                  <th className="hasinput" style={{width: "5%"}}>
                  </th>
                    <th className="hasinput" style={{width: "17%"}}><input type="text"
                                                                           className="form-control"
                                                                           placeholder="Filter Nomor DO"/>
                    </th>
                    <th className="hasinput icon-addon"><input id="dateselect_filter" type="text"
                                                               placeholder="Filter Tanggal DO"
                                                               className="form-control datepicker"
                                                               data-dateformat="yy/mm/dd"/> <label
                      htmlFor="dateselect_filter"
                      className="glyphicon glyphicon-calendar no-margin padding-top-15"
                      rel="tooltip" title="" data-original-title="Filter Date"/>
                    </th>
                    <th className="hasinput" style={{width: '16%'}}><input type="text"
                                                                           className="form-control"
                                                                           placeholder="Filter by Salesman"/>
                    </th>
                    <th className="hasinput" style={{width: '17%'}}><input type="text"
                                                                           className="form-control"
                                                                           placeholder="Filter Customer"/>
                    </th>
                    <th className="hasinput icon-addon"><input type="text"
                                                                           className="form-control"
                                                                           placeholder="Filter By Payment"/>
                    </th>
                    <th className="hasinput" style={{width: '16%'}}>
                      <input type="text" className="form-control"
                             placeholder="Filter by Status"/>
                    </th>
                  </tr>
                  <tr>

                    <th data-className="expand"></th>
                    <th data-className="expand">DO#</th>
                    <th>Date</th>
                    <th data-hide="date">Salesman</th>
                    <th data-hide="phone">Customer</th>
                    <th data-hide="phone,tablet">Payment</th>
                    <th data-hide="phone,tablet">Status</th>

                  </tr>
                  </thead>
                </Datatable>
                </div>
              </div>
            </JarvisWidget>



            </article>


          </div>

        </WidgetGrid>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  salesReducer: state.salesReducer,
  userReducer: state.userReducer
})

export default connect(
  mapStateToProps
  )(Listdo)
