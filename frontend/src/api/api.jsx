import { Axios } from "./axios_config";

class API {
  constructor() {}
  /// cropDetailsQuery: CropDetailsQuery
  getCropDetails = async (cropDetailsQuery) => {
    Axios.get(`/crop/details${cropDetailsQuery.toQuery()}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
  };

  /// cropDetailsQuery: CropDetailsQuery
  getCropPreview = async (cropDetailsQuery) => {
    Axios.get(`/crop${cropDetailsQuery.toQuery()}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
  };
}

export default API;
