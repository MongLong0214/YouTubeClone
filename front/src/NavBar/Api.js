import axios from "axios";

const backendPortNumber = "5001";
const serverUrl =
  "http://" + window.location.hostname + ":" + backendPortNumber + "/";


const get = async(endpoint, params= "") => {
  console.log(
    `%cGet 요청 ${serverUrl + endpoint + "/" + params}`,
    "color: #a25cd1;"
  );
  
  return axios.get(serverUrl + endpoint + "/" + params)

}

export {get}