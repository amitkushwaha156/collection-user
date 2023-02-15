import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Updatedata from "./Updatedata";
import Paginations from "./Paginations";
import {useDispatch, useSelector} from "react-redux"
import { getTodoData } from "../Redux/TodoRedux/Todo_Action";
import Details from './Details';

function Tablee({item}) {
  const [itemsPerPage, setItemsPerPage] = useState(5);

const {data}= useSelector(store=>store.TodoReducer)
const [currentPage, setCurrentPage] = useState(1);
//const [postsPerPage] = useState(itemsPerPage);
const dispatch=useDispatch()



//console.log( data.length)

const handleDelete=(del)=>{
  axios.delete(`http://localhost:8080/${del}`)
  alert("Are you sure you want to delete")
  window.location.reload(false);
}

useEffect(() => {
  dispatch(getTodoData())  
},[]); 


// Get current posts
const indexOfLastPost = currentPage * itemsPerPage;
const indexOfFirstPost = indexOfLastPost - itemsPerPage;
const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);




  return (
    <div>
    <Table bordered>
    <thead>
    <tr className="text-center">
    <th>Id</th>
    <th>Name</th>
    <th>Address</th>
    <th>Email</th>
    <th>Mobile</th>
    <th>Gender</th>
    <th>City</th>
    <th>Action</th>
    </tr>
    </thead>
    <tbody>
    {
      
      currentPosts.map((item,index) => (
    <tr key={item._id}>
    <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
    <td>{item.name}</td>
    <td>{item.address}</td>
    <td>{item.email}</td>
    <td>{item.mobile}</td>
    <td>{item.gender}</td>
    <td>{item.city}</td>

            <td className="d-flex justify-content-around ">
               
            <Updatedata item={item} />
     
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash3  tanshclass"
                viewBox="0 0 16 16"
                onClick={()=>handleDelete(item._id)}
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>

            </td>
          </tr>
        ))}
      </tbody>
     
    </Table>
    <div className="d-flex justify-content-end">
    <Details itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />

    <Paginations
        itemsPerPage={itemsPerPage}
        totalPosts={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
    </div>
  );
}

export default Tablee;
