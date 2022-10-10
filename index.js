const axios = require('axios');
const {Configuration, OpenAIApi} = require("openai");
require('dotenv').config();

const GATEWAY_URL = process.env.GATEWAY_URL;
const MINIO_URL = process.env.MINIO_URL;
const MINIO_BUCKET = process.env.MINIO_BUCKET;
const USER_ADDRESS = process.env.USER_ADDRESS;
const USER_MESSAGE = process.env.USER_MESSAGE;
const USER_SIGNATURE = process.env.USER_SIGNATURE;

const title_prompt = `A diverse set of highly detailed and imaginative titles of digital artworks I would like to make, one per line

off-grid cyberpunk vanlife explorer surveying mars oasis
photo of holy futuristic cyborg robot painter
digital illustration of tokyo cityscape
cyber neon AI art kid on vast barren desert
portrait of a biomechanical head inside an orb
lush tropical forest with strange birdlike creatures patrolling the canopies
cyberpunk hero whiz kid in the neon city super high-tech future
a film still of an adventurer kid with cyber gear riding an electric unicycle on a desert with rocks, cactus, mountains
hyper mecha digital nomads clad in cyberpunk attire looking menacing
off-grid survivalist scientists vanlife in a desert oasis
epic winged Hippogriff flying over a medieval castle under a dark starred sky
futuristic military cyborgs with high-tech gear in a desolate wasteland
vibrant xenomorph with aurora inspired by fine greek sculpture
cybernetic holographic ninja riding a motorcycle with a katana
`;

const modifier_prompt = `For each title, propose a set of detailed and relevant stylistic modifiers which create a unique aesthetic.

Title: off-grid cyberpunk vanlife explorer surveying mars oasis
Modifiers: storybook illustration, trending on pixiv, rendered 4k in Octane, raytracing

Title: epic winged Hippogriff flying over a medieval castle under a dark starred sky
Modifiers: magic realism, storybook fantasy, ink drawing, behance best of the week

Title: portrait of a biomechanical head inside a futuristic space helmet
Modifiers: Baroque, kinetic pointillism, watercolors, concept art, divine and awe-inspiring

Title: lush tropical forest with strange birdlike creatures patrolling the canopies
Modifiers: album cover, mix of afrofuturism and sōsaku hanga, detailed pencil sketch
`;


async function createPrompt() {
  
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  let title = '';
  let modifiers = '';

  while (title.length == 0) {
    let completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: title_prompt,
      temperature: 0.99,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 2.0,
      presence_penalty: 1.0,
      stop: ["\n"]
    });
    title = completion.data.choices[0].text;
  }

  while (modifiers.length == 0) {
    const mod_prompt = `${modifier_prompt}\nTitle: ${title}\nModifiers: `
    let completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: mod_prompt,
      temperature: 0.99,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 2.0,
      presence_penalty: 1.0,
      stop: ["\n"]
    });    
    modifiers = completion.data.choices[0].text;
  }

  const prompt = `${title}, ${modifiers}`

  return prompt;
}


async function getAuthToken(data) {
  let response = await axios.post(GATEWAY_URL+'/sign_in', data)
  var authToken = response.data.authToken;
  return authToken;
}


async function startPrediction(data) {
  let response = await axios.post(GATEWAY_URL+'/request', data)
  return response;
}


async function main() {

  // get auth token
  let authData = {
    "userType": "ethereum", 
    "userId": USER_ADDRESS,
    "message": USER_MESSAGE,
    "signature": USER_SIGNATURE
  };
  
  let authToken = await getAuthToken(authData);
  console.log(`auth token: ${authToken}`);

  // create prompt
  let prompt = await createPrompt();
  console.log(`prompt: ${prompt}`);

  // choose random width, height
  let options = [[512, 512], [640, 640], [512, 832], [832, 512]];
  let choice = options[Math.floor(Math.random() * options.length)];
  let {W, H} = {W: choice[0], H: choice[1]};
  
  // send request to eden
  let config = {
    "mode": "generate", 
    "text_input": prompt,
    "sampler": "euler_ancestral",
    "scale": 10.0,
    "steps": 50, 
    "W": W,
    "H": H,
    "seed": Math.floor(1e8 * Math.random())
  }

  const request = {
    "token": authToken,
    "application": "heartbeat", 
    "generator_name": "stable-diffusion", 
    "config": config
  }

  let response = await startPrediction(request);
  let prediction_id = response.data;
  console.log(`job submitted, task id ${prediction_id}`);

  // poll every few seconds for update to the job
  setInterval(async function() {
    let response = await axios.post(GATEWAY_URL+'/fetch', {
      "taskIds": [prediction_id]
    });
    let {status, output} = response.data[0];
    if (status == 'complete') {
      let imgUrl = `${MINIO_URL}/${MINIO_BUCKET}/${output}`;
      console.log(`finished! image at ${imgUrl}`);
      clearInterval(this);
    }
    else if (status == 'failed') {
      console.log("failed");
      clearInterval(this);
    }
  }, 2000);

}

main();
setInterval(main, 5 * 60 * 1000);


