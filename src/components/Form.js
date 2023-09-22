import React, { useState, useEffect } from "react";
import getCoordinates from "./GeoCoding";
import MapComponent from "./MapComponent";

function Form() {
  const [dataReady, setDataReady] = useState(false);
  // Define state variables for form input and table data
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    country: ""
  });
  const [tableData, setTableData] = useState([]);
  console.log(formData)
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  const coordinates = await getCoordinates(
    `${formData.city}, ${formData.state}, ${formData.country}`
  );

  if (coordinates) {
    setTableData([...tableData, { ...formData, coordinates }]);
  } else {
    // Handle location not found
    alert('Location not found. Please check the entered details.');
  }
  // Clear the form inputs after submission
  setFormData({
    name: '',
    city: '',
    state: '',
    country: '',
  });
};




  return (
    <div>
      <h1>Form and Table</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
      <table style={{width:"100%"}}> 
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th style={{width:"40%"}}>View on Maps</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index+1}>
              <td>{data.name}</td>
              <td>{data.city}</td>
              <td>{data.state}</td>
              <td>{data.country}</td>
              <td key={data.city}>
                
              <MapComponent
            
                key={`${data.city}-${index}`} 
                  center={{
                    lat: data.coordinates.latitude,
                    lng: data.coordinates.longitude,
                  }}
                  zoom={10}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form;
