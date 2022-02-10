import Data from './Data.json';
import DataTable from './datatable';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';



function App (){
  const [data, setData] = useState([]);
  const [q, setQ] = useState("")
  const [ val, setVal] = useState("")


  useEffect(() => {
    const data = Data;
    setData(data)
  }, [])

  function search(rows) {
    console.log(val)
    if (val === "lastname"){
      return rows.filter( row => row.lastname.toLowerCase().indexOf(q) > -1)
      
    } if( val === "firstname") {
      return rows.filter( row => row.firstname.toLowerCase().indexOf(q) > -1)
    }

    else {
      return rows 
    }
  }
  

  return(
    <>
          {/* <div> <Take /></div> */}
          <div>
            <Table>
              <tr>
                <td>
                  <input className='form-control' type="text" value={q} onChange={(e) => setQ(e.target.value)} />
                </td>
                <td>
                  <select className='form-control' onChange={(e) => {setVal(e.target.value)}} required="true" >
                        <option selected disabled hidden >-Select -</option>
                        <option value="firstname">Firstname</option>
                        <option value="lastname" >Lastname</option>
                  </select>
                </td>
              </tr>
            </Table>
          </div>
          <div>
            <DataTable data={search(data)} />
          </div>
    </>
  )
}

export default App;
