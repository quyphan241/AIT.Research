import axios from 'axios';
const baseUrl = "http://192.168.144.122:8080/skills"
// const baseUrl = "http://localhost:8080/skills"


const skill = {};

skill.list = async () => {
  const res = await axios.get(baseUrl)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

skill.get = async (id) => {
  const urlGet = baseUrl + "/" + id
  const res = await axios.get(urlGet)
    .then(response => { return response.data })
    .catch(error => { return error; })
  return res;
}

skill.update = async (state, id) => {
  const urlPut = baseUrl + "/" + id
  const datapost = {
    name: state.name,
    proficiency: state.proficiency,
  }
  const res = await axios.put(urlPut, datapost)
    .then(response => { return response.data })
    .catch(error => { return error.response })
  return res;
}

skill.create = async (state) => {
  const datapost = {
    name: state.name,
    proficiency: state.proficiency,
  }
  const urlPost = baseUrl + "/"
  const res = await axios.post(urlPost, datapost)
    .then(response => {
      const data = { success: true, message: response.data }
      return data;
    })
    .catch(error => {
      const data = { success: false, message: error.response.data }
      return data;
    })
  return res;
}

skill.delete = async (id) => {
  const urlDelete = baseUrl + "/delete/" + id
  const res = await axios.delete(urlDelete)
    .then(response => { return response.data })
    .catch(error => { return error })
  return res;
}

export default skill