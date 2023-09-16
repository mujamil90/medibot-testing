
import { expect, test as base } from "@playwright/test";
import {cases} from "./data"
import {addressValidator} from "./validators"


const test = base.extend({
    page: async ({ baseURL, page }, use) => {
      baseURL && (await page.goto(baseURL));
      await use(page);
    },
  });
 
/* 
This is sample test cases to validate addresse we are reading from csv file.
 */
  for (const testCase of cases) {
    test(testCase.TestCase, async ({ page }) => {    
      console.log(addressValidator(testCase.Address));
      expect(addressValidator(testCase.Address)).toBeTruthy()
    });
  }


  