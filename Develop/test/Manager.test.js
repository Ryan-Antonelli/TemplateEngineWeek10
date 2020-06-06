const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number using constructor ", () => {
  const testValue = 100;
  const e = new Manager("Samwise", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole function should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Samwise", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number using getOffice function", () => {
  const testValue = 100;
  const e = new Manager("Samwise", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
