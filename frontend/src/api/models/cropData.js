class CropData {
  description;
  images;
  name;
  constructor(description, images, name) {
    this.description = description;
    this.images = images;
    this.name = name;
  }
  static fromData(data) {
    return new CropData(
      data["data"][0]["description"],
      data["data"][0]["images"],
      data["name"]
    );
  }
}
export default CropData;
