import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'; // Import all functions and objects from xlsx
import {Api_connect_server} from '../../../APIs/Api_connect_server';

function ArtisanDashboardTable(props) {

  const api_connect =  Api_connect_server();

  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    completed: [],
    pending: [],
    cancelled: [],
  });
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const completedResponse = await api_connect.get('/auth/fetch-services-completed-artisan/wqeq');
        const pendingResponse = await api_connect.get('/auth/fetch-services-pending-artisan/qqwqw');
        const cancelledResponse = await api_connect.get('/auth/fetch-services-cancelled-artisan/qwwqw');

        setData({
          completed: completedResponse.data,
          pending: pendingResponse.data,
          cancelled: cancelledResponse.data,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [api_connect]);

  const getCategoryData = (category) => {

      if(data){
    return data[category].filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (startDate === '' || item.date >= startDate) && // Filter by start date
      (endDate === '' || item.date <= endDate) // Filter by end date
    );
      }else{

        return null;
      }




  };

  //consert table to xlsx data
  const exportToExcel = () => {
    const tableid = document.getElementById('myTable');
    const ws = XLSX.utils.table_to_sheet(tableid);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ARTISANS HISTORY.xlsx');
  };
  return (
    <div className='service-table'>
      <div className="tab-buttons">

        <button
          className={activeTab === 0 ? 'active' : ''}
          onClick={() => setActiveTab(0)}
        >
          Completed
        </button>
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => setActiveTab(1)}
        >
          Pending
        </button>
        <button
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => setActiveTab(2)}
        >
          Cancelled
        </button>
        
        <div className='export-btn'>
        
        <button onClick={exportToExcel} className="link-export-data-artisan" >
           <span>Export</span>   <i className="fa fa-download" title="export data"></i> 
        </button>
        </div>
      </div>


      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className='platformTableSearch'
      />

      <div  className='date-filter'>
              <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        placeholder="Start Date"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="End Date"
      />
      </div>

      <h2>
        {activeTab === 0
          ? 'Completed Services'
          : activeTab === 1
          ? 'Pending Services'
          : 'Cancelled Services'}
      </h2>
      <table className="data-table" id="myTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {getCategoryData(activeTab === 0 ? 'completed' : activeTab === 1 ? 'pending' : 'cancelled').map(
            (item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.date}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ArtisanDashboardTable;
