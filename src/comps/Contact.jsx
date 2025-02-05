export default function Contact(){
    return(
        <div id="contact" className="mt-16 mb-6 flex flex-col text-white max-w-[360px] mx-auto">
            <h3 className="text-2xl md:text-3xl text-center">Contact me!</h3>
            <form action="https://formsubmit.co/a339e5ea91a2471582a9aa609504a2cf" method="POST"
            className="flex flex-col mt-5 gap-3 md:text-xl">
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

                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_next" value="#"></input>
                
                <button type="submit" className="p-1 border-2 border-[#975bac] rounded">Send</button>
            </form>
        </div>
    )
}