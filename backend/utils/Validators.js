class Validators {
    static isValidEmail(email) {
        const re = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        return email.match(re) !== null
    }
}

export default Validators