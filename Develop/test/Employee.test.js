const Employee = require("../lib/Employee");

test("Can start Employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name using constructor", () => {
  const name = "Gandalf";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id using constructor", () => {
  const testValue = 100;
  const e = new Employee("Gandalf", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email using constructor", () => {
  const testValue = "test@test.com";
  const e = new Employee("Gandalf", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name using getName function", () => {
  const testValue = "Gandalf";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id using getId function", () => {
  const testValue = 100;
  const e = new Employee("Gandalf", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email using getEmail function", () => {
  const testValue = "test@test.com";
  const e = new Employee("Gandalf", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole function should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Gandalf", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
