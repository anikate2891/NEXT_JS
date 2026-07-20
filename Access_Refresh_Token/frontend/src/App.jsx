import React from 'react'
import { axiosInstance } from './config/axios'

const App = () => {
  const getData = async () => {
    try {
      const response = await axiosInstance.get('/products');
      console.log('This is the response of UI:', response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div>
      <h1>Data Fetching App</h1>
      <button onClick={getData}>Fetch Data</button>
    </div>
  )
}

export default App
