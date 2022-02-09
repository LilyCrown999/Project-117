
import Data from './Data.json';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


function App() {

   const [data, setUserData] = useState([]);
   const [userSearchData, setUserSearchData] = useState([]);
   const [name, setName] = useState('');
   const [ val, setVal] = useState("")


   useEffect( () => {
     const data = Data;
     setUserData(data)
     setUserSearchData(data)
   },[])

   const handleSearch = ( ) => {
     if (val === "firstname"){
      const newData = data.filter(x => x.firstname === (name === "" ? x.firstname : name) )
      setUserSearchData(newData)
     } else{
      const newData = data.filter(x => x.lastname === (name === "" ? x.lastname : name) )
      setUserSearchData(newData)
     }

   }

  return (
             <div onLoad={() => ( setUserData(Data))}>
               <Table>
                 <tr>
                   <td>
                     <input className='form-control' type="text" placeholder='Enter your name ...' onChange={(e) => {setName(e.target.value)}} />
                   </td>
                   <td>
                     <select className='form-control' onChange={(e) => {setVal(e.target.value)}} >
                       <option selected disabled hidden >-Select -</option>
                       <option value="firstname">Firstname</option>
                       <option value="lastname" >Lastname</option>
                     </select>
                   </td>
                   <td>
                     <button className='btn btn-secondary' onClick={() => handleSearch()}> <i className='search'>  Search  </i></button>
                   </td>
                 </tr>
               </Table>
               <Table striped bordered hover size="sm">
                 <thead>
                   <tr>
                     <th> Id </th>
                     <th> First Name </th>
                     <th> Last Name </th>
                     <th> Status </th>
                     <th> Gender </th>
                   </tr>
                 </thead> 
                 <tbody>
                   {
                     userSearchData && userSearchData.length > 0 ?
                 userSearchData.map(user => (
                 <tr key={user.id}>
                   <td> {user.id} </td>
                   <td> {user.firstname} </td>
                   <td> {user.lastname} </td>
                   <td> {user.status} </td>
                   <td> {user.gender} </td>
                 </tr>
                 )): "No data" }
                 </tbody>
               </Table>
             </div>
  )
}

export default App;
