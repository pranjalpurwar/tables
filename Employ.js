import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Employ() {
  const [employee, setEmployee]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8085")
    .then(res => setEmployee(res.data))
    .catch(err => console.log(err));

  },[])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded'>
        <Link to="/create" className='btn btn-success'>Add + </Link>
        <table className='tab'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
              {
                employee.map((data, i)=> (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                      <button className='btn btn-primary'>Update</button>
                      <button className='btn btn-danger ms-2'>Delete</button>
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Employ;
