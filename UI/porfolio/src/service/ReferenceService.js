import axios from 'axios';
const baseUrl = "http://192.168.144.122:8080/references"
// const baseUrl = "http://localhost:8080/references"


const reference = {};

reference.list = async () => {
  const res = await axios.get(baseUrl)
    .then(response => { return response.data })
    .catch(error => { return error; })
  return res;
}

reference.get = async (id) => {
  const urlGet = baseUrl + "/" + id
  const res = await axios.get(urlGet)
    .then(response => { return response.data })
    .catch(error => { return error; })
  return res;
}

reference.update = async (state, id) => {
  const urlPut = baseUrl + "/" + id
  const datapost = {
    company: state.company,
    name: state.name,
    description: state.description,
    image: state.image,
    position: state.position
  }
  const res = await axios.put(urlPut, datapost)
    .then(response => { return response.data })
    .catch(error => { return error.response })
  return res;
}

reference.create = async (state) => {
  const datapost = {
    company: state.company,
    name: state.name,
    description: state.description,
    image: state.image,
    position: state.position
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

reference.delete = async (id) => {
  const urlDelete = baseUrl + "/delete/" + id
  const res = await axios.delete(urlDelete)
    .then(response => { return response.data })
    .catch(error => { return error })
  return res;
}

export default reference