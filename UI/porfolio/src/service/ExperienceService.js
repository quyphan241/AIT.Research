import axios from "axios";
// const baseUrl = "http://localhost:8080/workExperiences"
const baseUrl = "http://192.168.144.122:8080/workExperiences"
const experience = {};

experience.list = async () => {
  const res = await axios.get(baseUrl)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

experience.get = async (id) => {
  const urlGet = baseUrl+"/"+id
  const res = await axios.get(urlGet)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

experience.update = async (state, id) => {
  const urlPut = baseUrl+"/"+id
  const datapost = {
    position: state.position,
    period: state.period,
    description: state.description,
    company: state.company,
  }


  const res = await axios.put(urlPut, datapost)
    .then(response => { return response.data })
    .catch(error => { return error.response })
  return res;
}

experience.create = async (state) => {

  const datapost = {
   position: state.position,
  period: state.period,
  description: state.description,
  company: state.company
  }

  const urlPost = baseUrl+"/"

  const res = await axios.post(urlPost,datapost)
  .then(response=>{
    const data = { success: true, message: response.data }
    return data;
  })
  .catch(error=>{
    const data = { success: false, message: error.response.data }
    return data;
  })

  return res;
}


export default experience