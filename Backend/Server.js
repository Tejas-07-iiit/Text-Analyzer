const { default: axios } = require("axios");
const express = require("express");

const cors = require("cors")
const app = express();

require("dotenv").config();

app.use(cors())
app.use(express.json());
// app.post()
app.post("/api/genrate" , async (req , res)=> {
    
    try {
        const {content} = req.body;

        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions" , 
            {
                model: "openai/gpt-oss-120b",
                messages: [
                {
                    role: "user",
                    content: content,
                }
                ]
            },
            {
            headers : {
                Authorization : `Bearer ${process.env.OPEN_API}`,
                "Content-Type": "application/json",
            }
            }
           
        )

        res.send(response.data.choices[0].message.content);
    } catch (error) {
        console.log("Something went wrong ..")
        console.log(error.message)
    }

})

app.listen(process.env.PORT , () => {
    console.log("Your Server is running on port : " , process.env.PORT)
})