import OpenAI from "openai";
import dotenv from "dotenv";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";
import inquirer from "inquirer";
import { collections } from "../src/collections";
import { join} from 'path';
import fs from 'fs';


dotenv.config({ path: '.env.private' });

const aiEnvPath = join(process.cwd(), ".env.ai");


if(!fs.existsSync(aiEnvPath)){

    const answers = await inquirer.prompt([
        {
            type: "password",
            name: "apiKey",
            message: "Enter your API key:",
            mask: "*",
            validate: (input) =>
                input.length > 0 ? true : "The API key cannot be empty",
        },
    ]);


    fs.writeFileSync(aiEnvPath , `API_KEY=${answers.apiKey}`)

    console.log("A .env.ai file has been created at the root of your project containing your API key and has been added to your .gitignore to ensure it isn’t committed to version control.")

}


dotenv.config({path: '.env.ai'})


if (!process.env.SYSTEM_PROMPT) {
    console.error("SYSTEM_PROMPT is not set in the environment variables.");
    process.exit(1);
}

if(!process.env.USER_PROMPT){
    console.error("USER_PROMPT is not set in the environment variables.")
    process.exit(1)
}

const SYSTEM_PROMPT = process.env.SYSTEM_PROMPT
const tasks = process.env.USER_PROMPT?.split(",") as string[]


const availableModels = [
  "gpt-4o-2024-08-06",   // 🧠 Precisión alta con zodResponseFormat
  "gpt-4o-mini",         // ⚡ Más barato y rápido
  "gpt-4",               // Más costoso, pero aún compatible
  "gpt-3.5-turbo",       // Bueno para tareas simples
  "gemini-2.5-flash",    // Si usas Gemini (Google)
  "gemini-2.0-flash",    // Versión anterior
];

const { selectedModel } = await inquirer.prompt([
  {
    type: "list",
    name: "selectedModel",
    message: "Select the model to use:",
    choices: availableModels,
  },
]);

const { selectedCollection } = await inquirer.prompt([
  {
    type: "list",
    name: "selectedCollection",
    message: "Select the collection to which the post will belong:",
    choices: collections,
  },
]);





const getDate = () => {
    const today = new Date();
    const formatted = today.toISOString().split('T')[0];

    return formatted

}

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const postSchema = z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    content: z.string(),
    slug: z.string(),
});

export type TResponse = z.infer<typeof postSchema>;


const openai = new OpenAI({
    apiKey: process.env.API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});


let counter = 1
console.log("                ")

const cyan = "\x1b[36m";
for (const prompt of tasks) {
    process.stdout.write(`${cyan} GENERATING ${counter}/${tasks.length}...\r`);

    const completion = await openai.chat.completions.parse({
        model: selectedModel || "gemini-2.5-flash",
        messages: [
            { role: "system", content: SYSTEM_PROMPT || "You are a helpful assistant." },
            {
                role: "user",
                content: prompt || "What is the capital of France?",
            },
        ],
        response_format: zodResponseFormat(postSchema, "event"),
    });

    const result = completion.choices[0].message.content as string
    const response = JSON.parse(result) as TResponse;

    counter++;


    const parsedPost = `---
title: "${response.title}"
description: "${response.description}"
pubDate: "${getDate()}"
heroImage: "../../assets/post_placeholder.png"
tags: [${response.tags.slice(0,3).map(tg => '"' + tg.toLocaleLowerCase() + '"')}]
---


${response.content}
`
    const post_md_path = join(process.cwd(), `src/content/${selectedCollection}/${response.slug}.md`);
    fs.writeFileSync(post_md_path  , parsedPost);

    await wait(2000);
}

console.log("All posts have been created successfully! 🎉")