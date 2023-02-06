// use the employee constructor
const Employee = require('../lib/Employee');

test("Create a new employee.", () => {
    const employee = new Employee('Ryan', 5555, 'ryan@gmail.com');

    expect(employee.name).toBe("Ryan");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('test all methods for the Employee class', () => {
    const employee = new Employee('Ryan', 5555, 'ryan@gmail.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
});