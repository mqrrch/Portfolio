export default function Homepage(){
    return(
        <div id="homepage" className="hp-container h-[calc(100vh-100px)]">
            <h1 className="hp-title text-white leading-[1.3]">Hey, I am <br></br><span className="hp-name">Marchel</span></h1>
            <h3 className="hp-subtitle text-gray-200 max-w-[800px] ">I am a front end developer that likes to create websites. idk anymore bro</h3>
            <div className="mt-10 2xl:mt-16">
                <a href="#contact" onClick={e => {
                    e.preventDefault();
                    const target = document.querySelector('#contact');
                    if (target){
                        target.scrollIntoView({ behavior: "smooth" })
                    }
                }} 
                className="hp-button border-2 border-[#975bac] hover:bg-[#975bac] transition-colors text-white p-4 lg:p-5 2xl:p-6 rounded-2xl cursor-pointer">
                    Contact me!
                </a>
            </div>
        </div>
    )
}