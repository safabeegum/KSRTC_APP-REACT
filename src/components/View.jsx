import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const[data,changeData]=useState([])

        const fetchData= () => {
            axios.get("").then((response)=>
                {
                    console.log(response.data)
                    changeData(response.data)
                }
            ).catch().finally()
        }

        useEffect(() => {fetchData()},[])

  return (
    <div>
        <Navbar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="bg-primary p-3">
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
                        data.map(
                            (value,index) => {
                                return <tbody>
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.route}</td>
                                    <td>{value.busno}</td>
                                    <td>{value.driver}</td>
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
  )
}

export default View