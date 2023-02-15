const router= require('express').Router()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});




router.post("/gptmsg",(req,res)=>{
  const openai = new OpenAIApi(configuration)

const completion = openai.createCompletion({
  model:'text-davinci-003',
  prompt: req.body.prompt,
  max_tokens: 1000
})

console.info('sending ...')
completion.then((r) =>{
  console.log(r.data.choices[0].text)
})

})


