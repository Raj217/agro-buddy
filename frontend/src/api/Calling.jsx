class MultipleAPI {
    constructor() { }
    async makeMultipleAPICalls() {
        const getCropDetailsOne = (cropDetails, token) =>
            API.get(`/crop?name=${cropDetails}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: localStorage.getItem("token")
                }
            });
        const getCropDetailsTwo = (cropDetails, token) =>
            API.get(`/crop/details?name=${cropDetails}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: localStorage.getItem("token")
                }
            });
        const results = await Promise.all([
            getCropDetailsOne,
            getCropDetailsTwo
        ]);
        return results;
    }
}

export default MultipleAPI;

// const h = new MultipleAPI();
// console.log(h.makeMultipleAPICalls().then(res => console.log("res", res)));