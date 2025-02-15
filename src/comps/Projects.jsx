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
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
            tools: ['Javascript', 'Tailwind', 'React'],
            webLink: 'https://mqrrch.github.io/Gems-Clone/',
            ghLink: 'https://github.com/mqrrch/Gems-Clone'
        },
        {
            img: weatherAppImage,
            alt:'Weather App Image',
            name: 'Weather App',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
            tools: ['Javascript', 'Tailwind', 'React'],
            webLink: 'https://mqrrch.github.io/Weather-App/',
            ghLink: 'https://github.com/mqrrch/Weather-App'
        },
        {
            img: toDoListImage,
            alt:'To Do List Image',
            name: 'To Do List',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
            tools: ['Javascript', 'Tailwind', 'React', 'Firebase', 'Redux'],
            webLink: 'https://mqrrch.github.io/To-Do-List/',
            ghLink: 'https://github.com/mqrrch/To-Do-List'
        },
        {
            img: quizImage,
            alt:'Quiz Image',
            name: 'Quiz',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
            tools: ['Javascript', 'Tailwind', 'React'],
            webLink: 'https://mqrrch.github.io/Quiz/',
            ghLink: 'https://github.com/mqrrch/Quiz'
        },
    ]

    return(
        <div id="projects" className="text-white mt-24">
            <h3 className="projects-page-title font-[500] mb-6">My Projects</h3>
            <div className="project-list grid grid-cols-1 sm:grid-cols-2 2xl:gap-x-20 gap-6">
                {projects.map((item, index) => (
                    <div className="project-card bg-[rgba(0,0,0,0.5)] p-4 2xl:p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl" key={index}>
                        <a href={item.webLink} target="_blank">
                            <div className="project-card-img-wrapper h-48 xl:h-[14rem] 2xl:h-[20rem] overflow-hidden rounded-lg">
                                <img src={item.img} alt={item.alt} className="w-full h-full object-cover object-top" />
                            </div>
                        </a>
                        <div className="project-card-text-wrapper mt-2 xl:mt-4">
                            <div className="flex items-center justify-between">
                                <a href={item.webLink} target="_blank" className="project-title text-lg font-[400] hover:underline hover:cursor-pointer">{item.name}</a>
                                <div className="project-links space-x-3 xl:space-x-5 2xl:space-x-7">
                                    <a href={item.webLink} target="_blank" rel="noopener noreferrer" title="View Project" className="inline-block hover:text-[#975bac] hover:scale-125 transition-all">
                                        <i className="fa-solid fa-globe"></i>
                                    </a>
                                    <a href={item.ghLink} target="_blank" rel="noopener noreferrer" title="View Repository" className="inline-block hover:text-[#975bac] hover:scale-125 transition-all">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <p className="project-desc text-sm mt-2 leading-tight">{item.text}</p>
                            <div className="project-card-tags flex gap-2 2xl:gap-3 mt-8 flex-wrap">
                                {item.tools.map((tool, idx) => (
                                    <div key={idx} className="project-tag-container group py-[2px] px-2 xl:py-[6px] xl:px-[8px] 2xl:py-[12px] 2xl:px-[10px] bg-neutral-900 rounded hover:scale-110 transition-transform">
                                        <p className="project-tag-text text-sm text-[#975bac] group-hover:text-[#c492d6] transition-colors font-bold">{tool}</p>
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