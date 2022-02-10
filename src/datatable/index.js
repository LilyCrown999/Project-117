
import Table from 'react-bootstrap/Table'
import React from 'react'

export default function DataTable({ data }) {
    const columns = data[0] && Object.keys(data[0])
  return <Table striped bordered hover size="sm">
      <thead>
          <tr> {data[0] && columns.map( heading => <th>{heading}</th> )} </tr>
      </thead>
      <tbody>
          {data.map(
              row => <tr>
                  {
                      columns.map(column => <td>{row[column]}</td>)
                  }
              </tr>
          )}
      </tbody>
  </Table>
}
