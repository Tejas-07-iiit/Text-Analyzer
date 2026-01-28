import { useState } from "react";
import Loader from "./Loader"

const Gemini = (props) => {


  const [summary,setSummary] = useState("")
  const [output,setOutput] = useState("")
  const [load , setload] = useState(false)

  const prompt = `
You are an expert content summarizer.

Task:
Summarize the given text in a clear, engaging way using a MIX of short paragraphs and bullet points.

Rules:
- Start with a short paragraph (2–3 lines) giving an overall idea of the text.
- Then write the main content in Arrow points.
- Each Arrow point should be clear, meaningful, and easy to understand.
- The summary must NOT be too short and NOT too long (keep a balanced length).
- Use simple English.
- Add a few relevant emojis to make it friendly and engaging (do not overuse).
- Do NOT change the original meaning of the text.
- Keep the tone professional, positive, and user-friendly.
- Make it attractive so users feel satisfied and want to revisit the website.
- Avoid unnecessary technical or complex words.
- space between the each line
- use emojis as much as possible but not more each pont contain atleast one emoji
Output format example:

✨ Summary:
[Short paragraph overview here…]

🔹 Key Points:
• Point 1 …
• Point 2 …
• Point 3 …
• Point 4 …



Now summarize the following text: 
`

// const ai = new GoogleGenAI({apiKey:apikey});
// const summarize = async () => {
//   setload(true)
//   const response = await ai.models.generateContent({
//         model: "gemini-2.5-flash-lite",
//         contents: prompt+summary,
//       });
//       const ans = response.text
//       setload(false)
//       setOutput(ans)
      
//   }

const summarize = async () => {
  setload(true)
  const res1 = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer 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',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-oss-120b',
    messages: [
      {
        role: 'user',
        content: prompt+summary,
      },
    ],
  }),
});
  const res = await res1.json();
  
  setOutput(res.choices[0].message.content)
  setload(false)
  // console.log(ans)
}

  const handletext = (event) => {
    setSummary(event.target.value)
  }

  const desc = `
  Provide the content below ,and i will create a concise 
  summary for you. Let's make it engaging and clear`

  return (
    
      <div id = "ai" className={`ai bg-${props.mode === "light" ? "light" : "custom"}`}>
        <h3 className={`text-${props.mode === 'light'?'dark':'light'} text`} style={{color:"#F2F2F2"}}>AI Text Summarizer</h3>
        <pre className={`text-${props.mode === 'light'?'dark':'light'} text`}>{desc}</pre>
        <textarea className="input" onChange={handletext} style={{border:"2px solid black" , borderRadius:"10px" , overflow:"hidden"}} defaultValue={"Paste Your Text Here..."}></textarea>
        <button onClick={summarize} className="ai-btn">Generate Summary</button>
        <div className="line_ai"></div>

        {
         load && <Loader />
        }
        <textarea className={`text-${props.mode === 'light'?'dark':'light'} output ou-${props.mode === "light"?"dark":"light"}`} id="height_text" value={output} readOnly ></textarea>

        {/* <pre className="output">{output}</pre> */}
      </div>
    
  )
}

export default Gemini