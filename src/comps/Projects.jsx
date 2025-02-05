import gemsCloneImage from "../assets/mqrrch.github.io_Gems-Clone.png"
import weatherAppImage from "../assets/mqrrch.github.io_Weather-App_.png"
import toDoListImage from "../assets/mqrrch.github.io_To-Do-List_.png"
import quizImage from "../assets/mqrrch.github.io_Quiz_.png"

export default function Projects(){
    const projects = [
        {
            img: gemsCloneImage,
            alt: 'Gems Clone Image',
            name: 'Gems Clone',
            text: 'A landing page clone of Gems website.',
            tools: ['HTML', 'CSS', 'Javascript', 'Tailwind', 'React'],
            webLink: 'https://mqrrch.github.io/Gems-Clone/',
            ghLink: 'https://github.com/mqrrch/Gems-Clone'
        },
        {
            img: weatherAppImage,
            alt:'Weather App Image',
            name: 'Weather App',
            text: 'Weather app type shit.',
            tools: ['HTML', 'CSS', 'Javascript', 'Tailwind', 'React'],
            webLink: 'https://mqrrch.github.io/Weather-App/',
            ghLink: 'https://github.com/mqrrch/Weather-App'
        },
        {
            img: toDoListImage,
            alt:'To Do List Image',
            name: 'To Do List',
            text: 'Do your to do list wow.',
            tools: ['HTML', 'CSS', 'Javascript', 'Tailwind', 'React'],
            webLink: 'https://mqrrch.github.io/To-Do-List/',
            ghLink: 'https://github.com/mqrrch/To-Do-List'
        },
        {
            img: quizImage,
            alt:'Quiz Image',
            name: 'Quiz',
            text: 'Quiz wow very cool wow.',
            tools: ['HTML', 'CSS', 'Javascript', 'Tailwind', 'React'],
            webLink: 'https://mqrrch.github.io/Quiz/',
            ghLink: 'https://github.com/mqrrch/Quiz'
        },
    ]

    return(
        <div id="projects" className="text-white max-w-[640px] lg:max-w-[900px] xl:max-w-[1100px] mx-auto mt-10">
            <h3 className="projects-page-title text-2xl font-bold mb-6">My Projects</h3>
            <div className="project-list grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((item, index) => (
                    <div className="project-card bg-[rgba(0,0,0,0.5)] p-4 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl" key={index}>
                        <div className="project-card-img-wrapper h-48 xl:h-80 w-full overflow-hidden rounded-lg">
                            <img src={item.img} alt={item.alt} className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="project-card-text-wrapper mt-2">
                            <div className="flex items-center justify-between">
                                <p className="project-title text-lg font-semibold">{item.name}</p>
                                <div className="space-x-3 text-lg">
                                    <a href={item.webLink} target="_blank" rel="noopener noreferrer" title="View Project" className="hover:text-[#975bac] transition-colors">
                                        <i className="fa-solid fa-globe"></i>
                                    </a>
                                    <a href={item.ghLink} target="_blank" rel="noopener noreferrer" title="View Repository" className="hover:text-[#975bac] transition-colors">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <p className="project-desc text-sm mt-2">{item.text}</p>
                            <div className="project-card-tags flex gap-2 mt-4 flex-wrap">
                                {item.tools.map((tool, idx) => (
                                    <div key={idx} className="project-tag py-1 px-2 bg-neutral-900 rounded hover:scale-105 transition-transform">
                                        <p className="text-sm text-[#975bac] font-bold">{tool}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}