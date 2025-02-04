import gemsCloneImage from "../assets/mqrrch.github.io_Gems-Clone.png"
import weatherAppImage from "../assets/mqrrch.github.io_Weather-App_.png"
import toDoListImage from "../assets/mqrrch.github.io_To-Do-List_.png"

export default function Projects(){
    const projects = [
        {
            img: gemsCloneImage,
            alt: 'Gems Clone Image',
            name: 'Gems Clone',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione rerum saepe deleniti ullam distinctio! Commodi dolor consequuntur sequi quas ducimus.',
            tools: ['HTML', 'CSS', 'Javascript', 'Tailwind', 'React'],
            webLink: 'https://mqrrch.github.io/Gems-Clone/',
            ghLink: ''
        },
        {
            img: weatherAppImage,
            alt:'Weather App Image',
            name: 'Weather App',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione rerum saepe deleniti ullam distinctio! Commodi dolor consequuntur sequi quas ducimus.',
            tools: ['HTML', 'CSS', 'Javascript', 'Tailwind', 'React'],
            webLink: 'https://mqrrch.github.io/Weather-App/',
            ghLink: ''
        },
        {
            img: toDoListImage,
            alt:'To Do List Image',
            name: 'To Do List',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione rerum saepe deleniti ullam distinctio! Commodi dolor consequuntur sequi quas ducimus.',
            tools: ['HTML', 'CSS', 'Javascript', 'Tailwind', 'React'],
            webLink: 'https://mqrrch.github.io/To-Do-List/',
            ghLink: ''
        }
    ]

    return(
        <div className="text-white mt-10 p-6">
            <h3 className="text-2xl">Projects</h3>
            <div className="project-list flex flex-col gap-10 mt-2">
                {projects.map((item, index) => {
                    return (
                        <div className="project-card" key={index}>
                            <div className="project-card-img-wrapper">
                                <img src={item.img} alt={item.alt} className="w-full h-auto object-cover"></img>
                            </div>
                            <div className="project-card-text-wrapper flex flex-col">
                                <div className="project-card-text flex items-center justify-between mt-2">
                                    <p className="text-lg">{item.name}</p>
                                    <div className="space-x-3">
                                        <a href={item.webLink} target="_blank" title="View Project"><i className="fa-solid fa-globe"></i></a>
                                        <a href={item.ghLink} target="_blank" title="View Repository"><i className="fa-brands fa-github"></i></a>
                                    </div>
                                </div>
                                <div className="project-card-tags flex gap-2 mt-2 flex-wrap">
                                    {item.tools.map((item, index) => {
                                        return (
                                            <div key={index} className="py-[.5px] px-[4px] bg-neutral-900 rounded">
                                                <p className="text-sm text-[#975bac]">{item}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}