import { useTransition, animated } from "@react-spring/web"

export default function ContactPopup({ isContactOpen, setIsContactOpen }){
    const overlayTransition = useTransition(isContactOpen, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { tension: 100, friction: 20 },
    })

    const popupTransition = useTransition(isContactOpen, {
        from: { transform: "translateY(150%)" },
        enter: { transform: "translateY(0%)" },
        leave: { transform: "translateY(150%)" },
        config: { tension: 120, friction: 20 },
    })

    return(
        overlayTransition(
            (styles, item) =>
                item && (
                    <animated.div style={styles} onClick={() => setIsContactOpen(false)}
                    className="bg-[rgba(23,23,23,0.5)] fixed top-0 left-0 w-full h-screen flex justify-center items-center z-20">
                        {popupTransition(
                            (styles, item) =>
                                item && (
                                    <animated.div id="contact-popup" style={styles} onClick={e => e.stopPropagation()}
                                    className="p-6 flex flex-col m-auto text-white w-[80%] max-w-[360px] bg-gray-800 rounded-xl">
                                        <i className="fa-solid fa-xmark absolute top-4 right-4 cursor-pointer" onClick={() => setIsContactOpen(false)}></i>
                                        <h3 className="contact-popup-title text-2xl text-center">Contact me!</h3>
                                        <form action="https://formsubmit.co/a339e5ea91a2471582a9aa609504a2cf" method="POST"
                                        className="contact-popup-form flex flex-col mt-3 gap-3">
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
                                    </animated.div>
                                )
                        )}
                    </animated.div>
                )
        )
    )
}