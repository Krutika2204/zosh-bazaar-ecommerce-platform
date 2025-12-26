import axios from 'axios';

// Keep the local URL for reference, but it's not used below
export const API_URL = "http://localhost:5454"; 

// This is the correct, live backend URL
export const DEPLOYED_URL = "https://ecommerce-server-kdpt.onrender.com"; 

// The 'api' instance must use the DEPLOYED_URL
export const api = axios.create({
  baseURL: DEPLOYED_URL, // <<< CHANGE IS HERE
  headers: {
    'Content-Type': 'application/json',
  },
});