const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Aragorn", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole function should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Aragorn", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username using getGithub function", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Aragorn", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
