const Engineer = require("../lib/Engineer");

test("github created.", () => {
    const testGithub = "Ryan";
     const employeeHere = new Engineer("Ryan", 5, "ryan@gmail.com", testGithub);
     expect(employeeHere.github).toBe(testGithub);
});

test("GitHub has been retrieved", () => {
    const testGithub = "Ryan";
    const employeeHere = new Engineer("Ryan", 5, "ryan@gmail.com", testGithub);
    expect(employeeHere.getGithub()).toBe(testGithub);
});

test("role call.", () => {
    const returnValue = "Engineer";
    const employeeHere = new Engineer("Ryan", 5, "ryan@gmail.com", testGithub);
    expect(employeeHere.getRole()).toBe(returnValue);
});