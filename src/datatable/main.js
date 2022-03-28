
import Table from 'react-bootstrap/Table';
import React from 'react';

export default function MainTable(props) {
    // let array = props.heading
    let data = props.data;
    const columns = data[0] && Object.keys(data[0])
    function format (data){
        return data.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase() }) 
    }
  return(<div style={{ backgroundColor: "#e9ecef"}} className="m-2"> 
    <h5 className='w-auto p-1'>  {props.head} </h5>
    <div>
        <Table responsive striped bordered hover size="sm"  cellPadding="0" cellSpacing="0">
        <thead>
            <tr className='m-0'>
                  {data[0] && columns.map( heading => <th key={heading.CustomerId}>{format(heading)} </th> )} 
                  {/* { array && array.map( heading => <th>{heading} </th>)} */}
             </tr>
        </thead>
        <tbody>
            {data.map(
                row => <tr>
                    {
                        columns.map(column =>
                       <td id='main-td'
                         onClick={() => (props.changeRow(row))}>{row[column]}
                       </td>)
                    }
                </tr>
            )}
        </tbody>
    </Table>
    </div>
  </div>
  )
  }