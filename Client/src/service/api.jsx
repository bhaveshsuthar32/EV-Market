import axios from "axios";

const URL = "https://ev-market-server.vercel.app"

export const signData = async(data)=>{
    try {
        return await axios.post(`${URL}/Admin/sign`, data)
    } catch (error) {
        console.log("Error :- " , error);
    }
}

export const loginData = async (data) => {
    try {
      const response = await axios.post(`${URL}/Admin/login`, data);
      return response; 
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      throw error; 
    }
  };

