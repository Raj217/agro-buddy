import { Axios } from "./axios_config";

class API {
  /// cropDetailsQuery: CropDetailsQuery
  getCropDetails = async (cropDetailsQuery) =>
    Axios.get(`/crop/details${cropDetailsQuery.toQuery()}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });

  /// cropDetailsQuery: CropDetailsQuery
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
