import { test } from "@playwright/test";

test("", async ({ page }) => {
  // Navigate to https://www.youtube.com .
  await page.goto("https://www.youtube.com/");

  // pause the it for 3 seconds.
  await page.waitForTimeout(3000);

  let seachBox = page.locator("//input[@id='search']");

  // click the search box.
  await seachBox.click();

  // pause the it for 3 seconds.
  await page.waitForTimeout(3000);

  // enter "CYDEO" in the search box.
  await seachBox.fill("CYDEO");

  // press Enter key
  await seachBox.press("Enter");

  // pause the it for 3 seconds.
  await page.waitForTimeout(3000);

  let firstLink = page.locator(
    "//yt-formatted-string[contains(@aria-label, 'Free SDET Training Series')]"
  );

  await firstLink.click();

  // pause the it for 3 seconds.
  await page.waitForTimeout(3000);

  /*
<input id="search" autocapitalize="none" autocomplete="off" autocorrect="off" 
name="search_query" tabindex="0" type="text" spellcheck="false" 
placeholder="Search" aria-label="Search" role="combobox" aria-haspopup="false" 
aria-autocomplete="list" dir="ltr" class="ytd-searchbox" style="outline: none;"></input>
*/
});