import { useState } from "react";
import AlertPopup from "./AlertPopup";

export default function Contact(){
    const [result, setResult] = useState("");
    const [initialTime, setInitialTime] = useState(0);
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            setResult("Sending....");
            const formData = new FormData(event.target);
    
            formData.append("access_key", "c23fef32-fa1b-4111-8390-e5ede20cf83e");
    
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
    
            const data = await response.json();
    
            if (data.success) {
                setResult("success");
                setInitialTime(4);
                event.target.reset();
            } else {
                setResult('fail');
                console.log("Error", data);
            }
        };

    return(
        <>
            <AlertPopup initialTime={initialTime} setInitialTime={setInitialTime} result={result} />
            <div id="contact" className="mt-32 pt-4 flex flex-col text-white max-w-[640px] lg:max-w-[800px] mx-auto">
                <h3 className="text-2xl md:text-3xl text-center font-[500]">Contact me!</h3>
                <p className="text-sm mt-2 lg:mt-3 2xl:mt-4 text-center">Email: marchel.010706@gmail.com</p>
                <form onSubmit={handleSubmit} id="contact-form" className="flex flex-col mt-2 space-y-[1.15rem]">
                    <div className="flex flex-col lg:gap-1 xl:gap-[6px]">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" autoComplete="off" 
                        className="pl-1 border-2 border-[#975bac] bg-[rgba(0,0,0,0.05)] rounded outline-none" required />
                    </div>

                    <div className="flex flex-col lg:gap-1 xl:gap-[6px]">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" autoComplete="off" className="pl-1 border-2 border-[#975bac] bg-[rgba(0,0,0,0.05)] rounded outline-none" required />
                    </div>

                    <div className="flex flex-col lg:gap-1 xl:gap-[6px]">
                        <label htmlFor="message" className="">Message</label>
                        <textarea name="message" id="message" className="pl-1 resize-none border-2 border-[#975bac] bg-[rgba(0,0,0,0.05)] rounded outline-none" rows={6} required></textarea>
                    </div>

                    <button type="submit" className="p-1 border-2 border-[#975bac] rounded hover:bg-[#975bac] transition-colors">Send</button>
                </form>
            </div>
        </>
    )
}