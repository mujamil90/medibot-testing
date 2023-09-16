import Telnyx from 'telnyx';
const telnyx = Telnyx('KEY...');

/* 
This is the API (https://telnyx.com/products/voice-api) for voice call from which we can receive the response as call content using playwright.
We can use transcribtion (speech to text) API if the call content is in audio format.
 */

call_content = async ({ request }) => {
  const call = await request.post("https://api.telnyx.com/v2/calls", 
  {
    headers: {
      'Content-Type': 'application/json',
      'Accept': `application/json`,
      'Authorization': `YOUR_API_KEY`
    },
    data: {
      connection_id: 'uuid',
      to: '+18005550199',
      from: '+18005550100'
    }
  });
  expect(call.ok()).toBeTruthy();
};

