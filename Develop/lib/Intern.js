// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, education) {
    //inherited from Employee
    super(name, id, email);
    this.education = education;
  }

  getSchool() {
    console.log(`school: ${this.education}`);
    return this.education;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;