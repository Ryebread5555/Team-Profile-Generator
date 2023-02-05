//import Employee constructor
const Employee = require('./Employee');

// create constructor with super to extend employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    };

    getSchool () {
        return this.school;
    };

    getRole () {
        return 'Intern';
    };
};

module.exports = Intern;