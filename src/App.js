import Data from './json/ic4pro_customers.json';
import Data_2 from './json/ic4pro_accountDetails.json';
import Data_3 from './json/ic4pro_customerSignatory.json';
import Data_4 from './json/ic4pro_signatoryTelephone.json';
import Data_5 from './json/ic4pro_signatoryIdentity.json';
import Data_6 from './json/ic4pro_signatoryPermit.json';
import Data_7 from './json/ic4pro_signatoryAddress.json';

import DataTable from './datatable';
import MainTable from './datatable/main';

import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';



const App = () => {
  
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

  }, [q])

  const [row, setRow] = useState([])
  console.log(row)
  
  const array = ["First Name", "Last Name", "Signatory"]

  function search(data) {
    var rows = row;
    // const newData2 = row.filter(x => x.LastName.toLowerCase().indexOf(q) > -1 )
    // const newData = row.filter( row => row.FirstName.toLowerCase().indexOf(q) > -1 )
    // console.log(newData2)
    const news = data.filter(x => x.CustomerId === rows.CustomerId)
    console.log(news)

    return news
  }

  return(
    <div className="Page">
          <div >
            <MainTable head='Customer - Individual' data={data} changeRow={ row => (setRow(row))} heading={array}/>
            <DataTable head='Account' data={search(data_2)} />
            <DataTable head='Signatory/ Directory' data={search(data_3)} />
                {/* <div className='parent'>
                <div className = "h-25 d-inline-block bg-info child" style = {{width: "25%"}}> */}
                <DataTable head='Phone' data={search(data_4)} />
                {/* </div> */}
                {/* <div className = "h-25 d-inline-block bg-info child" style = {{width: "25%"}}> */}
                <DataTable head='Identity' data={search(data_5)}  />
                {/* </div> */}
                {/* <div className = "h-25 d-inline-block bg-info child" style = {{width: "25%"}}> */}
                <DataTable head='Permit' data={search(data_6)} />
                {/* </div> */}
                {/* <div className = "h-25 d-inline-block bg-info child" style = {{width: "25%"}}> */}
                <DataTable head='Employer' data={search(data_7)} />
                {/* </div> */}
                
              {/* </div> */}
            </div>
    </div>
  )
}

export default App