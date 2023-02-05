//import Employee constructor
const Employee = require('./Employee');

// create constructor with super to extend employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber(){
        return this.officeNumber
    }

    getRole () {
        return 'Manager';
    };
};

module.exports = Manager;