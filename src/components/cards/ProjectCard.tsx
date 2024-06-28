interface ProjectCardProps {
    name: string;
    description: string;
    link: string;
}

export default function ProjectCard({name, description, link}: ProjectCardProps) {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={link}>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-center pb-3">{name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 h-auto md:h-56">{description}</p>
            <a href={link} className="inline-flex font-medium items-center text-blue-600 hover:underline">
                Checkout now
                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                </svg>
            </a>
        </div>
    )
}