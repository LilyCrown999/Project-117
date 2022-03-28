// import data from './data.json'
import datum from './data2.json'
import Table from 'react-bootstrap/Table'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

export function DataTable({ data, head}) {
  const columns = data[0] && Object.keys(data[0])
  const [B, setB] = useState()
  localStorage.setItem("Cell_data", JSON.stringify(B))
  // var alt = JSON.parse(localStorage.getItem("Branch_data"))
  return(
    <div>
          <Card className="overflow-auto" style={{ marginTop: 10}}>
            <Table striped bordered hover responsive>
              <thead style={{ fontSize: 13 }}>
                  <tr> 
                    {data[0] && columns.map( heading =>
                      <th key={heading[0]} >
                        {heading} 
                      </th> )} 
                      <th> Check </th>
                  </tr>
              </thead>
              <tbody style={{ fontSize: 13 }}>
                  {data.map(
                      row =>
                      <tr key={row[0]}>
                          {
                              columns.map(column => <td>{row[column]}</td>)
                          }
                        <td>
                            <div>
                                {/* <input type="checkbox" class="form-check-input position-static" /> */}
                              <input type="radio" name="check" className="form-check-input position-static" onClick={() => (setB(row))}/>
                            </div>
                        </td>
                      </tr>
                  )}
              </tbody>
            </Table>
          </Card>
    </div>
  )
}

const Project = () => {
  const [A, setA] = useState()
  localStorage.setItem("Data", JSON.stringify(datum))
  var dat = JSON.parse(localStorage.getItem("Data"))
  const [B, setB] = useState(dat)
  function create(){
     setA( A.push({
        "id": 0,
        "firstname": "Me",
        "lastname": "Tets",
        "status": "Active",
        "gender": "F"
    }) )
    console.log(A)
  }

  function del(){
    var alt = JSON.parse(localStorage.getItem("Cell_data"))
    var data = JSON.parse(localStorage.getItem("Data"))
    var news = data.filter((i) => i.id !== alt.id)
    localStorage.setItem("Data", JSON.stringify(news))
  }

  console.log(JSON.parse(localStorage.getItem("Cell_data")))
  return (
    <div>
        <button className='btn btn-info btn-sm' > Create </button>
        <Card>
         <Card.Header> Test </Card.Header>
            <Card.Body /*className='card-deck' */>
                <button type="button" class="btn btn-info btn-sm" onClick={create}>Create</button>
                <button type="button" class="btn btn-primary btn-sm">Edit</button>
                <button type="button" class="btn btn-success btn-sm">View</button>
                <button type="button" class="btn btn-danger btn-sm" onClick={del}>Delete</button>
                <button type="button" class="btn btn-outline-danger btn-sm">Exception</button>
                <button type="button" class="btn btn-outline-warning btn-sm">Review</button>
                <button type="button" class="btn btn-outline-info btn-sm">Excel to Save</button>
                <button type="button" class="btn btn-outline-success btn-sm">Help?</button>
              <DataTable data={B}/>
            </Card.Body>
        </Card>
    </div>
  )
}
export default Project