import {tableData,tableSearchData} from './Todo_Action.Types'
import axios from "axios";
export const getTodoData = () =>async (dispatch) => {
    
        let data= await axios.get("http://localhost:8080/todo",)   
    
        dispatch({type:tableData,payload:data.data})
}

export const getSearchTodoData = ({name}) =>async (dispatch) => {
    
        let data= await axios.get(`http://localhost:8080/todo/${name}`)   
     
        dispatch({type:tableSearchData,payload:data.data})
}






