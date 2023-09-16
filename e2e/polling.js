import Pollinator from 'pollinator'
import {cases} from './data.js'
import  { proxy } from "@alfonso-presa/soft-assert";
import { expect }from "chai";
import {addressValidator} from './validators.js'
const softExpect = proxy(expect);

/*  Polling funtion will be invoked at given given interval and bring the latest Medication and address.
We can use API voice call api function, data from web app (dashboard.js) or data from DB as polling the respective function.
Later on we can apply validation and report an issue.
*/

function pollingFunction() {
  console.log("Fetching Address...")
  const randomNumber= Math.floor(Math.random()*cases.length)
  console.log(addressValidator(cases[Math.floor(Math.random()*cases.length)].Address))
   // Here we can Compare address & Medicine from Api and Web and DB
  softExpect(addressValidator((cases[randomNumber].Address))).to.be.true;
  if(addressValidator((cases[randomNumber].Address)))
    {
    console.error(cases[randomNumber].TestCase)
    // Here we can log an issue if any test case will be failed.
   
    }
}


function handlePoll(response, status) {
  // do something with the response and current polling status
  console.log('The response is:', response)
  console.log('Current polling status is:', status)
}


function stopPollingOnCondition(currentResponse, previousResponse) {
  // return true if you wish to stop polling
  if (currentResponse === 'Half a Bee' && previousResponse === 'Eric') // Any condition as per requiremnt
    return true

  // return false if you don't want to stop and keep on polling
  return false;
}

// configure your poller
const poller = new Pollinator(pollingFunction, {
  conditionFn: stopPollingOnCondition,
  delay: 1000,
})

// Start your poller
poller.start()

//polling function must subscribe to an event
poller.on(Pollinator.Event.POLL, handlePoll('Waiting', 'Test'))


