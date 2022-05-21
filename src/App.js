import logo from "./logo.svg";
import "./App.css";
import { useTable } from "react-table";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {


  const [data,setData]=useState([])

useEffect(()=>{
(async()=>{

  let po=await axios('https://api.tvmaze.com/search/shows?q=snow');
  setData(po.data)
  console.log(po.data);
  
})();

},[])

  const columns = useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "show.id", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "show.name",
      },
      {
        Header: "url",
        accessor: "show.url", // accessor is the "key" in the data
      },
      {
        Header: "type",
        accessor:"show.type",
      },
      {
        Header: "type",
        accessor:"show.language",
        
      },
      {
        Header: "type",
        accessor:"show.image.medium"
       
      }
 
 
    ],
    []
  );
  /*const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );*/
  const tableInstanceObject = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstanceObject;
  return (
    <div className="App">
  
      <table {...getTableProps()} style={{ backgroundColor: "green" }}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                        
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
