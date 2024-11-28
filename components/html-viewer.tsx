'use client '


import React, {useState ,ChangeEvent} from "react"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import predefinedHtml from "./predefinedHtml"


export default function HtmlViewer() {
 
    const [htmlCode , setHtmlCode] =useState <string >("")
    const[ previewHtml , setPreviewHtml] =useState <string>("")
    

    const handlePreview =():void =>{
        setPreviewHtml(htmlCode)

    }
    
 const handlePasteHtml = (): void => {
    if (typeof predefinedHtml === 'string') {
      setHtmlCode(predefinedHtml); // This works if predefinedHtml is a string
    } else {
      console.error('predefinedHtml is not a string!');
    }
  };

    const handleChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        setHtmlCode(e.target.value)
    }
 
 
 
    return (
    <div className=' p-2 flex flex-col items-center justify-center min-h-screen bg-gradient-to-l from-amber-100 to-cyan-100 text-foreground' >
        <div className=" w-full max-w-2xl p-6 rounded-lg shadow-lg  bg-gradient-to-l from-amber-50 to-cyan-50">
            <h1 className="text-2xl font-bold mb-4 text-center ">HTML previewer</h1>
            <p className="text-muted-foreground mb-4 text-center ">
                Enter your HTML code and see the preview.
            </p>
            <div className="grid gap-4 "> 
                <Textarea
                value={htmlCode}
                onChange={handleChange}
                placeholder="Enter yor HTML code here..."
                className="p4 rounded-lg bg-gradient-to-l from-gray-100 to-zinc-100 border border-input   text-foreground"
                rows={8}
                />
                <div className="flex justify-center">
                    <div className="flex gap-2">
                        <Button onClick={handlePasteHtml}>Paste HTML</Button>
                        <Button onClick={handlePreview}>Gentrate Preview</Button>
                    </div>
                </div>
                <div className="p-4 rounded-lg border border-input bg-background text-foreground ">
                    <div className="" dangerouslySetInnerHTML={{ __html:previewHtml}}></div>
                </div>
            </div>
        </div>

      <p className="relative bottom-1 w-full text-center font-bold text-rose-400">Built with 💙 by Zohaib</p>
    </div>
  )
}