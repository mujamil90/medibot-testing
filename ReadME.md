# Medibot voice call testing concept




**This repositoru is presenting an idea to test voice call based medibot. The whole idea is using polling library Pollinator that poll/invoke any function called polling function with on given interval until a condition met. It can be run for infinite time if you keep condition as false. A polling function can be a function to invoke an endpoint i.e. API call, or reading data from GUI/Web app or connecting a DB and execute a query to fetch data. As we do not have any Medibot or GUI or a DB so we have using Medibot data randomly as Medication and Address and validating them with help of polling**

### Tools and Technology used
 - Designed and Written in **Java Script**
 - API and web app automation with **Playwright**
 - Fetching data from DB with **Mssql**
 - Test framework used **Jest**
 - Voice call API used **Telnyx**
 - Polling library **Pollinator**
 - Assertion Library **Chai**
 - Soft assertion wrapper **soft-assert**
 - Test data source file type **CSV** 
 - Fetching test data with **csv-parse** 
 - Create an issue with API from **github**

 


### Platform Support
 - Windows
 - Linux
 - Macintosh

---
### Reporting
 - Playwright Report
 
---
### Usage

- $ node e2e/polling.js

---
