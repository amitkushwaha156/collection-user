import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Formstyle.css";
import {useDispatch} from "react-redux"
import {  getTodoData } from "../Redux/TodoRedux/Todo_Action";

const initData={
  id:"",
  name: "",
  address: "",
  email: "",
  mobile: "",
  gender: "",
  city: "",
}

function FormMoal({item}) {
  const dispatch=useDispatch()
  const [user, setuser] = useState(item || initData);
  console.log(user)

  let name, value;
  const handeler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value});
  };
  const dataSubmit = (e) => {
    e.preventDefault();
   // console.log(user);
   window.location.reload(false);
if(item){
  axios.patch(`http://localhost:8080/${user._id}`, user)
  .then((response) => {
    console.log(response);
    dispatch(getTodoData())   
    alert(  "data updated successfully")
  })
  .catch((err) => {
    console.log(err);
  });
}else{
  axios
  .post("http://localhost:8080/", user)
  .then((response) => {
    console.log(response);
    alert("data Submitted successfully")
  })
  .catch((err) => {
    console.log(err);
  });
};
}

const handleReset = () => {
  setuser(initData);
};

  return (
    <Form onSubmit={dataSubmit}>
      <Form.Group className="mb-3 boxStyle mt-3" controlId="">
        <Form.Label  className=" boxStyle">Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={user.name} required
          onChange={handeler} placeholder="Name"
          
        />
      </Form.Group>

      <Form.Group className=" boxStyle mb-3">
        <Form.Label  className=" boxStyle">Address</Form.Label>
        <Form.Control
          as="textarea" placeholder="Address"
          value={user.address} required
          onChange={(e) => setuser({ ...user, address: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3 boxStyle" controlId="">
        <Form.Label  className=" boxStyle">Email</Form.Label>
        <Form.Control
          type="text"
          name="email" placeholder="Email Address" required
          value={user.email}
          onChange={handeler} 
        />
      </Form.Group>

      <Form.Group className="mb-3 boxStyle" controlId="">
        <Form.Label  className=" boxStyle">Mobile</Form.Label>
        <Form.Control
          type="number"
          placeholder="Mobile"
          value={user.mobile}
          name="mobile" required
          onChange={handeler} 
        />
      </Form.Group>

      <Form.Label className=" boxStyle">Gender</Form.Label>
      <Form.Group onChange={handeler}  className="mb-3"  >
        <Form.Check
          inline
          label="Male"
          name="gender"
          type="radio"
          value="Male" required
          defaultChecked={user.gender==="Male"}
        />
        <Form.Check
          inline
          label="Female"
          name="gender"
          type="radio"
          value="Female"
          defaultChecked={user.gender==="Female"}
          
        />
      </Form.Group>

      <Form.Group>
        <Form.Select className="mb-3"
          aria-label="Floating label "
          onChange={(e) => setuser({ ...user, city: e.target.value })}
          
        >
          <option  >City</option>
          <option value="satna">Satna</option>
          <option value="kota"  >Kota</option>
          <option value="delhi">Delhi</option>
          <option value="ahmedabad">Ahmedabad</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"  className="Check_me" label="Check term conditon" defaultChecked/>
      </Form.Group>
      <div className="d-flex justify-content-around">
         <Button variant=" " className="button-29" type="submit"  >
        Submit
      </Button>
      <Button variant=" " className="button-30" type="reset" onClick={handleReset}  >
        Reset
      </Button>
      </div>
    
     
    </Form>
  );
}

export default FormMoal;
