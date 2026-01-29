const About = (props) => {
        
        const text1 = `
                Text-analyzer.tech Is A Free Online Text Editing Platform ✨ Where Users Can Easily Edit And Analyze Their Text.

                The Platform Provides Multiple Text Editing Features ⚡, Including:
                                → Converting Text To Uppercase
                                → Converting Text To Lowercase
                                → Converting Text To Camel Case

                After Editing, Users Can Copy Or Download Their Text Instantly ⬇️📋.

                One Of Our Main Services Is Email Detection 📧. Users Can Identify Email Addresses From The Given Text And Easily Copy Or Download The Extracted Emails.

                This Feature Is Especially Helpful For Quickly Finding And Managing Email Data 🔍.

                Additionally, Users Can Download A Summary Of Their Text 📊, Such As:
                                → Number Of Characters (with And Without Spaces)
                                → Number Of Words
                                → Number Of Detected Email Addresses

                Text-analyzer.tech Is Built For 👥:
                                → Students 🎓 Who Need Quick And Accurate Text Checks
                                → Writers ✍️ And Bloggers Polishing Their Content
                                → Anyone Who Works With Text And Wants Fast Results

                The Platform Is Easy To Use And Requires No Login 👍.

                Your Privacy Matters To Us 🔒. We Do Not Store, Save, Or Share Any Text You Enter On Our Website.
                All Processing Happens Instantly ⚡, Ensuring Your Content Remains Private And Secure.

                Thank You For Connecting With Text-analyzer.tech ❤️.
                `

                
  return (
   <>   <h2 className={`my-3 mx-4 text-${props.mode==="light"?"dark":"light"} text`}>Welcome to Text Analyzer</h2>
       <div className={`text-${props.mode==="light"?"dark":"light"} text about border border-${props.mode === "light"?"dark":"secondary"}`} style={{ whiteSpace: "pre-line"}}>
                <div className="mx-2">{text1}</div>
        </div>
        
   </>
  )
}

export default About
