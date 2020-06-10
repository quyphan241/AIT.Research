import axios from 'axios';
// const baseUrl = "http://localhost:8080/informations/1"
const baseUrl = "http://192.168.144.122:8080/informations/1"

const profile = {};

profile.list = async () => {
  const res = await axios.get(baseUrl)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

export default profile