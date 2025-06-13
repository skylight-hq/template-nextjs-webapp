import { test, expect } from "@playwright/test";
import { checkA11y, injectAxe } from "axe-playwright";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Home page loads", async ({ page }) => {
  await expect(page).toHaveTitle("NextJS Web Application Template");
});

test("a11y scan", async ({ page }) => {
  await injectAxe(page);
  await checkA11y(page);
});
