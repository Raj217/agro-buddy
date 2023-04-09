import API from './api'

export const register = (cropDetails, user) => API.post('/crop', cropDetails, user);
export const getCropDetails = (cropDetails, token) => API.get(`/crop?name=${cropDetails}`, {
    headers: { "Content-Type": "application/json", "authorization": localStorage.getItem("token") }

});

export const updateCropDetails = (cropDetails, user) => API.put('/crop', cropDetails, user);

export const deleteCropDetails = (cropDetails, user) => API.delete('/crop', cropDetails, user);

export const updateCrop = (crop, user) => API.put('/crop/update', crop, user);