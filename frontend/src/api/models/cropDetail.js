class CropDetail {
    nitrogen; phosphorous; potassium;; temperature; humidity; pH; rainfall;
    constructor(nitrogen, phosphorous, potassium, temperature, humidity, pH, rainfall) {
        this.nitrogen = nitrogen;
        this.phosphorous = phosphorous;
        this.potassium = potassium;
        this.temperature = temperature;
        this.humidity = humidity;
        this.pH = pH;
        this.rainfall = rainfall;
    }

    static fromData(cropDetails) {
        return new CropDetail(
            cropDetails['nitrogen'], cropDetails['phosphorous'], cropDetails['potassium'], cropDetails['temperature'], cropDetails['humidity'], cropDetails['pH'], cropDetails['rainfall']
        );
    }
}
export default CropDetail;