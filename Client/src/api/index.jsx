import axios from "axios";


 const URL = "https://ev-market-server.vercel.app"
// const URL = "http://localhost:4000"

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

export const getTwoDataById = async (id) =>{
  try {
    return await axios.get(`${URL}/admin/getTwoById/${id}`)    
  } catch (error) {
    console.log("Error : ", error)
  }
}
 
export const deleteTwoWheeler = async (id) => {
  try {
    const response = await axios.delete(`${URL}/admin/deleteTwoWheeler/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

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


export const addStartUps = async (data) =>{
  try {
    return await axios.post(`${URL}/admin/addStartUps`,data);
  } catch (error) {
    console.log("Error : ",error);
  }
}


export const getStartUps = async () =>{
  try {
    return await axios.get(`${URL}/admin/getStartUps`);
  } catch (error) {
    console.log("Error : ", error);
  }
}

export const getBikeData = async () =>{
  try {
    return await axios.get(`${URL}/getBikeData`);
  } catch (error) {
    console.log("Error : ", error);
  }
}

export const getBikeUpcoming = async () =>{
  try {
    return await axios.get(`${URL}/getBikeUpcoming`);
  } catch (error) {
    console.log("Error : ", error);
  }
}

export const getBikeUsed = async () =>{
  try {
    return await axios.get(`${URL}/getBikeUsed`);
  } catch (error) {
    console.log("Error : ", error);
  }
}

export const getScooterData = async () =>{
  try {
    return await axios.get(`${URL}/getScooterData`);
  } catch (error) {
    console.log("Error : ", error);
  }
}

export const getScooterUpcoming = async () =>{
  try {
    return await axios.get(`${URL}/getScooterUpcoming`);
  } catch (error) {
    console.log("Error : ", error);
  }
}

export const getScooterUsed = async () =>{
  try {
    return await axios.get(`${URL}/getScooterUsed`);
  } catch (error) {
    console.log("Error : ", error);
  }
}



// three wheeler :-

export const addThreeData = async (data) =>{
  try {
    return await axios.post(`${URL}/admin/addThreeWheeler`,data)    
  } catch (error) {
    console.log("Error :- ", error)
  }
}


export const getThreeData = async () =>{
  try {
    return await axios.get(`${URL}/admin/getThreeWheeler`)    
  } catch (error) {
    console.log("Error : ", error)
  }
}

export const getThreeDataById = async (id) =>{
  try {
    return await axios.get(`${URL}/admin/getThreeById/${id}`)    
  } catch (error) {
    console.log("Error : ", error)
  }
}
  
export const deleteThreeWheeler = async (id) => {
  try {
    const response = await axios.delete(`${URL}/admin/deleteThreeWheeler/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};


export const getRickshawData = async () =>{
  try {
    return await axios.get(`${URL}/getRickshawData`);
  } catch (error) {
    console.log("Error : ", error);
  }
}

export const getRickshawUpcoming = async () =>{
  try {
    return await axios.get(`${URL}/getRickshawUpcoming`);
  } catch (error) {
    console.log("Error : ", error);
  }
}

export const getRickshawUsed = async () =>{
  try {
    return await axios.get(`${URL}/getRickshawUsed`);
  } catch (error) {
    console.log("Error : ", error);
  }
}



// Four Wheeler :-

export const addFourData = async (data) =>{
  try {
    return await axios.post(`${URL}/admin/addFourWheeler`,data)    
  } catch (error) {
    console.log("Error :- ", error)
  }
}

export const getFourData = async () =>{
  try {
    return await axios.get(`${URL}/admin/getFourWheeler`)    
  } catch (error) {
    console.log("Error : ", error)
  }
}

export const getFourDataById = async (id) =>{
  try {
    return await axios.get(`${URL}/admin/getFourById/${id}`)    
  } catch (error) {
    console.log("Error : ", error)
  }
}

 
export const deleteFourWheeler = async (id) => {
  try {
    const response = await axios.delete(`${URL}/admin/deleteFourWheeler/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};


export const getCarData = async () =>{
  try {
    return await axios.get(`${URL}/getCarData`);
  } catch (error) {
    console.log("Error : ", error);
  }
}

export const getCarUpcoming = async () =>{
  try {
    return await axios.get(`${URL}/getCarUpcoming`);
  } catch (error) {
    console.log("Error : ", error);
  }
}

export const getCarUsed = async () =>{
  try {
    return await axios.get(`${URL}/getCarUsed`);
  } catch (error) {
    console.log("Error : ", error);
  }
}


export const deleteBrand = async (id) => {
  try {
    const response = await axios.delete(`${URL}/admin/deleteBrand/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};


export const deleteStartUps = async (id) => {
  try {
    const response = await axios.delete(`${URL}/admin/deleteStartUps/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

