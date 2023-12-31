import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'; // Import all functions and objects from xlsx
import { Api_connect_server } from '../../../APIs/Api_connect_server';
import { useNavigate } from "react-router-dom";

function ArtisanDashboardTable(props) {
  const artisanId = localStorage.getItem('artisanId');
  const navigate = useNavigate();

  const handleNavigate=()=>{
  navigate("/auth/artisan/dashboard/home/service-platform");

  } 

  const api_connect = Api_connect_server();

  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    completed: [],
    pending: [],
    cancelled: [],
  });

  const [allServices, setallServices] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [totalComplete, settotalComplete] = useState(0);
  const [totalPending, settotalPending] = useState(0);
  const [totalCancelled, settotalCancelled] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const completedResponse = await api_connect.get('/auth/fetch-bookings-completed-artisan/'+artisanId);
        const pendingResponse = await api_connect.get('/auth/fetch-bookings-pending-artisan/'+artisanId);
        const cancelledResponse = await api_connect.get('/auth/fetch-bookings-cancelled-artisan/'+artisanId);
        const allResponse = await api_connect.get('/auth/fetch-bookings-all-artisan/'+artisanId);
        
        setallServices(allResponse.data.length)
        settotalCancelled(cancelledResponse.data.length);
        settotalPending(pendingResponse.data.length);
        settotalComplete(completedResponse.data.length);

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

    if (data && category && Array.isArray(data[category]) && data[category]) {
      return data[category].filter((item) =>
        // item.type.toLowerCase().includes(searchText.toLowerCase()) &&
        (startDate === '' || item.created_at >= startDate) && // Filter by start date
        (endDate === '' || item.created_at <= endDate) // Filter by end date
      );
    } else {

      return null;
    }




  };

  //consert table to xlsx data
  const exportToExcel = () => {
    const tableid = document.getElementById('myTable');
    const ws = XLSX.utils.table_to_sheet(tableid);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'MY TRANSACTION HISTORY.xlsx');
  };
  return (
    <div className='service-table'>

      <h1>ARTISAN DASHBOARD</h1>
      <div className="tab-buttons">

        <button
          className={activeTab === 0 ? 'active' : ''}
          onClick={() => setActiveTab(0)}
        >
          Completed <span className="total-tag">{totalComplete}</span>
        </button>
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => setActiveTab(1)}
        >
          Pending <span className="total-tag">{totalPending}</span>
        </button>
        <button
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => setActiveTab(2)}
        >
          Cancelled <span className="total-tag">{totalCancelled}</span>
        </button>

        <div className='export-btn'>
          <button onClick={handleNavigate} className="link-export-data-artisan" >
          <span>My Services</span>  <span className="total-tag">{allServices}</span> 
          </button>

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
       <div className="filter-container">
      <div className='date-filter'>
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
      <i className="fas fa-refresh ref-button"
      title="Refresh Table" onClick={()=>{window.location.href=''}} > </i>
      </div>
     
      </div>

      <h2>
        {activeTab === 0
          ? 'Completed Bookings'
          : activeTab === 1
            ? 'Pending Bookings'
            : 'Cancelled Bookings'}
      </h2>
      <table className="data-table" id="myTable">
        <thead>
          <tr>
            <th>Type</th>
            <th>Charge</th>
            <th>Loc</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {getCategoryData(activeTab === 0 ? 'completed' : activeTab === 1 ? 'pending' : 'cancelled').map(
            (item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.charge}</td>
                <td>{item.location}</td>
                <td>{item.created_at}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ArtisanDashboardTable;
