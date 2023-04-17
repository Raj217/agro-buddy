import { Axios } from "./axios_config";

class API {
  getCropDetails = async (cropDetailsQuery) =>
    Axios.get(`/crop/details${cropDetailsQuery.toQuery()}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });

  getCropPreview = async (cropDetailsQuery) =>
    Axios.get(`/crop${cropDetailsQuery.toQuery()}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });

  getparamRanges = async () =>
    Axios.get('/crop/params-range', {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      }
    })
}

export default API;
