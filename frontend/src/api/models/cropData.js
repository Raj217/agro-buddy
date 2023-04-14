class CropData {
    description; images; name;
    constructor(description, images, name) {
        this.description = description;
        this.images = images;
        this.name = name;

    }
    static fromData(data) {
        return new CropData(
            data['description'], data['images'], data['name']
        );
    }
}
export default CropData;