interface SkillBarProps {
    name: string;
    progress: string;
}


export default function SkillBar({name, progress}: SkillBarProps) {
    return (
        <div className="grid md:grid-rows-2 grid-cols-1 items-center md:space-y-0 space-y-3">
            <p className="font-semibold">{name}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: progress}}></div>
            </div>
        </div>
    )
}