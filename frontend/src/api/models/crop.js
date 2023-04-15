import CropData from "./cropData";
import CropDetail from "./cropDetail";

class Crop {
  data;
  details = [];
  preview;
  constructor(cropData, details) {
    this.data = cropData; // images and all
    this.details = details; // List<CropDetail>
  }

  readDetails = (data) => {
    if (!this.details) this.details = [];
    for (let i = 0; i < data.length; i++) {
      this.details.push(CropDetail.fromData(data[i]));
    }
  };
  readData = (data) => {
    this.data = CropData.fromData(data);
  };

  readPreview = (data) => {
    this.preview = CropDetail.fromData(data);
  };
  setName = (name) => {
    this.data.name = name;
  };
}

export default Crop;
