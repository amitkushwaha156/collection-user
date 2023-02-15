
import {tableData,tableSearchData} from './Todo_Action.Types'
const initialState = {
    data: [],
    
  };

const TodoReducer = (state = initialState,{type,payload}) => {
   switch (type){
      case tableData:{
      return {...state, data:payload}
    }
      case tableSearchData:{
      return {...state, data:payload}
    }
  



      default :{  
        return state;
      }
    }
    
}

export default TodoReducer

