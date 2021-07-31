import React, { useState } from 'react'
import WHONETFileReader from './components/UploadFile'
import DataTable from './components/Table'
import './App.css';

function App() {
  const [csvData, setCsvData] = useState([])

  const handleSetCsvData = (data) => {
    setCsvData(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <WHONETFileReader handleSetCsvData={handleSetCsvData} />
          <p />
          <DataTable csvData={csvData}/>
        </div>
      </header>
    </div>
  );
}

export default App;
