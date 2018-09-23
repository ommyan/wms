
import getJSON from '../../components/utils/getJSON'
import axios from 'axios'

export const DO_INIT = 'DO_INIT';
export const DO_FETCH_ILOCATION = 'DO_FETCH_ILOCATION';
export const DO_FETCH_SLOCATION = 'DO_FETCH_SLOCATION';
export const DO_FETCH_CUSTOMER = 'DO_FETCH_CUSTOMER';
export const DO_FETCH_SALESMAN = 'DO_FETCH_SALESMAN';
export const DO_FETCH_PAYMENT = 'DO_FETCH_PAYMENT';
export const DO_FETCH_PRODUCT = 'DO_FETCH_PRODUCT';
export const DO_SAVE = 'DO_SAVE';
export const DO_EDIT = 'DO_EDIT';
export const DO_DELETE = 'DO_DELETE';
let titleproduct ={}
        let children ={}
        let anak=[]
        let products={}
        let product=[]
        let uProduct=[]
        let types=[]
        let typeproduct=[]
        let item = {}
        let itemproduct ={}

export function doInit(){
    return dispatch => {
      // return getJSON('assets/api/user/login-info.json')
      return getJSON('assets/api/user/login-info.json')
        .then(res=>{
          dispatch({
            type: DO_INIT,
            data: res
          })
        })
    }
  }

  
  export function doFetchIlocation(location){
    console.log('location fetch',location)
    const requestOptions = {
      method: ['POST','GET'],
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({ location })
      };
      return dispatch => {
        let loc=[]
        return axios.post(`http://127.0.0.1:5000/location`, requestOptions)
              .then(location => {
                location.data.data.map((rekap, i) =>
                    loc.push(rekap)
                )
              dispatch({
                type: DO_FETCH_ILOCATION,
                data: loc
              })
              return loc;
          });
      }    
  }
 
  export function doFetchSlocation(location){
    return dispatch => {
      return getJSON('assets/api/outlook/outlook.json')
        .then(res=>{
          dispatch({
            type: DO_FETCH_SLOCATION,
            data: res.data
          })
        })
    }
  }
  
  export function doFetchCustomer(location){
    console.log('location fetch',location)
    const requestOptions = {
      method: ['POST','GET'],
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({ location })
      };
      return dispatch => {
        let sd=[]
        let subdealer={}

        return axios.post(`http://127.0.0.1:5000/subdealer`, requestOptions)
              .then(subdealer => {
                console.log('loc',subdealer)
                let rekap=[]
                
                subdealer.data.data.map((rekap, i) =>
                    sd.push({
                      'id' : rekap['subdealer_id'],
                      'text' : rekap['sd_name']
                    })
                )

              console.log('arr loc',sd)
              dispatch({
                type: DO_FETCH_CUSTOMER,
                data: sd
              })
              return sd;
          });
      }  
  }
  
  export function doFetchSalesman(location){
    return dispatch => {
      return getJSON('assets/api/outlook/outlook.json')
        .then(res=>{
          dispatch({
            type: DO_FETCH_SALESMAN,
            data: res.data
          })
        })
    }
  }
  
  export function doFetchPayment(){
    return dispatch => {
      return getJSON('assets/api/outlook/outlook.json')
        .then(res=>{
          dispatch({
            type: DO_FETCH_PAYMENT,
            data: res.data
          })
        })
    }
  }
  
  export function doFetchProduct(){
    const requestOptions = {
      method: ['POST','GET'],
      headers:{'Content-Type': 'application/json'}
      };
       
      return dispatch => {
        let typeproduct=[]
        let tpp = []
              axios.get(`http://127.0.0.1:5000/type`, requestOptions)
                    .then(types => {
                        typeproduct = types.data
                        console.log('tp',typeproduct)
                        console.log('haooo',typeproduct)

                          axios.get(`http://127.0.0.1:5000/item`, requestOptions)
                          .then(item => {
                              itemproduct = item.data.data
                              console.log('itemp',itemproduct)
                              let children = []
                              typeproduct.data.map((tp)=>
                              {
                                  tpp = tp['types_id']
                                  children=itemproduct.filter(function(item){
                                  return item.types_id == tpp;    
                                  })
                                  console.log('type',children)
                                  
                                  console.log('prod',titleproduct)
                              })    


                              dispatch({
                                type: DO_FETCH_PRODUCT,
                                data: titleproduct
                              })
                          }
                          )  

                       

                    }
                    )
                    
                    

              //     
        
              // typeproduct.map((tp)=>
              // {
              //     children=itemproduct.filter(function(item){
              //     return item.types_name == titleproduct;    
              //     })
                  
              //     children.map((child)=>
              //     {
              //       anak.push({'title' : child['descriptions']})
              //       console.log('anak',anak)
              //     })
              //     titleproduct.push(
              //       {
              //         'title' : tp['types_name'],
              //         'children' : anak 
              //       }
              //     )
              //     console.log('prod',titleproduct)
              //   })    
      } 
    } 
  
  export function doSave(){
    return dispatch => {
      return getJSON('assets/api/outlook/outlook.json')
        .then(res=>{
          dispatch({
            type: DO_SAVE,
            data: res.data
          })
        })
    }
  }
  export function doEdit(id){
    return dispatch => {
      return getJSON('assets/api/outlook/outlook.json')
        .then(res=>{
          dispatch({
            type: DO_EDIT,
            data: res.data
          })
        })
    }
  }
  export function doDELETE(){
    return dispatch => {
      return getJSON('assets/api/outlook/outlook.json')
        .then(res=>{
          dispatch({
            type: DO_DELETE,
            data: res.data
          })
        })
    }
  }
  
  