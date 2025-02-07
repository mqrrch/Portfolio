import { useState } from "react";

export default function Contact(){
    const [result, setResult] = useState("");
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            setResult("Sending....");
            const formData = new FormData(event.target);
    
            formData.append("access_key", "e1e69738-aaae-438f-bbfa-af00d91b5c87");
    
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
    
            const data = await response.json();
    
            if (data.success) {
                setResult("Form Submitted Successfully");
                alert('Message has been sent! I will look at it as soon as I can!')
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        };

    return(
        <div id="contact" className="my-20 mb-6 flex flex-col text-white">
            <h3 className="text-2xl md:text-3xl">Contact me!</h3>
            <p>Feel free to drop a message!</p>
            <form onSubmit={handleSubmit} className="flex flex-col mt-5 gap-3 md:text-xl">
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" autoComplete="off" className="pl-1 border-2 border-[#975bac] bg-[rgba(0,0,0,0.05)] rounded" required />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" autoComplete="off" className="pl-1 border-2 border-[#975bac] bg-[rgba(0,0,0,0.05)] rounded" required />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="">Message</label>
                    <textarea name="message" id="message" className="pl-1 resize-none border-2 border-[#975bac] bg-[rgba(0,0,0,0.05)] rounded" rows={6} required></textarea>
                </div>

                <button type="submit" className="p-1 border-2 border-[#975bac] rounded">Send</button>
            </form>
        </div>
    )
}