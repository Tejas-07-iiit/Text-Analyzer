import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const Gemini = () => {
  
  const [summary,setSummary] = useState("")
  const [output,setOutput] = useState("")
  
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

const ai = new GoogleGenAI({apiKey:"AIzaSyDv0nVluWQrR5-aLQT5ibgvgHOMqsvwOuM"});
const summarize = async () => {
  const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: prompt+summary,
      });
      const ans = response.text
      setOutput(ans)
  }

  const handletext = (event) => {
    console.log(summary)
    console.log(output+"hi i am output")
    setSummary(event.target.value)
  }

  const desc = `
  Provide the content below ,and i will create a concise 
  summary for you. Let's make it engaging and clear`

  return (
    
      <div id = "ai" className="ai">
        <h3 className="text" style={{color:"#F2F2F2"}}>AI Text Summarizer</h3>
        <pre className="text">{desc}</pre>
        <textarea className="input" onChange={handletext} defaultValue={"Paste Your Text Here..."}></textarea>
        <button onClick={summarize} className="ai-btn">Generate Summary</button>
        <div className="line_ai"></div>

        <textarea className="output" id="height_text" value={output} readOnly ></textarea>

        {/* <pre className="output">{output}</pre> */}
      </div>
    
  )
}

export default Gemini