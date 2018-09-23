import React, {Component} from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget}  from '../../../components'

import { Table, Input, Icon, Button, Popconfirm,Form,AutoComplete } from 'antd';
import 'antd/dist/antd.css';  

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {doFetchProduct} from '../salesActions'
import store from '../../../store/configureStore'

// import 'antd/dist/antd.less'
import 'antd/es/table/style/index.css';
import 'antd/es/pagination/style/index.css';
import 'antd/es/button/style/index.css';
import 'antd/es/input/style/index.css';
import 'antd/es/auto-complete/style/index.css';

import './ant-detail.css'
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const dataSource = [{
  title: 'Rumah Tangga',
  children: [{
    title: 'Kulkas',
    count: 10000,
  }, {
    title: 'Mesin Cuci',
    count: 10600,
  }],
}, {
  title: 'Konsumer Goods',
  children: [{
    title: 'Televisi',
    count: 60100,
  }, {
    title: 'Radio',
    count: 30010,
  }],
}, {
  title: 'Barang Mewah',
  children: [{
    title: 'DVD Player',
    count: 100000,
  }],
}];

class AutoEditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    console.log(e.target.value)
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ 
      editable: false
     });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  
  edit = () => {
    this.setState({ editable: true });
  }
  onSelect=(value) => {
    console.log('onSelect', value);
    this.setState({ 
      value : value,
      editable: false
     });
  }
  render() {
    const { value, editable } = this.state;
    console.log('isi',editable)
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
                <AutoComplete
                    className="certain-category-search"
                    dropdownClassName="certain-category-search-dropdown"
                    dropdownMatchSelectWidth={false}
                    dropdownStyle={{ width: 300 }}
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={options}
                    placeholder="input here"
                    optionLabelProp="value"
                    onSelect={this.onSelect}
                  >
                  <Input suffix={<Icon type="search" className="certain-category-icon" />} />

              </AutoComplete>
              
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}
class EditableCell extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    value: this.props.value,
    editable: false,
  }  
}
  
  handleChange = (e) => {
    console.log(e.target.value)
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ 
      editable: false
     });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  
  edit = () => {
    this.setState({ editable: true });
  }
  onSelect=(value) => {
    this.setState({ 
      value : value,
      editable: false
     });
  }
  render() {
    const { value, editable } = this.state;
    console.log('isi',editable)
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
              value={value}
              onChange={this.handleChange}
              onPressEnter={this.check}
              />
              
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}

export default class EditableTable extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'ProductID',
        dataIndex: 'productid',
        width: '10%'
      },
      {
      title: 'Description',
      dataIndex: 'description',
      width: '30%',
      render: (text, record) => (
        <AutoEditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'description')}
        />
      ),
    }, {
      title: 'Price',
      dataIndex: 'price',
      className: 'column-money',
    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      className: 'column-money',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'qty')}
        />
      ),
    }, {
      title: 'Discount',
      dataIndex: 'discount',
      className: 'column-money',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'discount')}
        />
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      className: 'column-money',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          this.state.dataSource.length > 1 ?
          (
            <Popconfirm title="Sure to delete?" okText="Yes" cancelText="No" onConfirm={() => this.onDelete(record.key)}>
              <a href="#">Delete</a>
            </Popconfirm>
          ) : null
        );
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        productid: '001',
        description: 'Lemari Es',
        qty: '12',
        price: '1.500.000',
        discount: '0',
        total: '12.600.000',
      },{
        key: '1',
        productid: '002',
        description: 'Refreegerator',
        qty: '15',
        price: '2.500.000',
        discount: '0',
        total: '52.600.000',
      }
    
    ],
      count: 2,
    };
  }
  
  onCellChange = (key, dataIndex) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }
  onDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      productid: '002',
      description: 'Refreegerator',
      qty: '15',
      price: '2.500.000',
      discount: '0',
      total: '52.600.000',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }
  inifooter =() =>{
    return  (
      <div id="content">
        <div className="form-horizontal">
        <div className="row">
            <div className="col-md-6">
            <fieldset>
          <div className="form-group">
            <label className="col-md-4 control-label">Normal Discount %</label>
            <div className="col-md-4">
            
              <input className="form-control pull-right input-xs" id="normal" min="0" max="100" placeholder="0" type="number" />
            </div>
            </div>   
            <div className="form-group">
            <label className="col-md-4 control-label">Cash Discount %</label>
            <div className="col-md-4">
              <input className="form-control pull-right input-xs" id="cash" min="0" max="100" placeholder="0" type="number" />
            </div>
            </div>   
            <div className="form-group">
            <label className="col-md-4 control-label">Cash K Discount %</label>
            <div className="col-md-4">
              <input className="form-control pull-right input-xs" id="cashk" min="0" max="100" placeholder="0" type="number" />
            </div>
            </div>   
            <div className="form-group">
            <label className="col-md-4 control-label">Dealer Discount %</label>
            <div className="col-md-4">
              <input className="form-control pull-right input-xs" id="dealer" min="0" max="100" placeholder="0" type="number" />
            </div>
            </div>  
            <div className="form-group">
            <label className="col-md-4 control-label">Special Discount %</label>
            <div className="col-md-4">
              <input className="form-control pull-right input-xs" id="special" min="0" max="100" placeholder="0" type="number" />
            </div>
            </div>        
        
        </fieldset>
            </div>
            <div className="col-md-6">
            <fieldset>
            <div className="form-group">
            <label className="col-md-4 control-label">Total</label>
            <div className="col-md-8">
            <label className="col-md-4 control-label pull-right input-xs"><strong>###.###.###</strong></label>
            </div>
            </div>  
            
            <div className="form-group">
            <label className="col-md-4 control-label">Discount 0%</label>
            <div className="col-md-8">
            <label className="col-md-4 control-label pull-right input-xs"><strong>###.###.###</strong></label>
            </div>
            </div>  

            <div className="form-group">
            <label className="col-md-4 control-label">D.P.P</label>
            <div className="col-md-8">
            <label className="col-md-4 control-label pull-right input-xs"><strong>###.###.###</strong></label>
            </div>
            </div>  

            <div className="form-group">
            <label className="col-md-4 control-label">P.P.N</label>
            <div className="col-md-8">
            <label className="col-md-4 control-label pull-right input-xs"><strong>###.###.###</strong></label>
            </div>
            </div>  

            <div className="form-group">
            <label className="col-md-4 control-label">Grand Total</label>
            <div className="col-md-8">
            <label className="col-md-4 control-label pull-right input-xs"><strong>###.###.###</strong></label>
            </div>
            </div>  
        
        </fieldset>
            </div>
        
        </div>
        
        </div>
        </div>
    )
  }
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
        <Table bordered dataSource={dataSource} columns={columns} size="small" footer={this.inifooter} />
      </div>
    );
  }
}

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >Detail
      </a>
    </span>
  );
}
const options = dataSource.map(group => (
  <OptGroup
    key={group.title}
    label={renderTitle(group.title)}
  >
    {group.children.map(opt => (
      <Option key={opt.title} value={opt.title}>
        {opt.title}
        <span className="certain-search-item-count">{opt.count} </span>
      </Option>
    ))}
  </OptGroup>
)).concat([
  <Option disabled key="all" className="show-all">
    <a
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      查看所有结果
    </a>
  </Option>,
]);
