import {test} from "@playwright/test";

test.describe("User Story01 @user01", async() =>{

    //create beforeAll.
      test.beforeAll(async () => {
       console.log("beforeAll function executed");
      });

      // create afterAll.
        test.afterAll(async () => {
        console.log("afterAll function executed");
      });

      // create beforeEach.
        test.beforeEach(async ({page}) => {
        console.log("beforeEach function executed");
      });

      // create afterEach.
        test.afterEach(async ({page}) => {
        console.log("afterEach function executed");
      });

    test("Test Case01", async({page}) =>{
        console.log("Test case 01 is expected");
    });

    test("Test Case02", async({page}) =>{
        console.log("Test case 02 is expected");

    });

    test("Test Case03", async({page}) =>{
        console.log("Test Case 03 is expected");
    });

});





