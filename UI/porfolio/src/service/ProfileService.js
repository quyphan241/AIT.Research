import axios from 'axios';
// const baseUrl = "http://localhost:8080/informations/1"
const baseUrl = "http://192.168.144.122:8080/informations/1"

const profile = {};

profile.list = async () => {
  const res = await axios.get(baseUrl)
    .then(response => { return response.data })
    .catch(error => { return error; })
  return res;
}

profile.update = async (state) => {
  const datapost = {
    name: state.name,
    career: state.career,
    email: state.email,
    phoneNumber: state.phoneNumber,
    address: state.address,
    language: state.language,
    age: state.age,
    about: state.about,
    image: state.image
  }

  const res = await axios.put(baseUrl, datapost)
    .then(response => { return response.data })
    .catch(error => { return error.response })
  return res;
}

export default profile