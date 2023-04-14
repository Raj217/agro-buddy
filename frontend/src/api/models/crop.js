import CropData from './cropData';
import CropDetail from './cropDetail';

class Crop {
    cropData;
    cropDetails = [];
    constructor(cropData, details) {
        this.cropData = cropData; // images and all
        this.cropDetails = details; // List<CropDetail> 
    }

    readDetails = (data) => {
        if (!this.cropDetails) this.cropDetails = [];
        for (let i = 0; i < data.length; i++) {
            this.cropDetails.push(CropDetail.fromData(data[i]));
        }
    }
    readData = (data) => {
        this.cropData = CropData.fromData(data);
    }
}

export default Crop;