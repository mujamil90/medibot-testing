import { endpoint, username_field, password_field, login_button } from "../config.json";


/*
 
This is the the class responsible to get Medication and address from Web-app using playwright.

 */
class Dashboard {

    constructor(page) {
      this.page = page;
    }

    async navigate() {
      await this.page.goto("/");
    }
    

    async getMedication(){
        return this.page.locator(".medication").textContent();
    }

    async getAddress(){
        return this.page.locator(".address").textContent();
    }

  }
  export default { Dashboard };