import axios from "axios";
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./css/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function UserGridComponent2() {
  const [rowData, setRowData] = useState([]);
  const [, setGridApi] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/associates");
      const data = await response.data;
      console.log(response.data);
      setRowData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const columnDefs = [
    { headerName: "ID", field: "associateIds" },
    { headerName: "LOGIN/REGISTER PERMISSION", field: "hasPermission" },
    // Add more column definitions as needed
  ];

  const defaultColDef = {
    filter: true, // Enable filtering by default
    sortable: true, // Enable sorting by default
    flex: 1,
    minWidth: 150,
  };

  return (
    <>
      <div className="mb-3">
        <h3>List of Associate IDs</h3>
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: "500px", width: "100%" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          quickFilterText={""} // Enable quick filter
        />
      </div>
    </>
  );
}

export default UserGridComponent2;
