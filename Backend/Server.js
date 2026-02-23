const { default: axios } = require("axios");
const express = require("express");
const OpenAI = require("openai")

const cors = require("cors")
const app = express();

require("dotenv").config();
app.use(express.static("public"));
app.use(cors())
app.use(express.json());
// app.post()
app.post("/api/genrate" , async (req , res)=> {
    
    try {
        const {content} = req.body;

         const client = new OpenAI({
            apiKey: process.env.GROQ_API_KEY,
            baseURL: "https://api.groq.com/openai/v1",
        });

        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content: content,
                }
            ]
        });

        // const response = await axios.post("https://openrouter.ai/api/v1/chat/completions" , 
        //     {
        //         model: "openai/gpt-oss-120b",
        //         messages: [
        //         {
        //             role: "user",
        //             content: content,
        //         }
        //         ]
        //     },
        //     {
        //     headers : {
        //         Authorization : `Bearer ${process.env.OPEN_API}`,
        //         "Content-Type": "application/json",
        //     }
        //     }
           
        // )

        res.send(response.choices[0]?.message?.content || "No summary genrated");

    } catch (error) {
        console.log("Something went wrong ..")
        console.log(error.message)
    }

})

app.listen(process.env.PORT , () => {
    console.log("Your Server is running on port : " , process.env.PORT)
})