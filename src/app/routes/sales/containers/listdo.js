import React from 'react'

import {Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget}  from '../../../components'

import Datatable from '../../../components/tables/Datatable'

export default class Listdo extends React.Component {
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs items={['Sales', 'Delivery Order']} icon="fa fa-fw fa-table"
                          className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
        </div>

        <WidgetGrid>


          <div className="row">
            <article className="col-sm-12">

              <button type="button" class="btn btn-primary">Add New Delivery Order</button>
              <JarvisWidget editbutton={false} color="darken">

              </JarvisWidget> <JarvisWidget editbutton={false} color="blueDark">
              <header><span className="widget-icon"> <i className="fa fa-table"/> </span>
              <h2>
              Delivery Order List
                </h2>
              </header>

              <div>

                <div className="widget-body no-padding"><Datatable
                  options={{
                    ajax: 'assets/api/tables/datatables.filters.json',
                    'columnDefs': [
                       {
                          'targets': 0,
                          'checkboxes': {
                             'selectRow': true
                          }
                       }
                    ],
                    'select': {
                       'style': 'multi'
                    },
                    'order': [[1, 'asc']],
                    columns: [{data: "number"}, {data: "date"}, {data: "salesman"}, {data: "customer"}, {data: "payment"}, {data: "status"}]
                  }}
                  filter={true} className="table table-striped table-bordered" width="100%">

                  <thead>
                  <tr>
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

                    <th data-class="expand">DO#</th>
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
