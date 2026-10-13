import { test, expect } from "@playwright/test";

test.describe("make apt", () => {
  test.beforeEach("Login with valid creds", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page.locator("h1")).toContainText("CURA Healthcare Service");
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await page.getByLabel("Username").click();
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").click();
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("h2")).toContainText("Make Appointment");
  });

  //Test goes here
  test("make apt successfully", async ({ page }) => {
    await page
      .getByLabel("Facility")
      .selectOption("Hongkong CURA Healthcare Center");
    await page.getByText("Apply for hospital readmission").click();
    await page
      .getByRole("checkbox", { name: "Apply for hospital readmission" })
      .check();
    await page.getByText("Medicaid").click();
    await page.getByRole("radio", { name: "Medicaid" }).check();
    await page.locator(".input-group-addon").click();
    await page.getByRole("cell", { name: "30" }).nth(1).click();
    await page.getByRole("textbox", { name: "Comment" }).click();
    await page.getByRole("textbox", { name: "Comment" }).press("CapsLock");
    await page.getByRole("textbox", { name: "Comment" }).fill("C");
    await page.getByRole("textbox", { name: "Comment" }).press("CapsLock");
    await page.getByRole("textbox", { name: "Comment" }).fill("Comment");
    await page.getByRole("button", { name: "Book Appointment" }).click();
    await expect(page.locator("h2")).toContainText("Appointment Confirmation");
    await expect(
      page.getByRole("heading", { name: "Appointment Confirmation" }),
    ).toBeVisible();
  });

  //   test("make apt Failed", async ({ page }) => {
  //     await page
  //       .getByLabel("Facility")
  //       .selectOption("Hongkong CURA Healthcare Center");
  //     await page.getByText("Apply for hospital readmission").click();
  //     await page
  //       .getByRole("checkbox", { name: "Apply for hospital readmission" })
  //       .check();
  //     await page.getByText("Medicaid").click();
  //     await page.getByRole("radio", { name: "Medicaid" }).check();
  //     await page.locator(".input-group-addon").click();
  //     await page.getByRole("cell", { name: "30" }).nth(1).click();
  //     await page.getByRole("textbox", { name: "Comment" }).click();
  //     await page.getByRole("textbox", { name: "Comment" }).press("CapsLock");
  //     await page.getByRole("textbox", { name: "Comment" }).fill("C");
  //     await page.getByRole("textbox", { name: "Comment" }).press("CapsLock");
  //     await page.getByRole("textbox", { name: "Comment" }).fill("Comment");
  //     await page.getByRole("button", { name: "Book Appointment" }).click();
  //     await expect(page.locator("h2")).toContainText("Appointment Confirmation");
  //     await expect(
  //       page.getByRole("heading", { name: "Appointment Confirmation" }),
  //     ).toBeVisible();
  //   });
});
