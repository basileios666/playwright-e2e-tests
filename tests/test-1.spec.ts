import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await expect(page.locator("h1")).toContainText("CURA Healthcare Service");
  await expect(page.locator("h3")).toContainText("We Care About Your Health");
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await page.getByLabel("Username").click();
  await page.getByLabel("Username").fill("John Doe");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("ThisIsNotAPassword");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.locator("h2")).toContainText("Make Appointment");
});