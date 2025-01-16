// const{test} = require("@playwright/test")

import { test } from "@playwright/test";
// either of the above work to import test
// the second is a bit better because in almost every other programming langauage 'import' is used.

test("Simple Google search @google", async ({ page }) => {
  await page.goto("https://www.google.com/");
  let searchBox = page.locator("//textarea[@class ='gLFyf']");

  await page.waitForTimeout(3000);

  // await searchBox.type("Playwright Automation");
  await searchBox.fill("Playwright Automation");
  await page.waitForTimeout(3000);
  /*
The difference between .type() and .fill() is that type actually types each character and fill literally fills in the element, and is therefore faster.
*/
  await searchBox.press("Enter");
  await page.waitForTimeout(3000);
});

/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" 
title="Search" value="" jsaction="paste:puy29d;" aria-label="Search" 
placeholder="" aria-autocomplete="both" aria-expanded="false" 
aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" 
id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" 
spellcheck="false" data-ved="0ahUKEwjxg7yEmYeKAxWNFjQIHdDQJ8cQ39UDCAc" style="" 
aria-activedescendant=""></textarea>

//*[@id="APjFqb"]
*/

test("Simple Youtube search test @youtube01", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
});
