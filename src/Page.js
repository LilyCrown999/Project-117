
import Data from './json/ic4pro_customers.json';
import Data_2 from './json/ic4pro_accountDetails.json';
import Data_3 from './json/ic4pro_customerSignatory.json';
import Data_4 from './json/ic4pro_signatoryTelephone.json';
import Data_5 from './json/ic4pro_signatoryIdentity.json';
import Data_6 from './json/ic4pro_signatoryPermit.json';
import Data_7 from './json/ic4pro_signatoryAddress.json';

import DataTable from './datatable';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

const Page = () => {
  
  const [data, setData] = useState([]);
  const [data_2,setData2] = useState([]);
  const [data_3,setData3] = useState([]);
  const [data_4,setData4] = useState([]);
  const [data_5,setData5] = useState([]);
  const [data_6,setData6] = useState([]);
  const [data_7,setData7] = useState([]);

  const [q, setQ] = useState("")
  const [ val, setVal] = useState("")

  useEffect(() => {
    const data = Data;
    const data_2 = Data_2;
    const data_3 = Data_3;
    const data_4 = Data_4;
    const data_5 = Data_5;
    const data_6 = Data_6;
    const data_7 = Data_7;

    setData(data)
    setData2(data_2)
    setData3(data_3)
    setData4(data_4)
    setData5(data_5)
    setData6(data_6)
    setData7(data_7)

  }, [])

  function search(rows) {
    const newData2 = rows.filter(x => x.LastName.toLowerCase().indexOf(q) > -1 )
    const newData = rows.filter( row => row.FirstName.toLowerCase().indexOf(q) > -1 )
    console.log(newData2)

    if( val === "firstname") {
      setData(newData)
    }
    else {
      setData(newData2)
    }
  }

  function search2(rows){
      const newData = rows.filter( row => row.AccountName.toLowerCase().indexOf(q) > -1)
      setData2(newData)
  }

  function search3(rows){
      const newData = rows.filter( row => row.FullName.toLowerCase().indexOf(q) > -1)
      setData3(newData)
  }
  function search4(rows){
      const newData = rows.filter( row => row.FullName.toLowerCase().indexOf(q) > -1)
      setData4(newData)
  }
  function search5(rows){
      const newData = rows.filter( row => row.FullName.toLowerCase().indexOf(q) > -1)
      setData5(newData)
  }
  function search6(rows){
      const newData = rows.filter( row => row.FullName.toLowerCase().indexOf(q) > -1)
      setData6(newData)
  }
  function search7(rows){
      const newData = rows.filter( row => row.FullName.toLowerCase().indexOf(q) > -1)
      setData7(newData)  
  }
  

  return(
    <div className="Page">
          {/* <div> <Take /></div> */}
          <div className='top' style={{ margin: "30px"}}>
            <Table>
              <tr>
                <td>
                  <input className='form-control' type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="lola"/>
                </td>
                <td>
                  <select className="form-control btn btn-secondary dropdown-toggle search btnz"  onChange={(e) => {setVal(e.target.value)}} >
                        <option selected disabled hidden >-Select -</option>
                        <option value="firstname">Firstname</option>
                        <option value="lastname" >Lastname</option>
                  </select>
                </td>
                <td>
                <button className='btn btn-secondary form-control' onClick={() => (
                  search2(data_2),
                  search3(data_3),
                  search4(data_4),
                  search5(data_5),
                  search6(data_6),
                  search7(data_7),
                  search(data)
                  )}> <i className='search'>  Search  </i></button>
                </td>
              </tr>
            </Table>
          </div>
          <div >
            <DataTable head='Customer - Individual' data={data} />
            <DataTable head='Account' data={data_2} />
            <DataTable head='Signatory/ Directory' data={data_3} />
                <div className='parent'>
                <div className = "h-25 d-inline-block bg-info child" style = {{width: "25%"}}>
                <DataTable head='Phone' data={data_4} />
                </div>
                <div className = "h-25 d-inline-block bg-info child" style = {{width: "25%"}}>
                <DataTable head='Identity' data={data_5}  />
                </div>
                <div className = "h-25 d-inline-block bg-info child" style = {{width: "25%"}}>
                <DataTable head='Permit' data={data_6} />
                </div>
                <div className = "h-25 d-inline-block bg-info child" style = {{width: "25%"}}>
                <DataTable head='Employer' data={data_7} />
                </div>
                
              </div>
            </div>
    </div>
  )
}

export default Page