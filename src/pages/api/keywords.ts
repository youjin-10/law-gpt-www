// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("req.body", req.body);
  const model = "text-davinci-003";
  const { inquiry } = req.body;
  const prompt = `Read the following and summarize it in three legal words at maximum. The words should be relavant to the following sentence and the law. Answer in Korean. 
  \n [${inquiry}]`;

  console.log("prompt", prompt);
  const completion = await openai.createCompletion({
    model,
    prompt,
    // prompt: "alway say hi",
    max_tokens: 256,
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
};

export default handler;
