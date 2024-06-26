export default function SkillBar({name, progress}) {
    return (
        <div class="flex flex-row items-center space-x-4">
            <p class="font-semibold w-36">{name}</p>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style={{width: progress}}></div>
            </div>
        </div>
    )
}