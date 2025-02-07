export default function Homepage({ isContactOpen, setIsContactOpen }){
    return(
        <div id="homepage" className="hp-container h-[calc(100vh-100px)] max-w-[640px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] m-auto">
            <h1 className="hp-title text-white leading-[1.3]">Hey, I am <br></br><span className="hp-name">Marchel</span></h1>
            <h3 className="hp-subtitle text-gray-200 max-w-[800px] ">I am a front end developer that likes to create websites. idk anymore bro</h3>
            <div className="mt-10 2xl:mt-16">
                <a href="#contact" className="hp-button bg-white p-4 lg:p-5 2xl:p-6 rounded-lg cursor-pointer font-semibold">Contact me!</a>
            </div>
        </div>
    )
}