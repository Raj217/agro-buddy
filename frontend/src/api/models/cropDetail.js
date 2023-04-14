class CropDetail {
    nitrogen; phosphorus; potassium;; temperature; humidity; pH; rainfall;
    constructor(nitrogen, phosphorus, potassium, temperature, humidity, pH, rainfall) {
        this.nitrogen = nitrogen;
        this.phosphorus = phosphorus;
        this.potassium = potassium;
        this.temperature = temperature;
        this.humidity = humidity;
        this.pH = pH;
        this.rainfall = rainfall;
    }

    static fromData(cropDetails) {
        return new CropDetail(
            cropDetails['nitrogen'], cropDetails['phosphorus'], cropDetails['potassium'], cropDetails['temperature'], cropDetails['humidity'], cropDetails['pH'], cropDetails['rainfall']
        );
    }
}
export default CropDetail;