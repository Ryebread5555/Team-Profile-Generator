const Intern = require("../lib/Intern");

test("School created", () => {
    const testSchool = "School Name";
    const employeeHere = new Intern("Ryan", 5, "Northwestern");
    expect(employeeHere.school).toBe(testSchool);
});

test("officeNumber is printed", () => {
    const testSchool = "School Name";
    const employeeHere = new Intern("Ryan", 5, "Northwestern");
    expect(employeeHere.getSchool()).toBe(testSchool);
});

test("Role selected", () => {
    const returnValue = "Intern";
    const employeeHere = new Intern("Ryan", 5, "Northwestern");
    expect(employeeHere.getRole()).toBe(returnValue);
});