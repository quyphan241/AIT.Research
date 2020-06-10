import axios from 'axios';
const baseUrl = "http://192.168.144.122:8080/references"

const reference = {};

reference.list = async () => {
  const res = await axios.get(baseUrl)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

export default reference