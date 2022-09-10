import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './App.css';

const columns = [
  {
    name: "Title",
    selector: row => row.title,
  },
  {
    name: "URL",
    selector: row => row.url,
  },
  {
    name: "Prediction",
    selector: row => row.prediction,
    sortable: true,
  },
];

function App() {
  const [data, setData,] = useState([]);
  const [page, setPage] = useState(1);
  // const countPerPage = 10;

  const getUserList = () => {
    axios
      .get(
        `https://reactestapp.azurewebsites.net/multinomial_naive_data?page=${page}`
      )
      .then((res) => {
        setData(Object.values(res.data.data));
      })
      .catch((err) => {
        setData({});
      });
  };

  useEffect(() => {
    getUserList();
  }, [page]);

  return (
    <div className="App">
      <div className="container">
        <DataTable
          title="Multinomial Naive Bayes Data" 
          columns={columns}
          data={data}
          highlightOnHover
          pagination
          expandOnRowClicked={true}
          paginationServer
          paginationTotalRows={14827}
          paginationPerPage={10}
          paginationComponentOptions={{
            noRowsPerPage: true,
          }}
          onChangePage={(page) => setPage(page)}
        />
      </div>
    </div>
  );
}

export default App;