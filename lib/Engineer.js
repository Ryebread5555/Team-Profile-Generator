//import Employee constructor
const Employee = require('./Employee');

// create constructor with super to extend employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    };

    getGithub () {
        return this.github;
    };

    getRole () {
        return 'Engineer';
    };
};

module.exports = Engineer;