import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const[data,setData]=useState(
        {
            "busno":"",
        }
    )

    const [result,setresult] = useState([])
    
    const inputHandler=(event) => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=() => {
        console.log(data)
        axios.post("",data).then(
            (response) => {
                setresult(response.data)
            }
        )
    }

    const deleteCourse=(id) => {
        let input = {"_id": id}
        axios.post("",input).then(
            (response) => {
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("Successfully Deleted")
                    }
                    else
                    {
                        alert("Error")
                    }
            }
        ).catch().finally()
    }

  return (
    <div>
        <Navbar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br></br>
                    <div class="bg-primary p-3">
                        <div class="card">
                        <div class="card-body">
                            <div className="row g-3">

                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                                    <label htmlFor="" className="form-label">BUS NO</label>
                                    <input type="text" className="form-control" name='busno' value={data.busno} onChange={inputHandler} />
                                </div>
                                
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                                    <button className="btn btn-warning" onClick={readValue}>SEARCH</button>
                                </div>
                            </div>
                            <br>
                            </br>

                            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered border-primary">
                <thead>
    <tr>
      <th scope="col">BUS NAME</th>
      <th scope="col">ROUTE</th>
      <th scope="col">BUS NO</th>
      <th scope="col">DRIVER NAME</th>
    </tr>
  </thead>
    {
        result.map(
            (value,index) => {
                return <tbody>
                <tr>
                  <td>{value.name}</td>
                  <td>{value.route}</td>
                  <td>{value.busno}</td>
                  <td>{value.driver}</td>
                  <td><button className="btn btn-danger" onClick={() => {deleteCourse(value._id)}}>DELETE</button></td>
                </tr>
              </tbody>
            }
        )
    }
</table>
                </div>
                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search
                        