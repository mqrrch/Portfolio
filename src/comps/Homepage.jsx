export default function Homepage({ isContactOpen, setIsContactOpen }){
    return(
        <div id="homepage" className="hp-container mt-8 h-[calc(100vh-100px)] max-w-[640px] lg:max-w-[900px] xl:max-w-[1100px] m-auto">
            <h1 className="hp-title text-[1.6rem] md:text-[2.5rem] text-white leading-snug">Hey, I am <br></br><span className="text-[3.4rem] md:text-[4rem]">Marchel</span></h1>
            <h3 className="hp-subtitle text-gray-200 max-w-[360px]">I am a front end developer that likes to create websites. idk anymore bro</h3>
            <div className="mt-10">
                <a onClick={() => setIsContactOpen(true)} className="bg-white p-3 rounded-lg cursor-pointer">Contact me!</a>
            </div>
        </div>
    )
}