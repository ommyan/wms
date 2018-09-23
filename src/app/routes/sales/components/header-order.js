import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {doInit,doFetchIlocation} from '../salesActions'
import store from '../../../store/configureStore'
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';

let location =[]
class HeaderOrder extends Component {
    constructor(props){
        super(props)
      this.state = {
        
      }  
    }
    
     componentDidMount = () => {
        let location = this.props.location
        console.log('did',location)
     }
     

    render(){
        console.log('props lction',this.props.location)
        
        return(
            <div id="content">
            <div className="widget-body">
            <form className="form-horizontal">
            <div className="row">
                    <div className="col-md-4">
                            <fieldset>
                            <fieldset>
                            <section>  
                              <div className="form-group">
                                        <label className="col-md-4 control-label">Issued Location</label>
                                        <div className="col-md-8">
                                        <Select2
                                        style = {{ width : '100%' }}
                                        data={this.props.location}
                                        options={{
                                            placeholder: 'search by tags'
                                        }}
                                        />
                                        
                                        </div>

                                    </div>
                                </section> 
                            <div className="form-group">
                                <label className="col-md-4 control-label">Nomor DO#</label>
                                <div className="col-md-8">
                                    <input className="form-control input-xs" placeholder="Autogenerate" type="text"/>
                                </div>

                            </div>

                            <div className="form-group">
                                <label className="col-md-4 control-label">Payment Method</label>
                                <div className="col-md-8">
                                    <input className="form-control input-xs" placeholder="Type payment method..." type="text"  list="listpay"/>
                                    <datalist id="listpay">
                                        <option value="Cash">Cash</option>
                                        <option value="Credit">Credit</option>
                                    </datalist>
                                </div>

                            </div>
                          
                            </fieldset>

                            <fieldset>
                            
                            </fieldset>

                        </fieldset>
                        </div>

                        <div className="col-md-4">
                        <fieldset>
                        <section>
                        <div className="form-group">
                            <label className="col-md-4 control-label">Stock Location</label>
                            <div className="col-md-8">
                            <Select2
                            style = {{ width : '100%' }}
                            data={this.props.location}
                            options={{
                                placeholder: 'search by tags'
                            }}
                            />
                            </div>

                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label">Date#</label>
                            <div className="col-md-8">
                                <input className="form-control input-xs" type="date"/>
                            </div>
                        </div>

                        <div className="form-group">
                        <label className="col-md-4 control-label">Due Date#</label>
                        <div className="col-md-8">
                            <input className="form-control input-xs" type="date"/>
                        </div>
                        </div>

                        <div className="form-group">
                        <label className="col-md-4 control-label">Currency</label>
                        <div className="col-md-8">
                            <input className="form-control input-xs" type="text"/>
                        </div>
                        </div>

                        
                        </section>
                        <section>  
                        
                        </section>  
                    </fieldset>
                    </div>
                    <div className="col-md-4">
                    <fieldset>
                    <div className="form-group">
                    <label className="col-md-4 control-label">Dealer / Sub Dealer</label>
                    <div className="col-md-8">
                        <Select2
                            style = {{ width : '100%' }}
                            data={this.props.customer}
                            options={{
                                placeholder: 'search by tags'
                            }}
                        />
                    </div>

                </div>
                    <div className="form-group">
                    <label className="col-md-4 control-label">Salesman</label>
                    <div className="col-md-8">
                        <input className="form-control input-xs" placeholder="Type salesman..." type="text"  list="listsales"/>
                        <datalist id="listsales">
                            <option value="Cash">Cash</option>
                            <option value="Credit">Credit</option>
                        </datalist>
                    </div>

                </div>

                <div className="form-group">
                        <label className="col-md-4 control-label">Stock Type</label>
                        <div className="col-md-8">
                            <input className="form-control input-xs" type="text"/>
                            <p className="note"><strong>Note:</strong> affect stock in xx location</p>

                        </div>
                </div>
                <div className="form-group">
                    <label className="col-md-4 control-label">Faktur</label>
                    <div className="col-md-8">
                        <input className="form-control input-xs" type="text"/>
                    </div>
                </div>

                    </fieldset>
                </div>

                </div>
                <div className="row">
                
                </div>
            </form>
                
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
    )(HeaderOrder)