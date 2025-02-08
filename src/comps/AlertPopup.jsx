import { useEffect, useRef, useState } from "react"

export default function AlertPopup({ initialTime, setInitialTime, result }){
    const timerRef = useRef(null);
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        setTime(initialTime);
    }, [initialTime])

    useEffect(() => {
        if (time > 0) {
            const timer = setTimeout(() => {
                setTime(prev => prev - 1);
            }, 1000);
            return () => clearTimeout(timer);
        };
        setInitialTime(0);
    }, [time])

    return(
        time ? (
            <div id="alert-popup" className="fixed top-3 lg:top-6 2xl:top-8 left-1/2 transform -translate-x-1/2 transition-transform duration-700 bg-[rgba(0,0,0,1)] w-[80%] max-w-[360px] md:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[640px] lg:px-5 p-3">
                {result === 'fail' ? (
                    <>
                        <div id="timer" ref={timerRef} className="absolute left-0 top-0 bg-red-500 h-1 timer-animation"></div>
                        <div className="mt-1 text-white">
                            <p>Sorry! The message cant be sent!<br></br>Please email me instead!</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div id="timer" ref={timerRef} className="absolute left-0 top-0 bg-blue-500 h-1 timer-animation"></div>
                        <div className="mt-1 text-white">
                            <p>Message has been sent!<br></br>I will look into it as soon as possible!</p>
                        </div>
                    </>
                )}
            </div>
        ) : (
            <div id="alert-popup" className="fixed top-3 lg:top-6 2xl:top-8 left-1/2 transform -translate-y-[200%] -translate-x-1/2 transition-transform duration-700 bg-[rgba(0,0,0,1)] w-[80%] max-w-[360px] md:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[640px] lg:px-5 p-3">
                {result === 'fail' ? (
                    <>
                        <div id="timer" ref={timerRef} className="absolute left-0 top-0 bg-red-500 h-1"></div>
                        <div className="mt-1 text-white">
                            <p>Sorry! The message cant be sent!<br></br>Please email me instead!</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div id="timer" ref={timerRef} className="absolute left-0 top-0 bg-blue-500 h-1"></div>
                        <div className="mt-1 text-white">
                            <p>Message has been sent!<br></br>I will look into it as soon as possible!</p>
                        </div>
                    </>
                )}
            </div>
        )
    )
}