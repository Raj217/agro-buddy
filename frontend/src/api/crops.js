import API from './api'

export const register = (cropDetails, user) => API.post('/register', cropDetails, user);

export const getCropDetails = (cropDetails, user) => API.get('/get', cropDetails, user);

export const updateCropDetails = (cropDetails, user) => API.put('/update-details', cropDetails, user);

export const deleteCropDetails = (cropDetails, user) => API.delete('/delete', cropDetails, user);

export const updateCrop = (crop, user) => API.put('/update', crop, user);