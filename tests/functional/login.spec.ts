import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
  test.beforeEach("Go to the Login Page", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page.locator("h1")).toContainText("CURA Healthcare Service");
    await page.getByRole("link", { name: "Make Appointment" }).click();
  });

  //Test goes here
  test("Login Successfully", async ({ page }) => {
    await page.getByLabel("Username").click();
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").click();
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("h2")).toContainText("Make Appointment");
  });

  test("Login Failed", async ({ page }) => {
    await page.getByLabel("Username").click();
    await page.getByLabel("Username").fill("John");
    await page.getByLabel("Password").click();
    await page.getByLabel("Password").fill("ThisIsassword");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });
});
