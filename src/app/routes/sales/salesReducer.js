import {
DO_INIT, 
DO_FETCH_ILOCATION, 
DO_FETCH_SLOCATION,
DO_FETCH_CUSTOMER ,
DO_FETCH_SALESMAN ,
DO_FETCH_PAYMENT,
DO_FETCH_PRODUCT, 
DO_SAVE ,
DO_EDIT,
DO_DELETE }
from './salesActions'
  

const initialState = {
    initial: [],
    ilocation: [],
    slocation: [],
    customer: [],
    salesman: [],
    payment: [],
    product: [],
  };

  export default function salesReducer(state = initialState, action) {
    switch (action.type) {
        case DO_INIT:
          return {
            ...state,
            initial: action.data
          };
        
        case DO_FETCH_ILOCATION:
          return {
            ...state,
            ilocation: action.data
          };
        

        case DO_FETCH_SLOCATION:
          return {
            ...state,
            slocation: action.data.slocation
          };
          case DO_FETCH_CUSTOMER:
          return {
            ...state,
            customer: action.data
          };
          case DO_FETCH_SALESMAN:
          return {
            ...state,
            salesman: action.data.salesman
          };
          case DO_FETCH_PAYMENT:
          return {
            ...state,
            payment: action.data.payment
          };
          case DO_FETCH_PRODUCT:
          console.log('df',action.data)
          return {
            ...state,
            product: action.data
          };
          default:
          return state
        };
  }  
