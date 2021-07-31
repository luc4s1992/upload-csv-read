import React from 'react'
import { Table } from 'react-bootstrap'

export default function DataTable({csvData}) {
  console.log(csvData);
  return(
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Varaible</th>
          <th>Breakdown</th>
          <th>Breakdown_category</th>
          <th>Year</th>
          <th>RD_Value</th>
          <th>Units</th>
          <th>Foot_notes</th>
        </tr>
      </thead>
      <tbody>
        {csvData[0] && 
          csvData.map((val, key) => (
            <tr key={key}>
              <td>{val.Variable}</td>
              <td>{val.Breakdown}</td>
              <td>{val.Breakdown_category}</td>
              <td>{val.Year}</td>
              <td>{val.RD_Value}</td>
              <td>{val.Units}</td>
              <td>{val.Footnotes}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}