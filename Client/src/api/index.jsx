import axios from "axios";


//  const URL = "https://ev-market-server.vercel.app"
const URL = "http://localhost:4000"

export const signData = async(data)=>{
    try {
        return await axios.post(`${URL}/admin/sign`, data)
    } catch (error) {
        console.log("Error :- " , error);
    }
}

export const loginData = async (data) => {
    try {
      const response = await axios.post(`${URL}/admin/login`, data);
      return response; 
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      throw error; 
    }
  };

export const addTwoData = async (data) =>{
  try {
    return await axios.post(`${URL}/admin/addTwoWheeler`,data)    
  } catch (error) {
    console.log("Error :- ", error)
  }
}

export const getTwoData = async () =>{
  try {
    return await axios.get(`${URL}/admin/getTwoWheeler`)    
  } catch (error) {
    console.log("Error : ", error)
  }
}


export const addBrand = async(data) =>{
  try {
    return await axios.post(`${URL}/admin/addBrand`,data)
  } catch (error) {
    console.log("Error : ", error)
  }
}

export const getBrand = async()=>{
  try {
    return await axios.get(`${URL}/admin/getBrand`);
  } catch (error) {
    console.log("Error : ", error)
  }
}