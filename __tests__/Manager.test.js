const Manager = require("../lib/Manager");

test("Office number created", () => {
    const testOfficeNumber = 5;
    const employeeHere = new Manager("Ryan", 5, "ryan@gmail.com", testOfficeNumber);
    expect(employeeHere.officeNumber).toBe(testOfficeNumber);
});

test("OfficeNumber is returned", () => {
    const testOfficeNumber = 5;
    const employeeHere = new Manager("Ryan", 5, "ryan@gmail.com", testOfficeNumber);
    expect(employeeHere.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Role selected", () => {
    const returnValue = "Manager";
    const employeeHere = new Manager("Ryan", 5, "ryan@gmail.com", 5);
    expect(employeeHere.getRole()).toBe(returnValue);
});