
import Table from 'react-bootstrap/Table'
import React from 'react'

export default function DataTable({ data, head}) {

    const columns = data[0] && Object.keys(data[0])
  return(<div style={{ backgroundColor: "#f0f0f0"}}> 
    <h5 className='w-auto p-3'>  {head} </h5>
    <div>
        <Table responsive striped hover size="sm" variant='dark' border={8} cellPadding="0" cellSpacing="0">
        <thead>
            <tr className='m-0'>  {data[0] && columns.map( heading => <th key={heading.CustomerId} className='w-auto p-1'>{heading.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase() }) }</th> )}  </tr>
        </thead>
        <tbody >
            {data.map(
                row => <tr key={row.CustomerId}>
                    {
                        columns.map(column => <td>{row[column]}</td>)
                    }
                </tr>
            )}
        </tbody>
    </Table>
    </div>
  </div>
  )
}
